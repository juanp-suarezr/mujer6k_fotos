<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Editar Evento</h2>
        <Link :href="route('eventos.index')" class="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center">
          <ArrowLeftIcon class="h-4 w-4 mr-1" />
          Volver
        </Link>
      </div>
    </template>

    <div class="py-6">
      <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 class="text-lg font-semibold text-gray-800">Editar información del evento</h3>
          <p class="text-sm text-gray-500 mt-1">Modifica los datos del evento seleccionado</p>
        </div>

        <form @submit.prevent="submit" class="p-6 space-y-5">
          <div>
            <InputLabel for="nombre" value="Nombre del evento" />
            <TextInput
              id="nombre"
              type="text"
              class="mt-1 block w-full"
              v-model="form.nombre"
              required
              autofocus
            />
            <InputError class="mt-2" :message="form.errors.nombre" />
          </div>

          <div>
            <InputLabel for="descripcion" value="Descripción" />
            <textarea
              id="descripcion"
              rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
              v-model="form.descripcion"
            ></textarea>
            <InputError class="mt-2" :message="form.errors.descripcion" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <InputLabel for="fecha_evento" value="Fecha del evento" />
              <input
                id="fecha_evento"
                type="date"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                v-model="form.fecha_evento"
              />
              <InputError class="mt-2" :message="form.errors.fecha_evento" />
            </div>

            <div>
              <InputLabel for="estado" value="Estado" />
              <select
                id="estado"
                v-model="form.estado"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                required
              >
                <option value="activo">Activo</option>
                <option value="finalizado">Finalizado</option>
                <option value="cancelado">Cancelado</option>
              </select>
              <InputError class="mt-2" :message="form.errors.estado" />
            </div>
          </div>

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <SecondaryButton :href="route('eventos.index')" type="button" class="text-sm">
              Cancelar
            </SecondaryButton>
            <PrimaryButton type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="text-sm">
              <CheckIcon class="h-4 w-4 mr-1" />
              Actualizar Evento
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
  evento: { type: Object, required: true },
});

const form = useForm({
  nombre: props.evento.nombre,
  descripcion: props.evento.descripcion || '',
  fecha_evento: props.evento.fecha_evento || '',
  estado: props.evento.estado,
});

const submit = () => {
  form.put(route('eventos.update', props.evento.id));
};
</script>
