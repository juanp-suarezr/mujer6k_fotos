<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Importación #{{ importacion.id }}</h2>
        <Link :href="route('importaciones.index')" class="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center">
          <ArrowLeftIcon class="h-4 w-4 mr-1" />
          Volver
        </Link>
      </div>
    </template>

    <div class="py-6 space-y-6">
      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 class="text-lg font-semibold text-gray-800">Editar Importación</h3>
          <p class="text-sm text-gray-500 mt-1">Configura los datos de la importación</p>
        </div>

        <form @submit.prevent="submit" class="p-6 space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
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

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <Link :href="route('importaciones.index')" class="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center">
              <ArrowLeftIcon class="h-4 w-4 mr-1" />
              Cancelar
            </Link>
            <PrimaryButton type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="text-sm">
              <CheckIcon class="h-4 w-4 mr-1" />
              Guardar Cambios
            </PrimaryButton>
          </div>
        </form>
      </div>

      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100">
        <div class="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-800">Estado de Importación</h3>
          <span
            class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
            :class="{
              'bg-yellow-100 text-yellow-700': importacion.estado === 'pendiente',
              'bg-blue-100 text-blue-700': importacion.estado === 'procesando',
              'bg-green-100 text-green-700': importacion.estado === 'completada',
              'bg-red-100 text-red-700': importacion.estado === 'fallida',
            }"
          >
            <span
              class="w-2 h-2 rounded-full mr-2"
              :class="{
                'bg-yellow-500': importacion.estado === 'pendiente',
                'bg-blue-500 animate-pulse': importacion.estado === 'procesando',
                'bg-green-500': importacion.estado === 'completada',
                'bg-red-500': importacion.estado === 'fallida',
              }"
            ></span>
            {{ importacion.estado }}
          </span>
        </div>

        <div class="p-6">
          <div class="grid grid-cols-3 gap-6 mb-6">
            <div class="text-center">
              <p class="text-3xl font-bold text-gray-900">{{ importacion.procesados }}</p>
              <p class="text-sm text-gray-500">Archivos procesados</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold text-gray-900">{{ importacion.errores || 0 }}</p>
              <p class="text-sm text-gray-500">Errores</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold text-gray-900">{{ fotos_count }}</p>
              <p class="text-sm text-gray-500">Total fotos</p>
            </div>
          </div>

          <div v-if="importacion.estado === 'procesando'" class="mb-4">
            <div class="flex justify-between text-sm mb-1">
              <span class="text-gray-500">Progreso carpetas</span>
              <span class="text-gray-700">{{ importacion.procesados_folders || 0 }}/{{ importacion.total_folders || 0 }}</span>
            </div>
            <div class="bg-gray-200 rounded-full h-3">
              <div
                class="h-3 rounded-full bg-blue-500 transition-all"
                :style="{ width: folderProgress + '%' }"
              ></div>
            </div>
          </div>

          <div v-if="importacion.estado !== 'completada' && importacion.estado !== 'procesando'" class="flex justify-center">
            <button
              @click="syncImportacion"
              :disabled="syncing"
              class="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowPathIcon v-if="syncing" class="h-4 w-4 mr-2 animate-spin" />
              <ArrowPathIcon v-else class="h-4 w-4 mr-2" />
              {{ syncing ? 'Sincronizando...' : 'Iniciar Sincronización' }}
            </button>
          </div>

          <p v-if="importacion.last_error" class="text-xs text-red-600 bg-red-50 p-3 rounded-lg mt-4">
            <strong>Último error:</strong> {{ importacion.last_error }}
          </p>
        </div>
      </div>

      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100">
        <div class="px-6 py-4 border-b border-gray-100">
          <h3 class="text-lg font-semibold text-gray-800">Fotos Indexadas ({{ fotos_count }})</h3>
        </div>
        <div class="p-6">
          <div v-if="fotos?.length" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div v-for="foto in fotos" :key="foto.id" class="border border-gray-200 rounded-lg p-2">
              <div class="aspect-square bg-gray-100 rounded mb-2 flex items-center justify-center">
                <PhotoIcon class="h-8 w-8 text-gray-400" />
              </div>
              <p class="text-xs font-medium text-gray-800 truncate">{{ foto.nombre_archivo }}</p>
              <p class="text-[10px] text-gray-500">Dorsal: {{ foto.dorsal || '—' }}</p>
            </div>
          </div>
          <p v-else class="text-center text-gray-400 py-8">No hay fotos indexadas</p>
        </div>
      </div>

      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100">
        <div class="px-6 py-4 border-b border-gray-100">
          <h3 class="text-lg font-semibold text-gray-800">Logs de Importación</h3>
        </div>
        <div class="max-h-80 overflow-y-auto">
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
              <tr v-if="importacion.logs?.length === 0 || !importacion.logs">
                <td colspan="3" class="px-6 py-8 text-center text-gray-400">Sin logs registrados</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="max-w-4xl mx-auto flex justify-end">
        <button
          @click="confirmDelete"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100"
        >
          <TrashIcon class="h-4 w-4 mr-1" />
          Eliminar Importación
        </button>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputLabel from '@/Components/InputLabel.vue';
