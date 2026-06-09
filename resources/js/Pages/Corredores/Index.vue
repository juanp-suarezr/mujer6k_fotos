<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Corredores</h2>
        <PrimaryButton :href="route('corredores.create')" class="text-sm">
          <UserPlusIcon class="h-5 w-5 mr-2" />
          Nuevo Corredor
        </PrimaryButton>
      </div>
    </template>

    <div class="py-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-gray-600">
            <thead class="bg-gradient-to-r from-blue-50 to-indigo-50 text-xs uppercase text-gray-700">
              <tr>
                <th class="px-6 py-4 font-semibold">Dorsal</th>
                <th class="px-6 py-4 font-semibold">Nombre</th>
                <th class="px-6 py-4 font-semibold">Documento</th>
                <th class="px-6 py-4 font-semibold">Evento</th>
                <th class="px-6 py-4 font-semibold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="corredor in corredores.data" :key="corredor.id" class="hover:bg-blue-50/40 transition">
                <td class="px-6 py-4">
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">
                    #{{ corredor.dorsal }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="font-medium text-gray-800">{{ corredor.nombre_completo || 'Sin nombre' }}</span>
                </td>
                <td class="px-6 py-4">{{ corredor.documento || '—' }}</td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                    {{ corredor.evento?.nombre || '—' }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center justify-center gap-2">
                    <Link
                      :href="route('corredores.edit', corredor.id)"
                      class="inline-flex items-center justify-center p-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                      title="Editar"
                    >
                      <PencilIcon class="h-4 w-4" />
                    </Link>
                    <button
                      @click="confirmDelete(corredor)"
                      class="inline-flex items-center justify-center p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition"
                      title="Eliminar"
                    >
                      <TrashIcon class="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-if="corredores.data.length === 0">
                <td colspan="5" class="px-6 py-12 text-center text-gray-400">
                  <UserGroupIcon class="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p class="text-sm">No hay corredores registrados</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-6 py-4 border-t border-gray-100">
          <Pagination :links="corredores.links" />
        </div>
      </div>

      <Modal :show="showDeleteModal" @close="showDeleteModal = false" max-width="md">
        <div class="p-6">
          <div class="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
            <TrashIcon class="h-6 w-6 text-red-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 text-center mb-2">Eliminar Corredor</h3>
          <p class="text-sm text-gray-500 text-center mb-6">
            ¿Estás seguro de eliminar al corredor <strong>#{{ corredorToDelete?.dorsal }}</strong>? También se eliminarán sus fotos asociadas.
          </p>
          <div class="flex justify-center gap-3">
            <SecondaryButton @click="showDeleteModal = false" class="text-sm">Cancelar</SecondaryButton>
            <DangerButton @click="deleteCorredor" class="text-sm">Sí, eliminar</DangerButton>
          </div>
        </div>
      </Modal>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';
import Pagination from '@/Components/Pagination.vue';
import Modal from '@/Components/Modal.vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';
import { ref } from 'vue';
import { PencilIcon, TrashIcon, UserPlusIcon, UserGroupIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  corredores: { type: Object, required: true },
});

const showDeleteModal = ref(false);
const corredorToDelete = ref(null);

const confirmDelete = (corredor) => {
  corredorToDelete.value = corredor;
  showDeleteModal.value = true;
};

const deleteCorredor = () => {
  useForm().delete(route('corredores.destroy', corredorToDelete.value.id), {
    onSuccess: () => {
      showDeleteModal.value = false;
      corredorToDelete.value = null;
    },
  });
};
</script>
