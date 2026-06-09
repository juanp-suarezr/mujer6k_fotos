<template>
  <Head title="Evidencias" />

  <AuthenticatedLayout :breadCrumbLinks="breadcrumbLinks">
    <template #header> Evidencias </template>

    <div class="flex flex-col md:flex-row md:justify-between mb-4 gap-4">
      <div class="flex-1">
        <input
          type="search"
          @keydown.enter="handleEnterKey"
          v-model="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:border-transparent"
          placeholder="Búsqueda por nombre"
          required
        />
      </div>
      <div class="text-right">
        <PrimaryLink :href="route('evidencias.create')"> Agregar </PrimaryLink>
      </div>
    </div>

    <!-- GRID DE CARDS -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
      v-if="evidencias.data.length > 0"
    >
      <div
        v-for="event in evidencias.data"
        :key="event.id"
        class="bg-white rounded-lg shadow p-4 flex flex-col"
      >
        <!-- Carrusel de imágenes -->
        <Carousel
          :value="event.imagenes?.map((img) => img.link) || []"
          :numVisible="1"
          :numScroll="1"
          circular
          v-if="event.imagenes && event.imagenes.length > 0"
          style="width: 100%"
        >
          <template #item="slotProps">
            <img
              :src="getImageUrl(slotProps.data)"
              alt="Evidencia"
              class="w-full h-48 object-contain rounded"
            />
          </template>
        </Carousel>
        <div
          v-else
          class="w-full h-48 flex items-center justify-center bg-gray-100 rounded text-gray-400"
        >
          Sin imágenes
        </div>

        <!-- Info de la evidencia -->
        <div class="mt-4 flex-1 flex flex-col">
          <h3 class="font-bold text-lg mb-1">{{ event.nombre }}</h3>
          <p class="text-gray-600 text-sm mb-2">{{ event.descripcion }}</p>
          <span class="text-xs text-gray-400 mb-2">
            {{
              new Date(event.created_at).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
            }}
          </span>
          <p
            class="text-xs font-bold rounded-full mb-4"
            :class="{
              'text-green-600': event.estado === 'Activa',
              'text-red-600': event.estado === 'Cerrada',
            }"
          >
            {{ event.estado }}
          </p>
          <div class="mt-auto flex w-full inline-flex flex-col gap-2">
            <PrimaryLink
              class="w-full flex justify-center"
              :href="route('evidencias.edit', event.id)"
              >Editar</PrimaryLink
            >
            <PrimaryButton
              class="w-full flex justify-center"
              @click="mostrarRegistro(event.registros)"
              >Ver Registros</PrimaryButton
            >
            <SecondaryButton
              :href="route('evidencias.destroy', event.id)"
              class="!bg-red-200 flex justify-center"
              >Eliminar</SecondaryButton
            >
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="flex items-center justify-center text-center text-gray-500 mt-10 h-96"
    >
      <em>No se encontraron evidencias.</em>
    </div>

    <div
      class="flex flex-col items-center border-t bg-white px-5 py-5 xs:flex-row xs:justify-between mt-4"
    >
      <pagination :links="evidencias.links" />
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import { ref, inject } from "vue";
import { watch } from "vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import Pagination from "@/Components/Pagination.vue";
import { Head, useForm } from "@inertiajs/vue3";
import { router } from "@inertiajs/vue3";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Avatar from "primevue/avatar";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Carousel from "primevue/carousel";

//alert cool
const swal = inject("$swal");

const props = defineProps({
  evidencias: {
    type: Object,
    default: () => ({}),
  },
  filters: {
    type: Object,
    default: () => ({}),
  },
});

const breadcrumbLinks = [{ url: "", text: "listado de evidencias" }];

//formulario
const form = useForm({
  id: "",
  imagen: "",
});

const imagenesEvidencia = ref([]);

//abrir modal
const visible = ref(false);
//img validator
const IsNewimagen = ref(false);
//url
const imageUrl = ref("");
//loading button
const isLoading = ref(true);
//guardar imagen
const imagen = ref("");

// pass filters in search
let search = ref(props.filters.search);
const handleEnterKey = () => {
  router.get(
    "/evidencias",
    { search: search.value },
    {
      preserveScroll: true,
      preserveState: true,
      replace: true,
    }
  );
};
watch(search, (value) => {
  console.log("Valor de búsqueda actualizado:", value);
});

//IMAGEN
const getImageUrl = (imageName) => {
  // Si las imágenes están almacenadas en la carpeta public/images, la ruta sería algo como esto:
  return `/storage/uploads/evidencias/${imageName}`;
};
</script>
