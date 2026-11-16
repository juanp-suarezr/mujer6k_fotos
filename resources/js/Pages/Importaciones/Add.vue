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
              class="mt-1 block w-full font-mono text-sm"
              v-model="form.carpeta_drive_id"
              @input="handleFolderIdInput"
              placeholder="Ej: 1ABCdEfGhIjKlMnOpQrStUvWxYz1234567"
            />
            <InputError class="mt-2" :message="form.errors.carpeta_drive_id" />

            <!-- Guía descriptiva para obtener el ID -->
            <div class="mt-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl text-xs text-gray-700 space-y-2.5">
              <div class="flex items-center gap-2 font-bold text-blue-900 text-sm">
                <InformationCircleIcon class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>¿Cómo obtener el ID de la carpeta en Google Drive?</span>
              </div>
              
              <ol class="list-decimal list-inside space-y-1.5 text-gray-600 pl-1 leading-relaxed">
                <li>Abre tu cuenta de <strong>Google Drive</strong> en el navegador y entra a la carpeta que contiene las fotos.</li>
                <li>Fíjate en la <strong>barra de direcciones (URL)</strong> del navegador. Verás un enlace similar a este:</li>
              </ol>

              <div class="bg-white p-2.5 rounded-lg border border-blue-100 font-mono text-[11px] text-gray-600 break-all shadow-inner select-all">
                https://drive.google.com/drive/folders/<span class="bg-amber-200 text-amber-950 font-bold px-1.5 py-0.5 rounded border border-amber-300">1ABCdEfGhIjKlMnOpQrStUvWxYz1234567</span>
              </div>

              <div class="text-[11px] text-gray-600 space-y-1 pt-0.5">
                <p>
                  👉 <strong>El ID de la carpeta</strong> es la serie de letras y números resaltada en amarillo después de <code>/folders/</code> (antes de cualquier signo <code>?</code> si es un enlace compartido).
                </p>
                <p class="text-blue-700 font-medium">
                  💡 <em>Tip: Si pegas la URL completa de la carpeta aquí, extraeremos el ID automáticamente por ti.</em>
                </p>
              </div>
            </div>
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
            <Link :href="route('importaciones.index')" class="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center">
              <ArrowLeftIcon class="h-4 w-4 mr-1" />
              Cancelar
            </Link>
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
import { ArrowLeftIcon, CheckIcon, ArrowUpTrayIcon, DocumentIcon, InformationCircleIcon } from '@heroicons/vue/24/solid';
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
  estado: 'pendiente',
  zip_file_path: '',
});

const handleFolderIdInput = (e) => {
  const val = e.target.value;
  if (!val) return;
  const matchFolder = val.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  if (matchFolder && matchFolder[1]) {
    form.carpeta_drive_id = matchFolder[1];
    return;
  }
  const matchId = val.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (matchId && matchId[1]) {
    form.carpeta_drive_id = matchId[1];
    return;
  }
};

const handleZipUpload = (e) => {
  zipFile.value = e.target.files[0];
};

const submit = () => {
  form.post(route('importaciones.store'));
};
</script>