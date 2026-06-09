<template>

    <Head title="Agregar evidencia" />

    <AuthenticatedLayout :breadCrumbLinks="breadcrumbLinks">
        <template #header>
            Nueva Evidencia
        </template>

        <div class="flex flex-col bg-white border shadow-sm rounded-xl w-full">
            <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 grid grid-cols-2 gap-4">
                <h3 class="mt-1 text-gray-500">
                    Nueva Evidencia
                </h3>
                <div class="text-right">
                    <SecondaryButton :href="route('evidencias.index')">
                        Regresar
                    </SecondaryButton>
                </div>
            </div>
            <div class="p-4 md:p-5">
                <form @submit.prevent="submit" class="grid lg:grid-cols-2 gap-4">
                    <!-- nombre -->
                    <div>
                        <InputLabel for="nombre" value="Nombre de la evidencia" />
                        <TextInput id="nombre" type="text" class="mt-1 block w-full" v-model="form.nombre" required autofocus autocomplete="nombre" />
                        <InputError class="mt-2" :message="form.errors.nombre" />
                    </div>

                    <!-- descripción -->
                    <div class="col-span-2">
                        <p class="text-gray-600 text-sm">
                            Información adicional sobre la evidencia (max 300 caracteres)
                        </p>
                        <Textarea v-model="form.descripcion" variant="filled" autoResize rows="5"
                            class="mt-1 block w-full" required autocomplete="descripcion" />
                        <p class="text-gray-500 text-sm mt-2" :class="{ 'text-red-500': isMaxPalabras }">
                            {{ palabrasEnTestimonio }} caracteres <span v-if="isMaxPalabras">Limite de caracteres superado</span>
                        </p>
                        <InputError class="mt-2" :message="form.errors.descripcion" />
                    </div>

                    <!-- imagenes -->
                    <div class="col-span-2">
                        <p class="text-gray-600 text-sm">
                            Imágenes de la evidencia (puedes seleccionar varias, resolución recomendada: 1280x720)
                        </p>
                        <div class="border-2 border-gray-300 rounded-md p-2">
                            <input
                                id="imagenes"
                                type="file"
                                class="mt-1 !border-0"
                                accept="image/*"
                                multiple
                                @change="onMultipleImagesUpload"
                            />
                            <InputError class="mt-2" :message="form.errors.imagenes" />

                            <div class="flex flex-wrap gap-4 justify-center mt-4">
                                <div
                                    v-for="(img, idx) in imagePreviews"
                                    :key="idx"
                                    class="relative w-32 h-32 flex items-center justify-center border rounded bg-gray-50"
                                >
                                    <img :src="img" alt="preview" class="object-contain w-full h-full" />
                                    <button
                                        type="button"
                                        @click="removeImage(idx)"
                                        class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
                                        title="Eliminar imagen"
                                    >×</button>
                                </div>
                                <div v-if="!imagePreviews.length" class="w-32 h-32 flex items-center justify-center bg-gray-100 rounded text-gray-300">
                                    <PhotoIcon class="w-12 h-12" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="mt-4 flex flex-col items-end">
                            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                Registrar Evidencia
                            </PrimaryButton>
                        </div>
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
import { Head, useForm } from '@inertiajs/vue3';
import SecondaryButton from "@/Components/SecondaryButton.vue";
import { inject, ref, computed, watch } from 'vue';
import { PhotoIcon } from "@heroicons/vue/24/solid";
import Textarea from 'primevue/textarea';

const swal = inject('$swal');

const isMaxPalabras = ref(false);

const form = useForm({
    nombre: '',
    descripcion: '',
    imagenes: [],
});

const breadcrumbLinks = [
    { url: '/evidencias', text: 'Listado de evidencias' },
    { url: '', text: 'Añadir evidencia' },
];

const palabrasEnTestimonio = computed(() => {
    const palabras = form.descripcion.trim();
    const result = palabras.length;
    isMaxPalabras.value = result >= 300;
    return result;
});

watch(palabrasEnTestimonio, () => {
    form.descripcion = form.descripcion.trim();
});

// Previsualización de imágenes
const imagePreviews = ref([]);

// Añadir imágenes sin reemplazar las anteriores
const onMultipleImagesUpload = (event) => {
    const files = Array.from(event.target.files);

    files.forEach(file => {
        // Evitar duplicados por nombre y tamaño
        if (!form.imagenes.some(f => f.name === file.name && f.size === file.size)) {
            form.imagenes.push(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreviews.value.push(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Limpiar el input para permitir volver a seleccionar la misma imagen si se elimina
    event.target.value = '';
};

// Eliminar imagen por índice
const removeImage = (idx) => {
    form.imagenes.splice(idx, 1);
    imagePreviews.value.splice(idx, 1);
};

const submit = () => {
    const formData = new FormData();
    formData.append('nombre', form.nombre);
    formData.append('descripcion', form.descripcion);

    form.imagenes.forEach((img, idx) => {
        formData.append(`imagenes[${idx}]`, img);
    });

    form.post(route('evidencias.store'), {
        data: formData,
        forceFormData: true,
        onSuccess: function () {
            swal({
                title: "Registro Guardado",
                text: "La evidencia se ha almacenado exitosamente",
                icon: "success"
            })
        },
        onError: function (errors) {
            swal({
                title: "Error",
                text: "Hubo un problema al guardar la evidencia",
                icon: "error"
            });
        },
        onFinish: function () {
            form.reset();
            imagePreviews.value = [];
        }
    });
};
</script>
