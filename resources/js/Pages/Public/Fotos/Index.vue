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
                            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                            @click="openModal(foto)"
                        >
                            <div class="thumbnail-container bg-gray-100 relative">
                                <img
                                    :src="foto.url_visualizacion"
                                    :alt="`Foto dorsal ${foto.dorsal}`"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <div class="p-4">
                                <p class="font-medium text-gray-800">Dorsal #{{ foto.dorsal }}</p>
                                <p class="text-sm text-gray-500">{{ foto.corredor?.nombre_completo || 'Corredor no registrado' }}</p>
                                <p class="text-xs text-gray-400">{{ foto.evento?.nombre }}</p>
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

        <!-- Photo Modal -->
        <Modal :show="showModal" @close="showModal = false" max-width="4xl">
            <div v-if="selectedFoto" class="p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold text-gray-800">
                        Foto - Dorsal #{{ selectedFoto.dorsal }}
                    </h3>
                    <button @click="showModal = false" class="text-gray-400 hover:text-gray-600">
                        <XMarkIcon class="h-6 w-6" />
                    </button>
                </div>

                <div class="bg-gray-100 rounded-lg overflow-hidden mb-4 modal-image">
                    <img
                        :src="selectedFoto.url_visualizacion"
                        :alt="`Foto dorsal ${selectedFoto.dorsal}`"
                        class="w-full h-auto max-w-full object-contain"
                    />
                </div>

                <div class="mb-4">
                    <p class="text-gray-600"><span class="font-medium">Corredor:</span> {{ selectedFoto.corredor?.nombre_completo || 'No registrado' }}</p>
                    <p class="text-gray-600"><span class="font-medium">Evento:</span> {{ selectedFoto.evento?.nombre }}</p>
                    <p class="text-gray-600"><span class="font-medium">Archivo:</span> {{ selectedFoto.nombre_archivo }}</p>
                </div>

                <div class="flex justify-end gap-3">
                    <SecondaryButton @click="showModal = false">
                        Cerrar
                    </SecondaryButton>
                    <PrimaryButton @click="downloadFoto(selectedFoto.id)">
                        <ArrowDownTrayIcon class="h-5 w-5 mr-2" />
                        Descargar
                    </PrimaryButton>
                </div>
            </div>
        </Modal>
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
import { MagnifyingGlassIcon, PhotoIcon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline';
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
const showModal = ref(false);
const selectedFoto = ref(null);

const searchFotos = () => {
    form.get(route('fotos.public.search'), {
        preserveScroll: true,
    });
};

const openModal = (foto) => {
    selectedFoto.value = foto;
    showModal.value = true;
};

const downloadFoto = (fotoId) => {
    window.open(route('fotos.public.download', fotoId), '_blank');
};
</script>

<style scoped>
.thumbnail-container {
    aspect-ratio: 4/3;
}
.modal-image {
    max-height: 70vh;
}
</style>