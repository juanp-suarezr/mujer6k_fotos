<script setup>
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import MultiSelect from "primevue/multiselect";
import Select from "primevue/select";

import comunas from "@/shared/comunas.json"; // Importa el JSON

import { Link, useForm, usePage } from "@inertiajs/vue3";
import { inject, onMounted, ref, watch } from "vue";
import SecondaryLink from "@/Components/SecondaryLink.vue";

const swal = inject("$swal");
const props = defineProps({
  user: {
    type: Object,
    default: () => ({}),
  },
  evidencias: {
    type: Object,
    default: () => [],
  },
});

console.log("User data:", props.user);

const user = ref(props.user);
const lugaresFiltrados = ref([]);

const form = useForm({
  nombres: props.user.nombres,
  apellidos: props.user.apellidos,
  edad: props.user.edad,
  identificacion: props.user.identificacion,
  direccion: props.user.direccion,
  sector: props.user.sector,
  comuna: props.user.comuna,
  telefono: props.user.telefono,
  email: props.user.email,
  genero: props.user.genero,
  condicion: props.user.condicion,
  etnia: props.user.etnia,
  nivel_estudio: props.user.nivel_estudio,
  tipo_servicio: props.user.tipo_servicio,
  dignatario: props.user.dignatario,
  evidencias: props.user.id_evidencia,
});

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

// Función para obtener el ID de evidencia basado en el nombre
const getEvidenciaId = (id_evidencia) => {
  const evidencia = props.evidencias.find((e) => e.id === id_evidencia);
  return evidencia ? evidencia : 0; // Devuelve 0 si no se encuentra la evidencia
};

const getComuna = (comuna, sector) => {
  console.log("Buscando comuna:", sector, comuna);

  // Busca la comuna en el JSON y devuelve su nombre
  const zonaSeleccionada = comunas.find((zona) => zona.zona === sector);
  console.log("Zona seleccionada:", zonaSeleccionada);
  if (!zonaSeleccionada) {
    console.log("Zona no encontrada");
    return "";
  }
  const comunaEncontrada = zonaSeleccionada.lugares.find(
    (c) => c.label === comuna
  );
  console.log("Comuna encontrada:", comunaEncontrada);

  return comunaEncontrada ? comunaEncontrada : "";
};

// Observa el cambio en la zona seleccionada
watch(
  () => form.sector,
  (nuevaZona) => {
    console.log("Zona seleccionada-watch:", nuevaZona);

    if (nuevaZona) {
      // Filtra los lugares según la zona seleccionada
      const zonaSeleccionada = comunas.find((zona) => zona.zona === nuevaZona);
      lugaresFiltrados.value = zonaSeleccionada ? zonaSeleccionada.lugares : [];
    } else {
      lugaresFiltrados.value = [];
    }
    if (!info_usuario.value) {
      // Si la zona cambia, limpia la comuna
      form.comuna = "";
    }
  }
);

const submit = () => {
  console.log(user.value.id);
  form.patch(route("registrados.update", { id: user.value.id }), {
    onSuccess: () =>
      swal({
        title: "Registro Actualizado",
        text: "El usuario se ha actualizado exitosamente",
        icon: "success",
      }),
  });
};

onMounted(() => {
  form.comuna = getComuna(form.comuna, form.sector);
  console.log("Comuna inicial:", form.comuna);

  lugaresFiltrados.value =
    comunas
      .find((zona) => zona.zona === form.sector)
      ?.lugares.map((lugar) => ({
        label: lugar.label,
        value: lugar.label,
      })) || [];
});
</script>

