<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Head } from '@inertiajs/vue3';
const props = defineProps({
    usuario: {
        type: Object,
        default: () => ({}),
    },

});



const breadcrumbLinks = [
    { url: '/registradosUnicos', text: 'listado de registros únicos' },
    { url: '', text: 'Editar registrado -- '+props.usuario.id },
];

console.log(props.usuario);
</script>

<template>
    <Head title="Editar Registro" />

    <AuthenticatedLayout :breadCrumbLinks="breadcrumbLinks">
        <template #header>
            Editar Registro -- {{  usuario.id }}
        </template>
        <div class="py-2">
            <div class="overflow-hidden shadow-sm sm:rounded-lg space-y-6 w-full">
                <div class="p-6 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdateProfileInformationForm :user="usuario" class="px-4" />
                </div>

            </div>
        </div>
    </AuthenticatedLayout>
</template>
