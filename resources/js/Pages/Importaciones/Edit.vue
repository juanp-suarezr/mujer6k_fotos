<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Importación #{{ importacion.id }}</h2>
        <Link :href="route('importaciones.index')" class="text-sm text-gray-600 hover:text-gray-900">
          ← Volver
        </Link>
      </div>
    </template>

    <div class="py-6 space-y-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Detalles de Importación</h3>
        <dl class="grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt class="text-gray-500">Evento</dt>
            <dd class="font-medium text-gray-900">{{ importacion.evento?.nombre }}</dd>
          </div>
          <div>
            <dt class="text-gray-500">Carpeta Drive ID</dt>
            <dd class="font-medium text-gray-900 font-mono">{{ importacion.carpeta_drive_id }}</dd>
          </div>
          <div>
            <dt class="text-gray-500">Estado</dt>
            <dd>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                :class="{
                  'bg-yellow-100 text-yellow-700': importacion.estado === 'pendiente',
                  'bg-blue-100 text-blue-700': importacion.estado === 'procesando',
                  'bg-green-100 text-green-700': importacion.estado === 'completada',
                  'bg-red-100 text-red-700': importacion.estado === 'fallida',
                }"
              >
                {{ importacion.estado }}
              </span>
            </dd>
          </div>
          <div>
            <dt class="text-gray-500">Progreso</dt>
            <dd class="font-medium text-gray-900">{{ importacion.procesados }} / {{ importacion.total_archivos }}</dd>
          </div>
        </dl>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-100">
        <div class="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-800">Fotos Indexadas ({{ importacion.fotos?.length || 0 }})</h3>
          <button
            v-if="importacion.estado !== 'completada' && importacion.estado !== 'procesando'"
            @click="syncImportacion"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <ArrowPathIcon class="h-4 w-4 mr-2" />
            Sincronizar
          </button>
        </div>
        <div class="p-6">
          <div v-if="importacion.fotos?.length" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div v-for="foto in importacion.fotos" :key="foto.id" class="border border-gray-200 rounded-lg p-2">
              <div class="aspect-square bg-gray-100 rounded mb-2 flex items-center justify-center">
                <PhotoIcon class="h-8 w-8 text-gray-400" />
              </div>
              <p class="text-xs font-medium text-gray-800 truncate">{{ foto.nombre_archivo }}</p>
              <p class="text-[10px] text-gray-500">Dorsal: {{ foto.corredor?.dorsal || '—' }}</p>
            </div>
          </div>
          <p v-else class="text-center text-gray-400 py-8">No hay fotos indexadas</p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-100">
        <div class="p-4 border-b border-gray-100">
          <h3 class="text-lg font-semibold text-gray-800">Logs de Importación</h3>
        </div>
        <div class="max-h-64 overflow-y-auto">
          <table class="w-full text-left text-sm">
            <tbody class="divide-y divide-gray-100">
              <tr v-for="log in importacion.logs" :key="log.id" class="hover:bg-gray-50">
                <td class="px-6 py-3">
                  <span
                    class="inline-flex items-center px-2 py-0.5 rounded text-xs"
                    :class="{
                      'bg-blue-100 text-blue-700': log.tipo === 'info',
                      'bg-yellow-100 text-yellow-700': log.tipo === 'warning',
                      'bg-red-100 text-red-700': log.tipo === 'error',
                    }"
                  >
                    {{ log.tipo }}
                  </span>
                </td>
                <td class="px-6 py-3 text-gray-700">{{ log.mensaje }}</td>
                <td class="px-6 py-3 text-gray-400 text-xs">{{ formatDate(log.created_at) }}</td>
              </tr>
              <tr v-if="!importacion.logs?.length">
                <td colspan="3" class="px-6 py-8 text-center text-gray-400">Sin logs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="flex justify-end">
        <button
          @click="confirmDelete"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100"
        >
          <TrashIcon class="h-4 w-4 mr-2" />
          Eliminar Importación
        </button>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';
import { ArrowPathIcon, PhotoIcon, TrashIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  importacion: { type: Object, required: true },
});

const formatDate = (date) => {
  return new Date(date).toLocaleString('es-ES');
};

const syncImportacion = () => {
  router.post(route('importaciones.sync', props.importacion.id), {}, {
    preserveScroll: true,
  });
};

const confirmDelete = () => {
  if (confirm('¿Eliminar esta importación?')) {
    useForm().delete(route('importaciones.destroy', props.importacion.id));
  }
};
</script>