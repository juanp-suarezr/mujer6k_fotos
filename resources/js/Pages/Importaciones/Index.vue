<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Importaciones</h2>
        <PrimaryLink :href="route('importaciones.create')" class="text-sm">
          Nueva Importación
        </PrimaryLink>
      </div>
    </template>

    <div class="py-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-gray-600">
            <thead class="bg-gradient-to-r from-blue-50 to-indigo-50 text-xs uppercase text-gray-700">
              <tr>
                <th class="px-6 py-4 font-semibold">Evento</th>
                <th class="px-6 py-4 font-semibold">Carpeta Drive</th>
                <th class="px-6 py-4 font-semibold">Estado</th>
                <th class="px-6 py-4 font-semibold">Progreso</th>
                <th class="px-6 py-4 font-semibold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="importacion in importaciones.data" :key="importacion.id" class="hover:bg-blue-50/40 transition">
                <td class="px-6 py-4">
                  <div class="flex flex-col">
                    <span class="font-medium text-gray-800">{{ importacion.evento?.nombre }}</span>
                    <span class="text-[11px] text-gray-400">ID: {{ importacion.carpeta_drive_id }}</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    {{ importacion.origen }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    :class="{
                      'bg-yellow-100 text-yellow-700': importacion.estado === 'pendiente',
                      'bg-blue-100 text-blue-700': importacion.estado === 'procesando',
                      'bg-green-100 text-green-700': importacion.estado === 'completada',
                      'bg-red-100 text-red-700': importacion.estado === 'fallida',
                    }"
                  >
                    <span
                      class="w-1.5 h-1.5 rounded-full mr-1.5"
                      :class="{
                        'bg-yellow-500': importacion.estado === 'pendiente',
                        'bg-blue-500': importacion.estado === 'procesando',
                        'bg-green-500': importacion.estado === 'completada',
                        'bg-red-500': importacion.estado === 'fallida',
                      }"
                    ></span>
                    {{ importacion.estado }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        class="h-2 rounded-full transition-all"
                        :class="{
                          'bg-blue-500': importacion.estado === 'procesando',
                          'bg-green-500': importacion.estado === 'completada',
                        }"
                        :style="{ width: progressPercentage(importacion) + '%' }"
                      ></div>
                    </div>
                    <span class="text-xs text-gray-500">{{ importacion.procesados }}/{{ importacion.total_archivos }}</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center justify-center gap-2">
                    <Link
                      :href="route('importaciones.edit', importacion.id)"
                      class="inline-flex items-center justify-center p-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                      title="Ver detalles"
                    >
                      <EyeIcon class="h-4 w-4" />
                    </Link>
                    <button
                      v-if="importacion.estado !== 'completada' && importacion.estado !== 'procesando'"
                      @click="syncImportacion(importacion)"
                      class="inline-flex items-center justify-center p-2 text-green-600 bg-green-50 rounded-lg hover:bg-green-100 transition"
                      title="Sincronizar"
                    >
                      <ArrowPathIcon class="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-if="importaciones.data.length === 0">
                <td colspan="5" class="px-6 py-12 text-center text-gray-400">
                  <DocumentIcon class="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p class="text-sm">No hay importaciones registradas</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-6 py-4 border-t border-gray-100">
          <Pagination :links="importaciones.links" />
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryLink from '@/Components/PrimaryLink.vue';
import Pagination from '@/Components/Pagination.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { ArrowPathIcon, EyeIcon, DocumentIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  importaciones: { type: Object, required: true },
});

const progressPercentage = (importacion) => {
  if (!importacion.total_archivos) return 0;
  return Math.min(100, (importacion.procesados / importacion.total_archivos) * 100);
};

const syncImportacion = (importacion) => {
  router.post(route('importaciones.sync', importacion.id), {}, {
    preserveScroll: true,
  });
};
</script>