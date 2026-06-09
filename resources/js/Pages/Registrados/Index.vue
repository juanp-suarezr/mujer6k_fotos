<template>
  <Head title="Usuarios" />

  <AuthenticatedLayout :breadCrumbLinks="breadcrumbLinks">
    <template #header> Registros </template>

    <div
      class="flex inline-block min-w-full overflow-hidden mb-3 grid md:grid-cols-10 gap-4"
    >
      <div class="... col-span-3 w-full m-auto">
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            @keydown.enter="handleEnterKey"
            v-model="search"
            id="default-search"
            class="block w-full py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:border-transparent"
            placeholder="Busqueda de usuarios"
            required
          />
        </div>
      </div>

      <div class="sm:flex inline-block w-full m-auto gap-3 col-span-5">
        <!-- fecha inicio -->
        <Calendar
          v-model="fecha_init"
          dateFormat="dd/mm/yy"
          showButtonBar
          placeholder="Fecha inicio"
          class="my-4 flex justify-center"
        />
        <!-- fecha inicio -->
        <Calendar
          v-model="fecha_end"
          dateFormat="dd/mm/yy"
          showButtonBar
          placeholder="Fecha fin"
          class="my-4 flex justify-center"
        />

        <div class="flex justify-center my-auto gap-2 inline-block ms-2">
          <div class="">
            <PrimaryButton
              type="submit"
              @click="handleEnterKey"
              class="flex justify-center"
            >
              Buscar</PrimaryButton
            >
          </div>
          <div class="">
            <button
              type="submit"
              @click="clearAll"
              class="flex justify-center border-2 border-gray-400 text-gray-600 font-semibold rounded-md py-2 px-4 hover:bg-gray-300"
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-end w-full my-auto col-span-2">
        <!-- <a :href="route('registrados.excel', { fecha_init: fecha_init, fecha_end: fecha_end })"
                    class="flex text-white bg-green-800 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">
                    <DocumentArrowDownIcon class="h-6 w-6 me-2" />Exportar
                </a> -->
      </div>
    </div>

    <!-- filtros -->
    <div class="w-full px-2 gap-2 flex flex-wrap">
      <!-- tipo capacitacion -->
      <div class="w-auto mb-4">
        <select
          id="tipo"
          name="tipo"
          v-model="etnia"
          @change="handleEnterKey"
          class="block w-full px-4 py-1 text-base text-gray-900 border border-gray-600 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500"
        >
          <option selected disabled value="">Seleccionar etnia</option>
          <option
            class="text-black"
            v-for="et in etnias"
            :key="et.id"
            :value="et.code"
          >
            {{ et.nombre }}
          </option>
        </select>
      </div>

      <!-- tipo capacitacion -->
      <div class="w-auto mb-4">
        <select
          id="tipo"
          name="tipo"
          v-model="tipo"
          @change="handleEnterKey"
          class="block w-full px-4 py-1 text-base text-gray-900 border border-gray-600 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500"
        >
          <option selected disabled value="">Seleccionar capacitación</option>
          <option
            class="text-black"
            v-for="niv in tipoServ"
            :key="niv.id"
            :value="niv.code"
          >
            {{ niv.nombre }}
          </option>
        </select>
      </div>
    </div>

    <div class="flex flex-col overflow-x-auto">
      <div class="inline-block rounded-lg shadow">
        <div class="inline-block min-w-full py-2">
          <div class="overflow-x-auto">
            <table class="min-w-full whitespace-no-wrap">
              <thead>
                <tr
                  class="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
                >
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Fecha registro
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Nombre
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Edad
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Identificacion
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Comuna/Corregimiento
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Telefono <br />
                    Email
                  </th>

                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Genero
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Condición
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Etnia
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Dignatario
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Tipo Servicio
                  </th>

                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Editar
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="user in registrados"
                  :key="user.id"
                  class="text-gray-700"
                >
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-xs"
                    :class="{ 'bg-green-200': isToday(user.created_at) }"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ formatDate(new Date(user.created_at)) }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-xs"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.nombres }} {{ user.apellidos }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-xs"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.edad }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-xs"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.identificacion }}
                    </p>
                  </td>

                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-xs"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.sector }} - {{ user.comuna }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-xs"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.telefono }} <br />
                      {{ user.email }}
                    </p>
                  </td>

                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-xs"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.genero }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-xs"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.condicion }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-xs"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.etnia }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-xs"
                  >
                    <p
                      class="text-white flex inline-flex justify-center rounded-md whitespace-no-wrap px-2 py-1"
                      :class="[
                        user.dignatario == 1 ? '!bg-green-400' : 'bg-primary',
                      ]"
                    >
                      {{ user.dignatario == 1 ? "Si" : "No" }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-xs"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{
                        user.evidencia ? user.evidencia.nombre : "No vinculado"
                      }}
                    </p>
                  </td>

                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-xs"
                  >
                    <SecondaryLink
                      :href="route('registros.edit', user.id)"
                    >
                      Editar
                    </SecondaryLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-center border-t bg-white px-5 py-5 xs:flex-row xs:justify-between"
    >
      <Pagination :links="props.registro.links" />
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import { ref } from "vue";
import { watch } from "vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import Pagination from "@/Components/Pagination.vue";
import { Head } from "@inertiajs/vue3";
import { router } from "@inertiajs/vue3";
import SecondaryLink from "@/Components/SecondaryLink.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { DocumentArrowDownIcon } from "@heroicons/vue/24/solid";
import Calendar from "primevue/calendar";
import InputLabel from "@/Components/InputLabel.vue";

