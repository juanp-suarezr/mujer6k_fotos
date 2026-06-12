<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Nueva Importación</h2>
        <Link :href="route('importaciones.index')" class="text-sm text-gray-600 hover:text-gray-900">
          ← Volver
        </Link>
      </div>
    </template>

    <div class="py-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 max-w-2xl">
        <form @submit.prevent="submit" class="p-6 space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Evento</label>
            <select
              v-model="form.evento_id"
              class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Seleccionar evento</option>
              <option v-for="evento in eventos" :key="evento.id" :value="evento.id">
                {{ evento.nombre }}
              </option>
            </select>
            <p v-if="form.errors.evento_id" class="text-red-500 text-xs mt-1">{{ form.errors.evento_id }}</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Carpeta Drive ID</label>
            <input
              v-model="form.carpeta_drive_id"
              type="text"
              placeholder="Ej: 1ABCdEfGhIjKlMnOpQrStUvWxYz1234567"
              class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <p v-if="form.errors.carpeta_drive_id" class="text-red-500 text-xs mt-1">{{ form.errors.carpeta_drive_id }}</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Origen</label>
            <select
              v-model="form.origen"
              class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="drive">Google Drive</option>
            </select>
          </div>

          <div class="flex justify-end">
            <button
              type="submit"
              :disabled="form.processing"
              class="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              Crear Importación
            </button>
          </div>
        </form>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Link, useForm } from '@inertiajs/vue3';

const props = defineProps({
  eventos: { type: Array, required: true },
});

const form = useForm({
  evento_id: '',
  carpeta_drive_id: '',
  origen: 'drive',
});

const submit = () => {
  form.post(route('importaciones.store'));
};
</script>