<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Editar Usuario</h2>
        <Link :href="route('users.index')" class="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center">
          <ArrowLeftIcon class="h-4 w-4 mr-1" />
          Volver
        </Link>
      </div>
    </template>

    <div class="py-6">
      <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 class="text-lg font-semibold text-gray-800">Datos del usuario: {{ user.name }}</h3>
        </div>
        <div class="p-6">
          <UpdateProfileInformationForm :user="user" :roles="roles" :userRoles="userRoles" />
          <hr class="my-8 border-gray-200" />
          <UpdatePasswordForm :user="user" />
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import UpdateProfileInformationForm from '@/Pages/Users/Partials/UpdateProfileInformationForm.vue';
import UpdatePasswordForm from '@/Pages/Users/Partials/UpdatePasswordForm.vue';
import { Link } from '@inertiajs/vue3';
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  roles: {
    type: Array,
    required: true,
  },
  userRoles: {
    type: Array,
    required: true,
  },
});
</script>
