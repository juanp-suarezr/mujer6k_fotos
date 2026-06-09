<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Usuarios</h2>
        <PrimaryButton :href="route('users.create')" class="text-sm">
          <UserPlusIcon class="h-5 w-5 mr-2" />
          Nuevo Usuario
        </PrimaryButton>
      </div>
    </template>

    <div class="py-6">
      <!-- Búsqueda -->
      <div class="mb-6 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="flex-1">
            <InputLabel for="search" value="Buscar usuario" class="mb-1" />
            <TextInput
              id="search"
              type="text"
              class="w-full"
              placeholder="Nombre o correo..."
              :value="filters.search"
              @input="onSearch"
            />
          </div>
          <div class="flex items-end">
            <SecondaryButton @click="clearSearch" class="mb-4">
              Limpiar
            </SecondaryButton>
          </div>
        </div>
      </div>

      <!-- Tabla -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-gray-600">
            <thead class="bg-gradient-to-r from-blue-50 to-indigo-50 text-xs uppercase text-gray-700">
              <tr>
                <th class="px-6 py-4 font-semibold">Nombre</th>
                <th class="px-6 py-4 font-semibold">Correo</th>
                <th class="px-6 py-4 font-semibold">Estado</th>
                <th class="px-6 py-4 font-semibold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="user in users.data" :key="user.id" class="hover:bg-gray-50 transition">
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <div class="h-9 w-9 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm mr-3">
                      {{ getInitials(user.name) }}
                    </div>
                    <span class="font-medium text-gray-800">{{ user.name }}</span>
                  </div>
                </td>
                <td class="px-6 py-4">{{ user.email }}</td>
                <td class="px-6 py-4">
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    :class="user.estado === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
                  >
                    <span
                      class="w-1.5 h-1.5 rounded-full mr-1.5"
                      :class="user.estado === 'Activo' ? 'bg-green-500' : 'bg-red-500'"
                    ></span>
                    {{ user.estado || 'Activo' }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center justify-center gap-2">
                    <Link
                      :href="route('users.edit', user.id)"
                      class="inline-flex items-center justify-center p-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                      title="Editar"
                    >
                      <PencilIcon class="h-4 w-4" />
                    </Link>
                    <button
                      @click="confirmDelete(user)"
                      class="inline-flex items-center justify-center p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition"
                      title="Eliminar"
                    >
                      <TrashIcon class="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-if="users.data.length === 0">
                <td colspan="4" class="px-6 py-12 text-center text-gray-400">
                  <UserIcon class="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p class="text-sm">No se encontraron usuarios</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Paginación -->
        <div class="px-6 py-4 border-t border-gray-100">
          <Pagination :links="users.links" />
        </div>
      </div>

      <!-- Modal Eliminar -->
      <Modal :show="showDeleteModal" @close="showDeleteModal = false" max-width="md">
        <div class="p-6">
          <div class="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
            <TrashIcon class="h-6 w-6 text-red-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 text-center mb-2">
            Eliminar Usuario
          </h3>
          <p class="text-sm text-gray-500 text-center mb-6">
            ¿Estás seguro de eliminar a <strong>{{ userToDelete?.name }}</strong>? Esta acción no se puede deshacer.
          </p>
          <div class="flex justify-center gap-3">
            <SecondaryButton @click="showDeleteModal = false" class="text-sm">
              Cancelar
            </SecondaryButton>
            <DangerButton @click="deleteUser" class="text-sm">
              Sí, eliminar
            </DangerButton>
          </div>
        </div>
      </Modal>
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
import Pagination from '@/Components/Pagination.vue';
import Modal from '@/Components/Modal.vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';
import { ref } from 'vue';
import {
  PencilIcon,
  TrashIcon,
  UserIcon,
  UserPlusIcon,
} from '@heroicons/vue/24/solid';

const props = defineProps({
  users: {
    type: Object,
    required: true,
  },
  filters: {
    type: Object,
    default: () => ({ search: '' }),
  },
});

const showDeleteModal = ref(false);
const userToDelete = ref(null);

const form = useForm({
  search: props.filters.search || '',
});

const onSearch = (e) => {
  form.search = e.target.value;
  router.get(route('users.index'), { search: form.search }, { preserveState: true, replace: true });
};

const clearSearch = () => {
  form.search = '';
  router.get(route('users.index'), {}, { preserveState: true, replace: true });
};

const confirmDelete = (user) => {
  userToDelete.value = user;
  showDeleteModal.value = true;
};

const deleteUser = () => {
  useForm().delete(route('users.destroy', userToDelete.value.id), {
    onSuccess: () => {
      showDeleteModal.value = false;
      userToDelete.value = null;
    },
  });
};

const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};
</script>