<template>
  <section>
    <header>
      <div class="grid grid-cols-6">
        <div class="col-span-4">
          <h2 class="text-lg font-medium text-gray-900">
            Información registrado
          </h2>

          <p class="mt-1 text-sm text-gray-600">
            Actualice la información especifica del registro
          </p>
        </div>
        <div class="col-span-2 text-right">
          <SecondaryLink :href="route('registros.index')">
            Regresar
          </SecondaryLink>
        </div>
      </div>
    </header>
    <form @submit.prevent="submit" class="mt-6 space-y-6">
      <div class="sm:grid grid-cols-2 gap-4">
        <!-- nombres -->
        <div class="mb-4">
          <InputLabel
            class="sm:text-sm text-xs"
            for="nombres"
            value="Nombres"
          />
          <TextInput
            id="nombres"
            type="text"
            class="mt-1 block w-full p-0 sm:p-2"
            v-model="form.nombres"
            required
            autofocus
            autocomplete="nombre"
          />
          <InputError class="mt-1" :message="form.errors.nombres" />
        </div>
        <!-- apellidos -->
        <div class="mb-4">
          <InputLabel
            class="sm:text-sm text-xs"
            for="apellidos"
            value="Apellidos"
          />
          <TextInput
            id="apellidos"
            type="text"
            class="mt-1 block w-full p-0 sm:p-2"
            v-model="form.apellidos"
            required
            autocomplete="apellidos"
          />
          <InputError class="mt-1" :message="form.errors.apellidos" />
        </div>

        <!-- edad e identificacion -->
        <div class="col-span-2 mb-4 sm:flex">
          <!-- edad -->
          <div class="w-3/12 sm:pe-6">
            <InputLabel class="sm:text-sm text-xs" for="edad" value="Edad" />
            <TextInput
              id="edad"
              type="number"
              class="mt-1 p-0 sm:p-2 block w-full"
              v-model="form.edad"
              required
              autocomplete="edad"
            />
            <InputError class="mt-1" :message="form.errors.edad" />
          </div>

          <!-- identificacion -->
          <div class="w-full sm:w-9/12 grid grid-cols-4 gap-4 mt-4 sm:mt-0">
            <!-- Identificacion -->
            <div class="col-span-3">
              <InputLabel for="identificacion" value="identificacion" />
              <TextInput
                id="identificacion"
                type="number"
                class="mt-1 block w-full p-0 sm:p-2"
                v-model="form.identificacion"
                required
                autocomplete="identificacion"
              />
              <InputError class="mt-1" :message="form.errors.edad" />
            </div>
          </div>
        </div>

        <!-- zona o sector -->
        <div class="mb-4">
          <InputLabel
            class="sm:text-sm text-xs"
            for="sector"
            value="Zona o sector"
          />
          <select
            name="zona"
            id="zona"
            v-model="form.sector"
            class="block w-full sm:px-4 sm:py-2 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          >
            <option class="text-black text-[9px] sm:text-xs" value="" disabled>
              Seleccione una zona
            </option>
            <option class="text-black text-[9px] sm:text-xs" value="Urbana">
              Urbana
            </option>
            <option class="text-black text-[9px] sm:text-xs" value="Rural">
              Rural
            </option>
          </select>

          <InputError class="mt-1" :message="form.errors.sector" />
        </div>
        <!-- comuna -->
        <div class="mb-4">
          <InputLabel
            class="sm:text-sm text-xs"
            for="comuna"
            value="Comuna/Corregimiento"
          />
          <Select
            :disabled="!form.sector"
            id="comuna"
            v-model="form.comuna"
            :options="lugaresFiltrados"
            filter
            optionLabel="label"
            placeholder="Seleccione una comuna o corregimiento"
            checkmark
            :highlightOnSelect="false"
            class="block w-full sm:px-4 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
          <InputError class="mt-1" :message="form.errors.comuna" />
        </div>
        <!-- telefono -->
        <div class="mb-4">
          <InputLabel
            class="sm:text-sm text-xs"
            for="telefono"
            value="Telefono"
          />
          <TextInput
            id="telefono"
            type="number"
            class="mt-1 block w-full p-0 sm:p-2"
            v-model="form.telefono"
            required
            autofocus
            autocomplete="telefono"
          />
          <InputError class="mt-1" :message="form.errors.telefono" />
        </div>
        <!-- email -->
        <div class="mb-4">
          <InputLabel
            class="sm:text-sm text-xs"
            for="email"
            value="Correo electronico"
          />
          <TextInput
            id="email"
            type="email"
            class="mt-1 block w-full p-0 sm:p-2"
            v-model="form.email"
            required
            autofocus
            autocomplete="username"
          />
          <InputError class="mt-1" :message="form.errors.email" />
        </div>

        <!-- genero -->
        <div class="mb-4">
          <InputLabel class="sm:text-sm text-xs" for="genero" value="Genero" />
          <div class="mt-2 block sm:flex">
            <div class="">
              <input
                type="radio"
                id="masculino"
                value="Masculino"
                v-model="form.genero"
              />
              <label class="ps-2 text-sm sm:text-base" for="masculino"
                >Masculino</label
              >
            </div>
            <div class="sm:ms-6">
              <input
                type="radio"
                id="femenino"
                value="Femenino"
                v-model="form.genero"
              />
              <label class="ps-2 text-sm sm:text-base" for="femenino"
                >Femenino</label
              >
            </div>
            <!-- otros generos -->
            <div v-if="IsNewGenero" class="sm:ms-6">
              <InputLabel
                class="sm:text-sm text-xs"
                for="genero"
                value="¿Cual?"
              />
              <TextInput
                id="genero"
                type="text"
                class="mt-1 block w-full p-0 sm:p-1"
                v-model="form.genero"
                autofocus
                autocomplete="genero"
              />
              <InputError class="mt-1" :message="form.errors.genero" />
            </div>
            <div v-else class="sm:ms-6">
              <input type="radio" id="two" value="true" v-model="IsNewGenero" />
              <label class="ps-2 text-sm sm:text-base" for="two">Otro</label>
            </div>
          </div>
        </div>
        <!-- condicion -->
        <div class="mb-4">
          <InputLabel
            for="condicion"
            value="Condición"
            class="text-neutral-500 sm:text-sm text-xs"
          />
          <select
            id="condicion"
            name="condicion"
            v-model="form.condicion"
            class="block w-full sm:px-4 sm:py-2 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          >
            <option
              class="text-black"
              v-for="con in condiciones"
              :key="con.id"
              :value="con.code"
            >
              {{ con.nombre }}
            </option>
          </select>
          <InputError class="mt-1" :message="form.errors.condicion" />
        </div>
        <!-- etnia -->
        <div class="mb-4">
          <InputLabel
            for="etnia"
            value="Etnia"
            class="text-neutral-500 sm:text-sm text-xs"
          />
          <select
            id="etnia"
            name="etnia"
            v-model="form.etnia"
            class="block w-full sm:px-4 sm:py-2 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          >
            <option
              class="text-black"
              v-for="et in etnias"
              :key="et.id"
              :value="et.code"
            >
              {{ et.nombre }}
            </option>
          </select>
          <InputError class="mt-1" :message="form.errors.etnia" />
        </div>
        <!-- nivel estudio -->
        <div class="mb-4">
          <InputLabel
            for="nivel_estudio"
            value="Nivel de estudio"
            class="text-neutral-500 sm:text-sm text-xs"
          />
          <select
            id="nivel_estudio"
            name="nivel_estudio"
            v-model="form.nivel_estudio"
            class="block w-full sm:px-4 sm:py-2 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          >
            <option
              class="text-black"
              v-for="niv in nivel_estudios"
              :key="niv.id"
              :value="niv.code"
            >
              {{ niv.nombre }}
            </option>
          </select>
          <InputError class="mt-1" :message="form.errors.nivel_estudio" />
        </div>
        <!-- hace parta junta accion comunal -- dignatario -->
        <div class="mb-4 col-span-2">
          <input
            type="checkbox"
            id="juntaAccion"
            name="juntaAccion"
            v-model="form.dignatario"
          />
          <label
            for="juntaAccion"
            class="ps-4 pe-12 sm:text-base text-sm text-gray-500"
            >¿Hace parte de la junta de acción Comunal(JAC) o Junta de acción
            local(JAL)?</label
          >
          <InputError class="mt-1" :message="form.errors.dignatario" />
        </div>

        <!-- Tipo servicios - evidencias -->
        <div class="mb-4">
          <InputLabel
            for="tipo_servicios"
            value="Socialización brindada"
            class="text-neutral-500 sm:text-sm text-xs"
          />
          <select
            id="tipo_servicios"
            name="tipo_servicios"
            v-model="form.evidencias"
            class="block w-full sm:px-4 sm:py-2 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          >
            <option
              class="text-black"
              :class="[isContrast ? '!text-yellow-200 font-bold' : '']"
              v-for="niv in evidencias"
              :key="niv.id"
              :value="niv.id"
            >
              {{ niv.nombre }}
            </option>
          </select>
          <InputError class="mt-1" :message="form.errors.tipo_servicio" />
        </div>
      </div>
      <div class="flex items-center gap-4">
        <PrimaryButton
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
          >Guardar
        </PrimaryButton>
        <Transition
          enter-active-class="transition ease-in-out"
          enter-from-class="opacity-0"
          leave-active-class="transition ease-in-out"
          leave-to-class="opacity-0"
        >
          <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">
            Actualizado.
          </p>
        </Transition>
      </div>
    </form>
  </section>
</template>
