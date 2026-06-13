<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Eventos Deportivos</h2>
        <Link :href="route('eventos.create')" class="text-sm">
          <PrimaryButton>
            <PlusIcon class="h-5 w-5 mr-2" />
            Nuevo Evento
          </PrimaryButton>
        </Link>
      </div>
    </template>

    <div class="py-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-gray-600">
            <thead class="bg-gradient-to-r from-blue-50 to-indigo-50 text-xs uppercase text-gray-700">
              <tr>
                <th class="px-6 py-4 font-semibold">Nombre</th>
                <th class="px-6 py-4 font-semibold">Fecha</th>
                <th class="px-6 py-4 font-semibold">Estado</th>
                <th class="px-6 py-4 font-semibold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="evento in eventos.data" :key="evento.id" class="hover:bg-blue-50/40 transition">
                <td class="px-6 py-4">
                  <div class="flex flex-col">
                    <span class="font-semibold text-gray-800">{{ evento.nombre }}</span>
                    <span class="text-xs text-gray-400 mt-0.5 line-clamp-1">{{ evento.descripcion }}</span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ evento.fecha_evento ? formatDate(evento.fecha_evento) : '—' }}
                </td>
                <td class="px-6 py-4">
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    :class="{
                      'bg-green-100 text-green-700': evento.estado === 'activo',
                      'bg-yellow-100 text-yellow-700': evento.estado === 'finalizado',
                      'bg-red-100 text-red-700': evento.estado === 'cancelado',
                    }"
                  >
                    <span
                      class="w-1.5 h-1.5 rounded-full mr-1.5"
                      :class="{
                        'bg-green-500': evento.estado === 'activo',
                        'bg-yellow-500': evento.estado === 'finalizado',
                        'bg-red-500': evento.estado === 'cancelado',
                      }"
                    ></span>
                    {{ evento.estado }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center justify-center gap-2">
                    <Link
                      :href="route('eventos.edit', evento.id)"
                      class="inline-flex items-center justify-center p-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                      title="Editar"
                    >
                      <PencilIcon class="h-4 w-4" />
                    </Link>
                    <button
                      @click="confirmDelete(evento)"
                      class="inline-flex items-center justify-center p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition"
                      title="Eliminar"
                    >
                      <TrashIcon class="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-if="eventos.data.length === 0">
                <td colspan="4" class="px-6 py-12 text-center text-gray-400">
                  <CalendarDaysIcon class="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p class="text-sm">No hay eventos registrados</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-6 py-4 border-t border-gray-100">
          <Pagination :links="eventos.links" />
        </div>
      </div>

      <Modal :show="showDeleteModal" @close="showDeleteModal = false" max-width="md">
        <div class="p-6">
          <div class="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
            <TrashIcon class="h-6 w-6 text-red-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 text-center mb-2">Eliminar Evento</h3>
          <p class="text-sm text-gray-500 text-center mb-6">
            ¿Estás seguro de eliminar <strong>{{ eventToDelete?.nombre }}</strong>? También se eliminarán los corredores y fotos asociados.
          </p>
          <div class="flex justify-center gap-3">
            <SecondaryButton @click="showDeleteModal = false" class="text-sm">Cancelar</SecondaryButton>
            <DangerButton @click="deleteEvent" class="text-sm">Sí, eliminar</DangerButton>
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
import { PencilIcon, TrashIcon, PlusIcon, CalendarDaysIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  eventos: { type: Object, required: true },
});

const showDeleteModal = ref(false);
const eventToDelete = ref(null);

const confirmDelete = (evento) => {
  eventToDelete.value = evento;
  showDeleteModal.value = true;
};

const deleteEvent = () => {
  useForm().delete(route('eventos.destroy', eventToDelete.value.id), {
    onSuccess: () => {
      showDeleteModal.value = false;
      eventToDelete.value = null;
    },
  });
};

const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
};
</script>