import InputError from '@/Components/InputError.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, router } from '@inertiajs/vue3';
import { ArrowPathIcon, PhotoIcon, TrashIcon, ArrowLeftIcon, CheckIcon } from '@heroicons/vue/24/solid';
import { ref, watch, onUnmounted, computed } from 'vue';

const props = defineProps({
  importacion: { type: Object, required: true },
  fotos: { type: Array, required: true },
  fotos_count: { type: Number, required: true },
  progress: { type: Object, required: true },
  eventos: { type: Array, required: true },
  googleConnections: { type: Array, default: () => [] },
});

console.log(props);

const form = useForm({
  evento_id: props.importacion.evento_id,
  google_connection_id: props.importacion.google_connection_id || '',
  origen: props.importacion.origen || 'drive',
  carpeta_drive_id: props.importacion.carpeta_drive_id || '',
});

const submit = () => {
  form.put(route('importaciones.update', props.importacion.id));
};

const pollStatus = ref(false);
const syncing = ref(false);
let pollInterval = null;

const fetchProgress = () => {
  pollStatus.value = true;
  router.get(
    route('importaciones.progress', props.importacion.id),
    {},
    {
      preserveScroll: true,
      preserveState: true,
      only: ['importacion'],
      onSuccess: () => {
        pollStatus.value = false;
      },
      onError: () => {
        pollStatus.value = false;
      },
    }
  );
};

watch(() => props.importacion.estado, (estado) => {
  if (estado === 'procesando' && !pollInterval) {
    pollInterval = setInterval(fetchProgress, 3000);
  } else if (pollInterval && (estado === 'completada' || estado === 'fallida')) {
    clearInterval(pollInterval);
    pollInterval = null;
  }
});

onUnmounted(() => {
  if (pollInterval) {
    clearInterval(pollInterval);
  }
});

const folderProgress = computed(() => {
  const total = props.importacion.total_folders || 0;
  const processed = props.importacion.procesados_folders || 0;
  return total > 0 ? Math.min(100, (processed / total) * 100) : 0;
});

const formatDate = (date) => {
  return new Date(date).toLocaleString('es-ES');
};

const syncImportacion = () => {
  syncing.value = true;
  router.post(route('importaciones.sync', props.importacion.id), {}, {
    preserveScroll: true,
    onSuccess: () => {
      syncing.value = false;
    },
    onError: () => {
      syncing.value = false;
    },
  });
};

const confirmDelete = () => {
  if (confirm('¿Estás seguro de eliminar esta importación? Esta acción no se puede revertir.')) {
    useForm({}).delete(route('importaciones.destroy', props.importacion.id));
  }
};
</script>