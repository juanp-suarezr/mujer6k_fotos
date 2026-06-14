<template>
    <Head title="Buscar Fotos" />

    <PageLayout>
        <section class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center mb-8" data-aos="fade-down">
                    <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                        Consulta tus <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600">Fotos</span>
                    </h1>
<p class="text-gray-600">Busca por número de dorsal y evento</p>
                    
                    <div class="mt-4">
                        <SecondaryButton @click="goHome">
                            Volver al Inicio
                        </SecondaryButton>
                    </div>
                </div>

                <!-- Search Form -->
                <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8" data-aos="fade-up" data-aos-delay="100">
                    <form @submit.prevent="searchFotos" class="space-y-4">
                        <div>
                            <InputLabel for="evento_id" value="Evento (opcional)" />
                            <select
                                id="evento_id"
                                v-model="form.evento_id"
                                class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-amber-500 focus:ring-amber-500"
                            >
                                <option value="">Todos los eventos</option>
                                <option v-for="evento in eventos" :key="evento.id" :value="evento.id">
                                    {{ evento.nombre }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <InputLabel for="dorsal" value="Número de Dorsal" />
                            <TextInput
                                id="dorsal"
                                v-model="form.dorsal"
                                type="text"
                                placeholder="Ej: 1542"
                                class="mt-1 block w-full"
                                required
                            />
                            <InputError :message="form.errors.dorsal" />
                        </div>

                        <div class="pt-2">
                            <PrimaryButton type="submit" :disabled="form.processing" class="w-full justify-center">
                                <MagnifyingGlassIcon class="h-5 w-5 mr-2" />
                                {{ form.processing ? 'Buscando...' : 'Buscar Fotos' }}
                            </PrimaryButton>
                        </div>
                    </form>
                </div>

                <!-- Results Section -->
                <div v-if="fotos.length > 0" data-aos="fade-up" data-aos-delay="200">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">
                        Resultados encontrados ({{ fotos.length }})
                    </h2>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div
                            v-for="foto in fotos"
                            :key="foto.id"
                            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div class="thumbnail-container bg-gray-200 relative">
                                <div class="w-full h-full flex items-center justify-center">
                                    <!-- <PhotoIcon class="h-12 w-12 text-gray-400" /> -->
                                    <iframe :src="`https://drive.google.com/file/d/${foto.google_drive_file_id}/preview`" width="100%" height="100%"></iframe>
                                </div>
                            </div>
                            <div class="p-4">
                                <p class="font-medium text-gray-800">Dorsal #{{ foto.dorsal }}</p>
                                <p class="text-sm text-gray-500">{{ foto.corredor?.nombre_completo || '' }}</p>
                                <p class="text-xs text-gray-400">{{ foto.evento?.nombre }}</p>
                            </div>

                            <div class="px-4 pb-4 flex gap-2">
                                <PrimaryButton @click="viewFoto(foto)" class="flex-1 text-xs">
                                    Ver Foto
                                </PrimaryButton>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="searchPerformed" class="text-center py-12" data-aos="fade-up">
                    <PhotoIcon class="h-16 w-16 mx-auto text-gray-300 mb-4" />
                    <p class="text-gray-500 text-lg">No se encontraron fotos para el dorsal ingresado</p>
                </div>
            </div>
        </section>
    </PageLayout>
</template>

<script setup>
import PageLayout from '@/Layouts/PageLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import Modal from '@/Components/Modal.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import InputError from '@/Components/InputError.vue';
import { Head, useForm } from '@inertiajs/vue3';
import { ref, computed } from 'vue';
import { MagnifyingGlassIcon, PhotoIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const props = defineProps({
    eventos: {
        type: Array,
        required: true,
    },
    fotos: {
        type: Array,
        default: () => [],
    },
    filters: {
        type: Object,
        default: () => ({ dorsal: '', evento_id: '' }),
    },
});

const form = useForm({
    dorsal: props.filters.dorsal || '',
    evento_id: props.filters.evento_id || '',
});

const fotos = computed(() => props.fotos);
const searchPerformed = computed(() => props.filters.dorsal !== '' || props.filters.evento_id !== '');

const searchFotos = () => {
    form.get(route('fotos.public.search'), {
        preserveScroll: true,
    });
};

const viewFoto = (foto) => {
    if (foto.google_drive_file_id) {
        // Usar el visor embebido de Google Drive (funciona sin autenticación para archivos públicos)
        const viewerUrl = `https://drive.google.com/file/d/${foto.google_drive_file_id}/preview`;
        window.open(viewerUrl, '_blank');
    }
};

const downloadFoto = (fotoId) => {
    window.open(route('fotos.public.download', fotoId), '_blank');
};

const goHome = () => {
    window.location.href = route('welcome');
};

</script>

<style scoped>
.thumbnail-container {
    aspect-ratio: 4/3;
}
</style>