<template>
  <AuthenticatedLayout>
    <template #header>
      <h2 class="text-3xl font-bold text-gray-800">Perfil</h2>
    </template>

    <div class="py-6">
      <div class="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 class="text-lg font-semibold text-gray-800">Informaci\u00f3n del perfil</h3>
          <p class="text-sm text-gray-500 mt-1">Actualice la informaci\u00f3n de su cuenta</p>
        </div>
        <form @submit.prevent="submit" class="p-6 space-y-6">
          <div>
            <InputLabel for="name" value="Nombre" />
            <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="name" />
            <InputError class="mt-2" :message="form.errors.name" />
          </div>
          <div>
            <InputLabel for="email" value="Correo electr\u00f3nico" />
            <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autocomplete="username" />
            <InputError class="mt-2" :message="form.errors.email" />
          </div>
          <hr class="border-gray-200" />
          <h3 class="text-lg font-medium text-gray-900">Cambiar contrase\u00f1a (opcional)</h3>
          <div>
            <InputLabel for="password" value="Nueva contrase\u00f1a" />
            <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" autocomplete="new-password" />
            <InputError class="mt-2" :message="form.errors.password" />
          </div>
          <div>
            <InputLabel for="password_confirmation" value="Confirmar contrase\u00f1a" />
            <TextInput id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" autocomplete="new-password" />
            <InputError class="mt-2" :message="form.errors.password_confirmation" />
          </div>
          <div class="flex items-center gap-4">
            <PrimaryButton :disabled="form.processing">Guardar</PrimaryButton>
            <Transition enter-active-class="transition ease-in-out" enter-from-class="opacity-0" leave-active-class="transition ease-in-out" leave-to-class="opacity-0">
              <p v-if="form.recentlySuccessful" class="text-sm text-green-600">Actualizado correctamente.</p>
            </Transition>
          </div>
        </form>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { Transition } from 'vue';

const props = defineProps({
  mustVerifyEmail: Boolean,
  status: String,
  user: Object,
});

const form = useForm({
  name: props.user.name,
  email: props.user.email,
  password: '',
  password_confirmation: '',
});

function submit() {
  form.patch(route('profile.update'), {
    preserveScroll: true,
  });
}
</script>
