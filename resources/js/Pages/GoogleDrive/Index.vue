<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Conexiones Google Drive</h2>
        <Link :href="route('importaciones.index')" class="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center">
          <ArrowLeftIcon class="h-4 w-4 mr-1" />
          Importaciones
        </Link>
      </div>
    </template>

    <div class="py-6">
      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100">
        <div class="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 class="text-lg font-semibold text-gray-800">Estado de Conexión</h3>
          <p class="text-sm text-gray-500 mt-1">Gestiona la conexión con Google Drive para importaciones masivas</p>
        </div>

        <div class="p-6">
          <div v-if="connection" class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p class="text-sm text-gray-500">Cuenta conectada</p>
                <p class="text-lg font-medium text-gray-900">{{ connection.email_google }}</p>
              </div>
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                :class="{
                  'bg-green-100 text-green-700': connection.status === 'conectado',
                  'bg-yellow-100 text-yellow-700': connection.status === 'invalido',
                  'bg-red-100 text-red-700': connection.status === 'desconectado',
                }"
              >
                {{ connection.status }}
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p class="text-gray-500">Última validación</p>
                <p class="font-medium text-gray-900">{{ formatDate(connection.last_validated_at) || '—' }}</p>
              </div>
              <div>
                <p class="text-gray-500">Expira en</p>
                <p class="font-medium text-gray-900">{{ formatExpiry(connection.expires_at) }}</p>
              </div>
            </div>

            <div v-if="connection.status !== 'conectado'" class="p-4 bg-yellow-50 rounded-lg">
              <p class="text-sm text-yellow-700">
                <ExclamationTriangleIcon class="h-4 w-4 inline mr-1" />
                La conexión está {{ connection.status }}. Conéctate nuevamente para poder realizar importaciones.
              </p>
            </div>

            <div v-if="connection.last_error" class="p-4 bg-red-50 rounded-lg">
              <p class="text-sm text-red-700">
                <XCircleIcon class="h-4 w-4 inline mr-1" />
                Error: {{ connection.last_error }}
              </p>
            </div>

            <div class="flex gap-3 pt-4 border-t border-gray-100">
              <PrimaryButton v-if="connection.status !== 'conectado'" @click="connect" type="button">
                <ArrowUpOnSquareIcon class="h-4 w-4 mr-1" />
                Conectar Google Drive
              </PrimaryButton>
              <SecondaryButton v-else @click="validateConnection" type="button">
                Validar Conexión
              </SecondaryButton>
              <DangerButton v-if="connection" @click="disconnect" type="button">
                <XMarkIcon class="h-4 w-4 mr-1" />
                Desconectar
              </DangerButton>
            </div>
          </div>

          <div v-else class="text-center py-12">
            <FolderIcon class="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <p class="text-gray-500 mb-4">No hay conexiones configuradas</p>
            <Link :href="route('google-drive.connect')" class="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center">
              <ArrowUpOnSquareIcon class="h-4 w-4 mr-1" />
              Conectar Google Drive
            </Link>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto mt-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <div class="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 class="text-lg font-semibold text-gray-800">Importación Masiva desde Drive</h3>
          <p class="text-sm text-gray-500 mt-1">Usa el navegador para seleccionar una carpeta y crear importación</p>
        </div>

        <div class="p-6">
          <div class="flex items-start gap-4">
            <div class="flex-1">
              <InputLabel for="evento_id" value="Seleccionar Evento" />
              <select
                id="evento_id"
                v-model="bulkForm.evento_id"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                required
              >
                <option value="" disabled>Elige un evento...</option>
                <option v-for="evento in eventos" :key="evento.id" :value="evento.id">
                  {{ evento.nombre }}
                </option>
              </select>
              <InputError class="mt-2" :message="bulkForm.errors.evento_id" />
            </div>

            <PrimaryLink :href="route('drive-browser.index')" class="text-sm">
              <FolderOpenIcon class="h-4 w-4 mr-1" />
              Navegador Drive
            </PrimaryLink>
          </div>

          <div class="mt-4 p-4 bg-gray-50 rounded-lg">
            <p class="text-xs text-gray-600">
              <InformationCircleIcon class="h-4 w-4 inline mr-1" />
              Navega en Google Drive, selecciona una carpeta con fotos y usa "Crear Importación" para iniciar la sincronización masiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';
import PrimaryLink from '@/Components/PrimaryLink.vue';
import InputLabel from '@/Components/InputLabel.vue';
import InputError from '@/Components/InputError.vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';
import { 
  ArrowLeftIcon, 
  ArrowUpOnSquareIcon, 
  FolderIcon, 
  ExclamationTriangleIcon,
  XCircleIcon, 
  XMarkIcon,
  FolderOpenIcon,
  InformationCircleIcon 
} from '@heroicons/vue/24/solid';

const props = defineProps({
  connection: { type: Object, default: null },
  eventos: { type: Array, required: true },
});

const formatDate = (date) => {
  if (!date) return null;
  return new Date(date).toLocaleString('es-ES');
};

const formatExpiry = (date) => {
  if (!date) return '—';
  const d = new Date(date);
  const now = new Date();
  if (d < now) return 'Expirado';
  const diff = Math.ceil((d - now) / (1000 * 60 * 60));
  return `${diff} horas`;
};

const connect = () => {
  router.get(route('google-drive.connect'));
};

const validateConnection = () => {
  router.post(route('google-drive.validate'));
};

const disconnect = () => {
  if (confirm('¿Desconectar la cuenta de Google Drive?')) {
    router.post(route('google-drive.disconnect'));
  }
};

const bulkForm = useForm({
  evento_id: '',
  folder_id: '',
});
</script>