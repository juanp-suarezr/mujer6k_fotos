<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Navegador Google Drive</h2>
      </div>
    </template>

    <div class="py-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div v-if="folder" class="mb-4">
          <p class="text-sm text-gray-500">Carpeta raíz:</p>
          <p class="font-medium text-gray-900">{{ folder?.name || folderId }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="subfolder in folders"
            :key="subfolder.id"
            class="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 cursor-pointer transition"
          >
            <Link
              :href="route('drive-browser.show', subfolder.id)"
              class="flex items-center"
            >
              <FolderIcon class="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p class="font-medium text-gray-800">{{ subfolder.name }}</p>
                <p class="text-xs text-gray-500">Dorsal</p>
              </div>
            </Link>
          </div>

          <div
            v-for="file in files"
            :key="file.id"
            class="border border-gray-200 rounded-lg p-4"
          >
            <div class="flex items-center">
              <DocumentIcon class="h-8 w-8 text-gray-400 mr-3" />
              <div>
                <p class="font-medium text-gray-800 truncate">{{ file.name }}</p>
                <p class="text-xs text-gray-500">{{ formatSize(file.size) }}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!folders?.length && !files?.length" class="text-center py-12 text-gray-400">
          <FolderIcon class="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p class="text-sm">Carpeta vacía o sin acceso</p>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Link } from '@inertiajs/vue3';
import { FolderIcon, DocumentIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  folderId: { type: [String, null], required: true },
  folder: { type: [Object, null], default: null },
  folders: { type: Array, default: () => [] },
  files: { type: Array, default: () => [] },
});

const formatSize = (bytes) => {
  if (!bytes) return '—';
  const mb = bytes / 1024 / 1024;
  return `${mb.toFixed(1)} MB`;
};
</script>