const props = defineProps({
  registro: {
    type: Object,
    default: () => ({}),
  },
  filters: {
    type: Object,
    default: () => ({}),
  },
});

console.log(props);

//ITEMS DE CONDICIONES
const condiciones = ref([
  { id: "0", nombre: "Sin condición", code: "NA" },
  { id: "1", nombre: "Persona con discapacidad", code: "discapacitado" },
  { id: "2", nombre: "Desplazados", code: "desplazados" },
  { id: "3", nombre: "Victimas", code: "victimasConfArm" },
  { id: "4", nombre: "Mujer cabeza de hogar", code: "mujerCabHogar" },
  { id: "5", nombre: "Padre cabeza de hogar", code: "hombreCabHogar" },
  { id: "6", nombre: "Habitante de calle", code: "habitanteCalle" },
  { id: "7", nombre: "Migrante", code: "migrante" },
]);

//ITEMS DE ETNIAS
const etnias = ref([
  { id: "0", nombre: "No aplica", code: "NA" },
  { id: "1", nombre: "Mestizo", code: "mestizo" },
  { id: "2", nombre: "Afrodescendiente", code: "afro" },
  { id: "3", nombre: "Indígena", code: "indigena" },
  { id: "4", nombre: "Palanquero", code: "palanquero" },
  { id: "5", nombre: "Raizal", code: "raizal" },
  { id: "6", nombre: "ROM", code: "rom" },
]);

//ITEMS DE nivel_estudios
const nivel_estudios = ref([
  { id: "0", nombre: "Ninguno", code: "NA" },
  { id: "1", nombre: "Primaria", code: "primaria" },
  { id: "2", nombre: "Secundaria", code: "secundaria" },
  { id: "3", nombre: "Tecnico", code: "tecnico" },
  { id: "4", nombre: "Tecnologico", code: "tecnologico" },
  { id: "5", nombre: "Universitario", code: "universitario" },
  { id: "6", nombre: "Postgrado", code: "postgrado" },
]);

//ITEMS DEL TIPO DE Servicios
const tipoServ = ref([
  {
    id: "0",
    nombre: "Uso adecuado de redes sociales",
    code: "Uso redes sociales",
  },
  { id: "1", nombre: "Marketing digital", code: "Marketing digital" },
  { id: "2", nombre: "Ofimática", code: "Ofimatica" },
]);

//step activo
const tipo = ref("");
const etnia = ref("");

const breadcrumbLinks = [{ url: "/registrados", text: "listado de registros" }];

console.log(props.filters);

const registrados = ref(props.registro.data);

console.log(registrados.value);

// pass filters in search
let search = ref(props.filters.search);
let fecha_init = ref(props.filters.fecha_init ?? "");
let fecha_end = ref(props.filters.fecha_end ?? "");
const punto = ref(props.filters.punto ?? "");
const handleEnterKey = () => {
  router.get(
    "/registrados",
    {
      search: search.value,
      fecha_init: fecha_init.value,
      fecha_end: fecha_end.value,
      tipo: tipo.value,
    },
    {
      replace: true,
    },
    {
      onSuccess: () => {
        window.location.reload();
      },
    }
  );
};
//Liampiar filtros
const clearAll = () => {
  search.value = "";
  fecha_init.value = "";
  fecha_end.value = "";
  tipo.value = "";
  router.get(
    "/registrados",
    {
      search: search.value,
      fecha_init: fecha_init.value,
      fecha_end: fecha_end.value,
      tipo: tipo.value,
    },
    {
      replace: true,
    }
  );
};

const formatDate = (fechaHora) => {
  return `${fechaHora.getFullYear()}-${("0" + (fechaHora.getMonth() + 1)).slice(
    -2
  )}-${("0" + fechaHora.getDate()).slice(-2)}`;
};

const isToday = (fecha) => {
  const formattedDate = formatDate(new Date(fecha));
  const today = new Date();
  const formattedToday = formatDate(today);

  // Comparar solo el año, mes y día
  console.log(formattedDate === formattedToday);
  return formattedDate === formattedToday;
};

watch(search, (value) => {
  console.log("Valor de búsqueda actualizado:", value);
});
</script>
