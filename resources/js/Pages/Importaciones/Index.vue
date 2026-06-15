<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Importaciones</h2>
        <div class="flex items-center gap-2">
          <Link :href="route('google-drive.index')" class="text-sm text-gray-600 hover:text-gray-900 flex items-center">
            <FolderIcon class="h-4 w-4 mr-1" />
            Google Drive
          </Link>
          <PrimaryLink :href="route('importaciones.create')" class="text-sm">
            Nueva Importación
          </PrimaryLink>
        </div>
      </div>
    </template>

    <div class="py-6">
      <div class="max-w-7xl mx-auto mb-6 bg-blue-50 border border-blue-100 rounded-xl p-4">
        <h3 class="text-sm font-semibold text-blue-800 mb-2">Opciones de sincronización</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-blue-900">
          <div class="flex items-start gap-2">
            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 shrink-0">
              <ArrowUpIcon class="h-3.5 w-3.5" />
            </span>
            <div>
              <p class="font-semibold text-green-700">Incremental</p>
              <p class="text-blue-800">Solo agrega archivos nuevos detectados en la carpeta de Drive. No modifica ni borra lo ya indexado.</p>
            </div>
          </div>
          <div class="flex items-start gap-2">
            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-700 shrink-0">
              <ArrowRightIcon class="h-3.5 w-3.5" />
            </span>
            <div>
              <p class="font-semibold text-purple-700">Rellenar datos</p>
              <p class="text-blue-800">Completa metadatos o campos faltantes de archivos ya existentes sin duplicar registros.</p>
            </div>
          </div>
          <div class="flex items-start gap-2">
            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-700 shrink-0">
              <ArrowUturnLeftIcon class="h-3.5 w-3.5" />
            </span>
            <div>
              <p class="font-semibold text-red-700">Sobrescribir</p>
              <p class="text-blue-800">Elimina todos los archivos de esta importación y vuelve a leer la carpeta completa desde cero.</p>
            </div>
          </div>
        </div>
      </div>

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
                    <div class="flex items-center gap-1">
                      <button
                        v-if="importacion.estado !== 'procesando'"
                        @click="syncImportacion(importacion, 'incremental')"
                        :disabled="syncingId === importacion.id"
                        class="inline-flex items-center justify-center p-2 text-green-600 bg-green-50 rounded-lg hover:bg-green-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Sincronizar incremental (solo nuevos)"
                      >
                        <ArrowPathIcon v-if="syncingId === importacion.id" class="h-4 w-4 animate-spin" />
                        <ArrowUpIcon v-else class="h-4 w-4" />
                      </button>
                      <button
                        v-if="importacion.estado !== 'procesando'"
                        @click="syncImportacion(importacion, 'fill')"
                        :disabled="syncingId === importacion.id"
                        class="inline-flex items-center justify-center p-2 text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Rellenar datos"
                      >
                        <ArrowRightIcon v-if="syncingId !== importacion.id" class="h-4 w-4" />
                        <ArrowPathIcon v-if="syncingId === importacion.id" class="h-4 w-4 animate-spin" />
                      </button>
                      <button
                        v-if="importacion.estado !== 'procesando'"
                        @click="syncImportacion(importacion, 'overwrite')"
                        :disabled="syncingId === importacion.id"
                        class="inline-flex items-center justify-center p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Sobrescribir todo"
                      >
                        <ArrowPathIcon v-if="syncingId === importacion.id" class="h-4 w-4 animate-spin" />
                        <ArrowUturnLeftIcon v-else class="h-4 w-4" />
                      </button>
                    </div>
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
import { Link, router } from '@inertiajs/vue3';
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { ArrowPathIcon, EyeIcon, DocumentIcon, FolderIcon, ArrowUpIcon, ArrowRightIcon, ArrowUturnLeftIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  importaciones: { type: Object, required: true },
});

const syncingId = ref(null);
const pollingIds = ref(new Set());
let pollInterval = null;

const progressPercentage = (importacion) => {
  if (!importacion.total_archivos) return 0;
  return Math.min(100, (importacion.procesados / importacion.total_archivos) * 100);
};

const syncImportacion = (importacion, modo = 'incremental') => {
  syncingId.value = importacion.id;
  const routeName = modo === 'fill' ? 'importaciones.sync.fill' : modo === 'overwrite' ? 'importaciones.sync.overwrite' : 'importaciones.sync';
  router.post(route(routeName, importacion.id), {}, {
    preserveScroll: true,
    onFinish: () => {
      syncingId.value = null;
    },
  });
};

const fetchProgress = () => {
  if (pollingIds.value.has('all')) return;
  pollingIds.value.add('all');

  router.get(route('importaciones.index'), {}, {
    preserveScroll: true,
    preserveState: true,
    only: ['importaciones'],
    onFinish: () => {
      pollingIds.value.delete('all');
    },
    onError: () => {
      pollingIds.value.delete('all');
    },
  });
};

watch(() => props.importaciones.data, (importaciones) => {
  const hasProcessing = importaciones?.some(i => i.estado === 'procesando');

  if (hasProcessing && !pollInterval) {
    pollInterval = setInterval(() => {
      fetchProgress();
    }, 3000);
  } else if (!hasProcessing && pollInterval) {
    clearInterval(pollInterval);
    pollInterval = null;
    pollingIds.value.clear();
  }
}, { deep: true });

onMounted(() => {
  const hasProcessing = props.importaciones.data?.some(i => i.estado === 'procesando');
  if (hasProcessing) {
    pollInterval = setInterval(() => {
      fetchProgress();
    }, 3000);
  }
});

onUnmounted(() => {
  if (pollInterval) {
    clearInterval(pollInterval);
  }
});
</script>