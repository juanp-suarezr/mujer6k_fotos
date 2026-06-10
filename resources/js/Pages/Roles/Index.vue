<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Roles</h2>
        <PrimaryButton :href="route('roles.create')" class="text-sm">
          <PlusIcon class="h-5 w-5 mr-2" />
          Nuevo Rol
        </PrimaryButton>
      </div>
    </template>

    <div class="py-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-gray-600">
            <thead class="bg-gradient-to-r from-blue-50 to-indigo-50 text-xs uppercase text-gray-700">
              <tr>
                <th class="px-6 py-4 font-semibold">Rol</th>
                <th class="px-6 py-4 font-semibold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="role in roles" :key="role.id" class="hover:bg-gray-50 transition">
                <td class="px-6 py-4">
                  <span class="font-medium text-gray-800">{{ role.name }}</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center justify-center gap-2">
                    <Link :href="route('roles.edit', role.id)" class="inline-flex items-center justify-center p-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                      <PencilIcon class="h-4 w-4" />
                    </Link>
                    <button @click="confirmDelete(role)" class="inline-flex items-center justify-center p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition">
                      <TrashIcon class="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-if="roles.length === 0">
                <td colspan="2" class="px-6 py-12 text-center text-gray-400">
                  <KeyIcon class="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p class="text-sm">No hay roles registrados</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <Modal :show="showDeleteModal" @close="showDeleteModal = false" max-width="md">
      <div class="p-6">
        <div class="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
          <TrashIcon class="h-6 w-6 text-red-600" />
        </div>
        <h3 class="text-lg font-semibold text-gray-900 text-center mb-2">Eliminar Rol</h3>
        <p class="text-sm text-gray-500 text-center mb-6">¿Est\u00e1s seguro de eliminar el rol <strong>{{ roleToDelete?.name }}</strong>?</p>
        <div class="flex justify-center gap-3">
          <SecondaryButton @click="showDeleteModal = false">Cancelar</SecondaryButton>
          <DangerButton @click="deleteRole">Sí, eliminar</DangerButton>
        </div>
      </div>
    </Modal>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';
import Modal from '@/Components/Modal.vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';
import { ref } from 'vue';
import { PencilIcon, TrashIcon, KeyIcon, PlusIcon } from '@heroicons/vue/24/solid';

defineProps({
  roles: {
    type: Array,
    required: true,
  },
});

const showDeleteModal = ref(false);
const roleToDelete = ref(null);

const confirmDelete = (role) => {
  roleToDelete.value = role;
  showDeleteModal.value = true;
};

const deleteRole = () => {
  useForm().delete(route('roles.destroy', roleToDelete.value.id), {
    onSuccess: () => {
      showDeleteModal.value = false;
      roleToDelete.value = null;
    },
  });
};
</script>
