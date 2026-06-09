<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Nueva Fotografía</h2>
        <Link :href="route('fotos.index')" class="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center">
          <ArrowLeftIcon class="h-4 w-4 mr-1" />
          Volver
        </Link>
      </div>
    </template>

    <div class="py-6">
      <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 class="text-lg font-semibold text-gray-800">Datos de la fotografía</h3>
          <p class="text-sm text-gray-500 mt-1">Registra la foto del corredor en el evento</p>
        </div>

        <form @submit.prevent="submit" class="p-6 space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <InputLabel value="Evento" />
              <select
                v-model="form.evento_id"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                required
              >
                <option value="" disabled>Seleccione un evento</option>
                <option v-for="evento in eventos" :key="evento.id" :value="evento.id">
                  {{ evento.nombre }}
                </option>
              </select>
              <InputError class="mt-2" :message="form.errors.evento_id" />
            </div>

            <div>
              <InputLabel value="Corredor" />
              <select
                v-model="form.corredor_id"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                required
              >
                <option value="" disabled>Seleccione un corredor</option>
                <option v-for="corredor in corredores" :key="corredor.id" :value="corredor.id">
                  #{{ corredor.dorsal }} - {{ corredor.nombre_completo || 'Sin nombre' }}
                </option>
              </select>
              <InputError class="mt-2" :message="form.errors.corredor_id" />
            </div>
          </div>

          <div>
            <InputLabel for="nombre_archivo" value="Nombre del archivo" />
            <TextInput
              id="nombre_archivo"
              type="text"
              class="mt-1 block w-full"
              v-model="form.nombre_archivo"
              required
              placeholder="ej: IMG-0001.jpg"
            />
            <InputError class="mt-2" :message="form.errors.nombre_archivo" />
          </div>

          <div>
            <InputLabel for="ruta_storage" value="Ruta de almacenamiento" />
            <TextInput
              id="ruta_storage"
              type="text"
              class="mt-1 block w-full"
              v-model="form.ruta_storage"
              required
              placeholder="ej: eventos/2026/001/IMG-0001.jpg"
            />
            <InputError class="mt-2" :message="form.errors.ruta_storage" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <InputLabel for="url_publica" value="URL pública (opcional)" />
              <TextInput
                id="url_publica"
                type="url"
                class="mt-1 block w-full"
                v-model="form.url_publica"
                placeholder="https://..."
              />
              <InputError class="mt-2" :message="form.errors.url_publica" />
            </div>

            <div>
              <InputLabel for="estado" value="Estado" />
              <select
                id="estado"
                v-model="form.estado"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                required
              >
                <option value="pendiente">Pendiente</option>
                <option value="procesada">Procesada</option>
                <option value="rechazada">Rechazada</option>
              </select>
              <InputError class="mt-2" :message="form.errors.estado" />
            </div>
          </div>

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <SecondaryButton :href="route('fotos.index')" type="button" class="text-sm">
              Cancelar
            </SecondaryButton>
            <PrimaryButton type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="text-sm">
              <CheckIcon class="h-4 w-4 mr-1" />
              Guardar Fotografía
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
import { ArrowLeftIcon, CheckIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  eventos: { type: Array, required: true },
  corredores: { type: Array, required: true },
});

const form = useForm({
  evento_id: '',
  corredor_id: '',
  nombre_archivo: '',
  ruta_storage: '',
  url_publica: '',
  estado: 'pendiente',
});

const submit = () => {
  form.post(route('fotos.store'));
};
</script>
