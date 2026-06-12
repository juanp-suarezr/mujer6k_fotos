<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Nueva Importación</h2>
        <Link :href="route('importaciones.index')" class="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center">
          <ArrowLeftIcon class="h-4 w-4 mr-1" />
          Volver
        </Link>
      </div>
    </template>

    <div class="py-6">
      <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100">
        <div class="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 class="text-lg font-semibold text-gray-800">Crear importación desde Google Drive</h3>
          <p class="text-sm text-gray-500 mt-1">Selecciona el evento y la carpeta de Google Drive para sincronizar fotos</p>
        </div>

        <form @submit.prevent="submit" class="p-6 space-y-5">
          <div>
            <InputLabel for="evento_id" value="Evento" />
            <select
              id="evento_id"
              v-model="form.evento_id"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
              required
            >
              <option value="" disabled>Seleccionar evento</option>
              <option v-for="evento in eventos" :key="evento.id" :value="evento.id">
                {{ evento.nombre }}
              </option>
            </select>
            <InputError class="mt-2" :message="form.errors.evento_id" />
          </div>

          <div>
            <InputLabel for="google_connection_id" value="Conexión Google (opcional)" />
            <select
              id="google_connection_id"
              v-model="form.google_connection_id"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
            >
              <option value="">Conexión por defecto (configurada)</option>
              <option v-for="conn in googleConnections" :key="conn.id" :value="conn.id">
                {{ conn.email_google }} <span v-if="!conn.active">(desconectado)</span>
              </option>
            </select>
            <InputError class="mt-2" :message="form.errors.google_connection_id" />
          </div>

          <div>
            <InputLabel for="carpeta_drive_id" value="ID Carpeta Google Drive" />
            <TextInput
              id="carpeta_drive_id"
              type="text"
              class="mt-1 block w-full"
              v-model="form.carpeta_drive_id"
              placeholder="Ej: 1ABCdEfGhIjKlMnOpQrStUvWxYz1234567"
            />
            <InputError class="mt-2" :message="form.errors.carpeta_drive_id" />
            <p class="text-xs text-gray-500 mt-1">ID de la carpeta en Google Drive que contiene las fotos</p>
          </div>

          <div>
            <InputLabel for="origen" value="Origen" />
            <select
              id="origen"
              v-model="form.origen"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
              required
            >
              <option value="drive">Google Drive</option>
              <option value="zip">Archivo ZIP</option>
              <option value="folder">Carpeta local</option>
            </select>
            <InputError class="mt-2" :message="form.errors.origen" />
          </div>

          <div v-if="form.origen === 'zip'" class="border-2 border-dashed border-gray-300 rounded-lg p-6">
            <div class="text-center">
              <DocumentIcon class="h-12 w-12 mx-auto text-gray-400 mb-3" />
              <p class="text-sm text-gray-600 mb-2">Selecciona un archivo ZIP</p>
              <input
                type="file"
                accept=".zip"
                @change="handleZipUpload"
                class="hidden"
                ref="zipFileInput"
              />
              <SecondaryButton type="button" @click="$refs.zipFileInput.click()">
                <ArrowUpTrayIcon class="h-4 w-4 mr-1" />
                Subir archivo
              </SecondaryButton>
              <p v-if="zipFile" class="text-xs text-gray-500 mt-2">{{ zipFile.name }}</p>
            </div>
          </div>

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <SecondaryButton :href="route('importaciones.index')" type="button" class="text-sm">
              Cancelar
            </SecondaryButton>
            <PrimaryButton type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="text-sm">
              <CheckIcon class="h-4 w-4 mr-1" />
              Crear Importación
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputLabel from '@/Components/InputLabel.vue';
import InputError from '@/Components/InputError.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ArrowLeftIcon, CheckIcon, ArrowUpTrayIcon, DocumentIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const props = defineProps({
  eventos: { type: Array, required: true },
  googleConnections: { type: Array, default: () => [] },
});

const zipFile = ref(null);

const form = useForm({
  evento_id: '',
  google_connection_id: '',
  carpeta_drive_id: '',
  origen: 'drive',
  zip_file_path: '',
});

const handleZipUpload = (e) => {
  zipFile.value = e.target.files[0];
};

const submit = () => {
  form.post(route('importaciones.store'));
};
</script>