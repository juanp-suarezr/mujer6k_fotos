<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Fotografías</h2>
        <PrimaryButton :href="route('fotos.create')" class="text-sm">
          <PhotoIcon class="h-5 w-5 mr-2" />
          Nueva Foto
        </PrimaryButton>
      </div>
    </template>

    <div class="py-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-gray-600">
            <thead class="bg-gradient-to-r from-blue-50 to-indigo-50 text-xs uppercase text-gray-700">
              <tr>
                <th class="px-6 py-4 font-semibold">Archivo</th>
                <th class="px-6 py-4 font-semibold">Corredor</th>
                <th class="px-6 py-4 font-semibold">Evento</th>
                <th class="px-6 py-4 font-semibold">Estado</th>
                <th class="px-6 py-4 font-semibold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="foto in fotos.data" :key="foto.id" class="hover:bg-blue-50/40 transition">
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center mr-3">
                      <ImageIcon class="h-5 w-5 text-gray-400" />
                    </div>
                    <div class="flex flex-col">
                      <span class="font-medium text-gray-800">{{ foto.nombre_archivo }}</span>
                      <span class="text-[11px] text-gray-400 truncate max-w-[200px]">{{ foto.ruta_storage }}</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  {{ foto.corredor?.nombre_completo || '—' }}
                </td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                    {{ foto.evento?.nombre || '—' }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    :class="{
                      'bg-yellow-100 text-yellow-700': foto.estado === 'pendiente',
                      'bg-green-100 text-green-700': foto.estado === 'procesada',
                      'bg-red-100 text-red-700': foto.estado === 'rechazada',
                    }"
                  >
                    <span
                      class="w-1.5 h-1.5 rounded-full mr-1.5"
                      :class="{
                        'bg-yellow-500': foto.estado === 'pendiente',
                        'bg-green-500': foto.estado === 'procesada',
                        'bg-red-500': foto.estado === 'rechazada',
                      }"
                    ></span>
                    {{ foto.estado }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center justify-center gap-2">
                    <Link
                      :href="route('fotos.edit', foto.id)"
                      class="inline-flex items-center justify-center p-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                      title="Editar"
                    >
                      <PencilIcon class="h-4 w-4" />
                    </Link>
                    <button
                      @click="confirmDelete(foto)"
                      class="inline-flex items-center justify-center p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition"
                      title="Eliminar"
                    >
                      <TrashIcon class="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-if="fotos.data.length === 0">
                <td colspan="5" class="px-6 py-12 text-center text-gray-400">
                  <PhotoIcon class="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p class="text-sm">No hay fotografías registradas</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-6 py-4 border-t border-gray-100">
          <Pagination :links="fotos.links" />
        </div>
      </div>

      <Modal :show="showDeleteModal" @close="showDeleteModal = false" max-width="md">
        <div class="p-6">
          <div class="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
            <TrashIcon class="h-6 w-6 text-red-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 text-center mb-2">Eliminar Fotografía</h3>
          <p class="text-sm text-gray-500 text-center mb-6">
            ¿Estás seguro de eliminar <strong>{{ fotoToDelete?.nombre_archivo }}</strong>? Esta acción no se puede deshacer.
          </p>
          <div class="flex justify-center gap-3">
            <SecondaryButton @click="showDeleteModal = false" class="text-sm">Cancelar</SecondaryButton>
            <DangerButton @click="deleteFoto" class="text-sm">Sí, eliminar</DangerButton>
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
import { PencilIcon, TrashIcon, PhotoIcon, ImageIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  fotos: { type: Object, required: true },
});

const showDeleteModal = ref(false);
const fotoToDelete = ref(null);

const confirmDelete = (foto) => {
  fotoToDelete.value = foto;
  showDeleteModal.value = true;
};

const deleteFoto = () => {
  useForm().delete(route('fotos.destroy', fotoToDelete.value.id), {
    onSuccess: () => {
      showDeleteModal.value = false;
      fotoToDelete.value = null;
    },
  });
};
</script>
