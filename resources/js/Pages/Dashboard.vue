<template>
  <Head title="Dashboard" />

  <AuthenticatedLayout>
    <template #header> Dashboard </template>

    <div
      class="w-full"
      v-if="
        $page.props.auth.user.roles[0].name == 'Administrador' ||
        $page.props.auth.user.roles[0].name == 'Supervisor'
      "
    >
      <div class="items-center px-4 py-8 m-auto mt-5">
        <div class="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
          <!-- info contacto -->
          <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
            <div
              class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group"
            >
              <div class="flex flex-row justify-between items-center">
                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                  <UserGroupIcon class="h-6 w-6" />
                </div>
                <div
                  class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base ps-4"
                >
                  Info Contacto
                </div>
              </div>
              <h1
                class="text-lg sm:text-xl font-bold text-gray-700 mt-12 group-hover:text-gray-50"
              >
                {{ $page.props.auth.user.name }}
              </h1>
              <div class="group-hover:text-gray-200">
                <p>
                  {{ $page.props.auth.user.email }}
                </p>
              </div>
            </div>
          </div>
          <!-- Registros -->
          <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
            <div
              class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group"
            >
              <div class="flex flex-row justify-between items-center">
                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                  <FingerPrintIcon class="h-6 w-6" />
                </div>
                <div
                  class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base"
                >
                  Registros capacitaciones
                </div>
              </div>
              <h1
                class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50"
              >
                {{ registros }}
              </h1>
              <div class="flex group-hover:text-gray-200">
                <p>Registros listados</p>
              </div>
            </div>
          </div>
          <!-- info puntos vive -->
          <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
            <div
              class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group"
            >
              <div class="flex flex-row justify-between items-center">
                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                  <SparklesIcon class="h-6 w-6" />
                </div>
                <div
                  class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base"
                >
                  registrados en puntos vive
                </div>
              </div>
              <h1
                class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50"
              >
                num
              </h1>
              <div class="flex group-hover:text-gray-200">
                <p>registrados listados</p>
              </div>
            </div>
          </div>
          <!-- trafico -->
          <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
            <div
              class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group"
            >
              <div class="flex flex-row justify-between items-center">
                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                  <MagnifyingGlassIcon class="h-6 w-6" />
                </div>
                <div
                  class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base"
                >
                  Trafico
                </div>
              </div>
              <p
                class="text-sm sm:text-base xl:text-lg font-bold text-gray-700 mt-8 group-hover:text-gray-50"
              >
                <b>Inicio:</b> {{ getTotalViews("inicio") }}
                <br />
                <b>Registros:</b> {{ getTotalViews("register") }}
              </p>
              <div class="flex group-hover:text-gray-200">
                <p>Visitas a la pagina</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap md:grid grid-cols-8 pb-3 md:mx-24 lg:mx-0 mt-4">
          <!-- Pastel de grafico por genero -->
          <div class="w-full p-2 flex md:col-span-3">
            <div
              class="flex w-full flex-col px-2 md:px-4 sm:py-6 py-1 overflow-hidden bg-white border-[#e1e5ea] hover:text-white rounded-xl border-2 duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              <div class="flex flex-row justify-between items-center">
                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                  <ShareIcon class="h-6 w-6" />
                </div>
                <div class="inline-flex text-sm text-gray-600 sm:text-base">
                  Grafico por edad
                </div>
              </div>
              <div class="w-full flex items-center justify-center mt-4">
                <PieChart
                  :labels="['Masculino', 'Femenino', 'Otros']"
                  :values="registroXgeneroArray"
                  title="Registros por Genero"
                />
              </div>
            </div>
          </div>
          <!-- Grafico por edad -->
          <div class="w-full p-2 md:col-span-5 flex">
            <div
              class="flex w-full flex-col px-2 md:px-4 sm:py-6 py-1 overflow-hidden bg-white border-[#e1e5ea] hover:text-white rounded-xl border-2 duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              <div class="flex flex-row justify-between items-center">
                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                  <ChartBarIcon class="h-6 w-6" />
                </div>
                <div class="inline-flex text-sm text-gray-600 sm:text-base">
                  Grafico por edad
                </div>
              </div>
              <div class="w-full flex items-center justify-center mt-4">
                <BarChart
                  :labels="barLabels"
                  :values="registroXedadArray"
                  title="Registros según Edad"
                  :horizontal="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
// Importar componentes de gráficos
import BarChart from "@/Components/BarChart.vue";
import PieChart from "@/Components/PieChart.vue";

import { ref, watch, inject, computed } from "vue";
import {
  ShareIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  FingerPrintIcon,
  SparklesIcon,
  ChartBarIcon,
} from "@heroicons/vue/24/solid";


const props = defineProps({
  registros: {
    type: Number,
    default: () => 0,
  },
  registroXgenero: {
    type: Object,
    default: () => 0,
  },
  registroXedad: {
    type: Object,
    default: () => 0,
  },
  views: {
    type: Object,
    default: () => ({}),
  },
});

console.log("Props en Dashboard:", props);

//datos de grafico edad
const barLabels = ['0-5', '6-11', '12-18', '19-26', '27-35', '36-55', '56-59', '60+'];

const getTotalViews = computed(() => (pageType) => {
  let pagesToCount;

  // Determina las páginas a contar según el tipo de página solicitado
  if (pageType === "inicio") {
    pagesToCount = ["/", "Welcome", "Home"];
  } else if (pageType === "register") {
    pagesToCount = ["register"];
  } else {
    return 0;
  }

  // Filtra las vistas según el tipo de página y suma los views
  return props.views
    .filter((view) => pagesToCount.includes(view.page))
    .reduce((total, view) => total + view.views, 0);
});

const registroXgeneroArray = computed(() => [
  props.registroXgenero.Masculino ?? 0,
  props.registroXgenero.Femenino ?? 0,
  props.registroXgenero.Otros ?? 0,
]);

const registroXedadArray = computed(() => [
  props.registroXedad["0-5"] ?? 0,
  props.registroXedad["6-11"] ?? 0,
  props.registroXedad["12-18"] ?? 0,
  props.registroXedad["19-26"] ?? 0,
  props.registroXedad["27-35"] ?? 0,
  props.registroXedad["36-55"] ?? 0,
  props.registroXedad["56-59"] ?? 0,
  props.registroXedad["60+"] ?? 0,
]);

console.log("Registro por genero:", registroXgeneroArray.value);
</script>
