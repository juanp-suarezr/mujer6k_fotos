<template>
  <Head title="Dashboard" />

  <AuthenticatedLayout>
    <template #header> Panel de Eventos Deportivos </template>

    <div class="w-full">
      <div class="items-center px-4 py-8 m-auto mt-5">
        <div class="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
          <div class="w-full p-2 lg:w-1/3 md:w-1/2 flex">
            <div
              class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-2 border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl duration-300 hover:shadow-2xl group"
            >
              <h1
                class="text-3xl sm:text-4xl font-bold text-gray-700 mt-8 group-hover:text-gray-50"
              >
                Gestión de Eventos
              </h1>
              <div class="flex group-hover:text-gray-200">
                <p>Administra eventos deportivos y sus fotografías</p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 lg:w-1/3 md:w-1/2 flex">
            <div
              class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-2 border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl duration-300 hover:shadow-2xl group"
            >
              <h1
                class="text-3xl sm:text-4xl font-bold text-gray-700 mt-8 group-hover:text-gray-50"
              >
                Consulta por Dorsal
              </h1>
              <div class="flex group-hover:text-gray-200">
                <p>Próximamente: búsqueda pública de fotos por dorsal</p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 lg:w-1/3 md:w-1/2 flex">
            <div
              class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-2 border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl duration-300 hover:shadow-2xl group"
            >
              <h1
                class="text-3xl sm:text-4xl font-bold text-gray-700 mt-8 group-hover:text-gray-50"
              >
                Importación
              </h1>
              <div class="flex group-hover:text-gray-200">
                <p>Próximamente: importación desde Google Drive</p>
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
</script>
