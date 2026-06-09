<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Editar Corredor</h2>
        <Link :href="route('corredores.index')" class="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center">
          <ArrowLeftIcon class="h-4 w-4 mr-1" />
          Volver
        </Link>
      </div>
    </template>

    <div class="py-6">
      <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 class="text-lg font-semibold text-gray-800">Editar información del corredor</h3>
          <p class="text-sm text-gray-500 mt-1">Actualiza los datos del participante</p>
        </div>

        <form @submit.prevent="submit" class="p-6 space-y-5">
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

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <InputLabel for="dorsal" value="Dorsal" />
              <TextInput
                id="dorsal"
                type="number"
                class="mt-1 block w-full"
                v-model="form.dorsal"
                required
                min="1"
              />
              <InputError class="mt-2" :message="form.errors.dorsal" />
            </div>

            <div>
              <InputLabel for="documento" value="Documento (opcional)" />
              <TextInput
                id="documento"
                type="text"
                class="mt-1 block w-full"
                v-model="form.documento"
              />
              <InputError class="mt-2" :message="form.errors.documento" />
            </div>
          </div>

          <div>
            <InputLabel for="nombre_completo" value="Nombre completo (opcional)" />
            <TextInput
              id="nombre_completo"
              type="text"
              class="mt-1 block w-full"
              v-model="form.nombre_completo"
            />
            <InputError class="mt-2" :message="form.errors.nombre_completo" />
          </div>

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <SecondaryButton :href="route('corredores.index')" type="button" class="text-sm">
              Cancelar
            </SecondaryButton>
            <PrimaryButton type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="text-sm">
              <CheckIcon class="h-4 w-4 mr-1" />
              Actualizar Corredor
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
  corredor: { type: Object, required: true },
  eventos: { type: Array, required: true },
});

const form = useForm({
  evento_id: props.corredor.evento_id,
  dorsal: props.corredor.dorsal,
  nombre_completo: props.corredor.nombre_completo || '',
  documento: props.corredor.documento || '',
});

const submit = () => {
  form.put(route('corredores.update', props.corredor.id));
};
</script>
