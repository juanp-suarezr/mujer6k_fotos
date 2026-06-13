<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Contenido Carpeta</h2>
        <div class="flex gap-2">
          <Link :href="route('google-drive.index')" class="text-sm text-gray-600 hover:text-gray-900">
            Google Drive
          </Link>
        </div>
      </div>
    </template>

    <div class="py-6 space-y-6">
      <div v-if="error" class="max-w-5xl mx-auto bg-red-50 border border-red-200 rounded-xl p-4">
        <p class="text-sm text-red-700">
          <ExclamationTriangleIcon class="h-4 w-4 inline mr-1" />
          {{ error }}
        </p>
      </div>

      <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-gray-800">Carpeta: {{ folderId }}</h3>
          <div class="flex items-center gap-2">
            <select
              v-model="selectedEvento"
              class="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
            >
              <option value="" disabled>Seleccionar evento...</option>
              <option v-for="evento in eventos" :key="evento.id" :value="evento.id">
                {{ evento.nombre }}
              </option>
            </select>
            <PrimaryButton @click="crearImportacion" :disabled="!selectedEvento" :class="{ 'opacity-50': !selectedEvento }">
              <ArrowDownTrayIcon class="h-4 w-4 mr-1" />
              Crear Importación
            </PrimaryButton>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="folder in folders"
            :key="folder.id"
            class="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 cursor-pointer transition"
          >
            <Link
              :href="route('drive-browser.show', folder.id)"
              class="flex items-center"
            >
              <FolderIcon class="h-6 w-6 text-blue-600 mr-2" />
              <span class="font-medium text-gray-800">{{ folder.name }}</span>
            </Link>
          </div>
        </div>

        <div v-if="!folders?.length && !files?.length" class="text-center py-12 text-gray-400">
          <FolderIcon class="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p class="text-sm">Carpeta vacía o sin acceso</p>
        </div>
      </div>

      <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Fotografías ({{ files?.length || 0 }})</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for="file in files" :key="file.id" class="border border-gray-200 rounded-lg p-2">
            <div class="aspect-square bg-gray-100 rounded mb-2 flex items-center justify-center">
              <PhotoIcon class="h-8 w-8 text-gray-400" />
            </div>
            <p class="text-xs font-medium text-gray-800 truncate">{{ file.name }}</p>
          </div>
        </div>

        <div v-if="!files?.length" class="text-center py-8 text-gray-400">
          <p class="text-sm">No hay fotografías en esta carpeta</p>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Link, router } from '@inertiajs/vue3';
import { FolderIcon, PhotoIcon, ArrowDownTrayIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const props = defineProps({
  folderId: { type: String, required: true },
  folders: { type: Array, default: () => [] },
  files: { type: Array, default: () => [] },
  eventos: { type: Array, default: () => [] },
  error: { type: String, default: '' },
});

const selectedEvento = ref('');

const crearImportacion = () => {
  if (!selectedEvento.value) return;
  
  router.post(route('drive-browser.import', selectedEvento.value), {
    folder_id: props.folderId
  }, {
    onSuccess: () => {
      selectedEvento.value = '';
    }
  });
};
</script>