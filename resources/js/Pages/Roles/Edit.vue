<template>
  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-800">Editar Rol</h2>
        <Link :href="route('roles.index')" class="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center">
          <ArrowLeftIcon class="h-4 w-4 mr-1" />
          Volver
        </Link>
      </div>
    </template>

    <div class="py-6">
      <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 class="text-lg font-semibold text-gray-800">Datos del rol: {{ role.name }}</h3>
        </div>
        <form @submit.prevent="submit" class="p-6 space-y-5">
          <div>
            <InputLabel for="name" value="Nombre del rol" />
            <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required />
            <InputError class="mt-2" :message="form.errors.name" />
          </div>
          <div>
            <InputLabel value="Permisos" />
            <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <label v-for="perm in permission" :key="perm.id" class="flex items-center gap-2 p-2 rounded border border-gray-200 hover:bg-gray-50">
                <input type="checkbox" :value="perm.id" v-model="form.permisos" :checked="permission.includes(perm.id)" class="rounded text-blue-600 focus:ring-blue-500" />
                <span class="text-sm text-gray-700">{{ perm.name }}</span>
              </label>
            </div>
            <InputError class="mt-2" :message="form.errors.permisos" />
          </div>
          <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <SecondaryButton :href="route('roles.index')" type="button">Cancelar</SecondaryButton>
            <PrimaryButton :disabled="form.processing">Actualizar</PrimaryButton>
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
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  role: {
    type: Object,
    required: true,
  },
  permission: {
    type: Array,
    required: true,
  },
  rolePermissions: {
    type: Array,
    default: () => [],
  },
  
});

console.log(props);


const form = useForm({
    name: props.role.name,
    permisos: Object.values(props.rolePermissions).map(Number),
});

const submit = () => {
  form.put(route('roles.update', props.role.id));
};
</script>
