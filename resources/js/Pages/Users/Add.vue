<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Nuevo Usuario</h2>
        <Link :href="route('users.index')" class="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center">
          <ArrowLeftIcon class="h-4 w-4 mr-1" />
          Volver
        </Link>
      </div>
    </template>

    <div class="py-6">
      <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 class="text-lg font-semibold text-gray-800">Datos del usuario</h3>
          <p class="text-sm text-gray-500 mt-1">Completa la información para crear el nuevo usuario</p>
        </div>

        <form @submit.prevent="submit" class="p-6 space-y-5">
          <div>
            <InputLabel for="name" value="Nombre completo" />
            <TextInput
              id="name"
              type="text"
              class="mt-1 block w-full"
              v-model="form.name"
              required
              autofocus
              autocomplete="name"
            />
            <InputError class="mt-2" :message="form.errors.name" />
          </div>

          <div>
            <InputLabel for="email" value="Correo electrónico" />
            <TextInput
              id="email"
              type="email"
              class="mt-1 block w-full"
              v-model="form.email"
              required
              autocomplete="username"
            />
            <InputError class="mt-2" :message="form.errors.email" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <InputLabel for="password" value="Contraseña" />
              <TextInput
                id="password"
                type="password"
                class="mt-1 block w-full"
                v-model="form.password"
                required
                autocomplete="new-password"
              />
              <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div>
              <InputLabel for="password_confirmation" value="Confirmar contraseña" />
              <TextInput
                id="password_confirmation"
                type="password"
                class="mt-1 block w-full"
                v-model="form.password_confirmation"
                required
                autocomplete="new-password"
              />
              <InputError class="mt-2" :message="form.errors.password_confirmation" />
            </div>
          </div>

          <div>
            <InputLabel for="role" value="Rol" />
            <select
              id="role"
              v-model="form.role"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
              required
            >
              <option value="" disabled>Seleccione un rol</option>
              <option v-for="role in roles" :key="role.name" :value="role.name">
                {{ role.name }}
              </option>
            </select>
            <InputError class="mt-2" :message="form.errors.role" />
          </div>

          <!-- Botones -->
          <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <SecondaryButton :href="route('users.index')" type="button" class="text-sm">
              Cancelar
            </SecondaryButton>
            <PrimaryButton type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="text-sm">
              <CheckIcon class="h-4 w-4 mr-1" />
              Crear Usuario
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
import DangerButton from '@/Components/DangerButton.vue';
import TextInput from '@/Components/TextInput.vue';
import Modal from '@/Components/Modal.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  roles: {
    type: Array,
    required: true,
  },
});

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  role: '',
});

const submit = () => {
  form.post(route('users.store'), {
    onFinish: () => {
      form.reset('password', 'password_confirmation');
    },
  });
};
</script>
