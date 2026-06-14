<template>
    <Head title="Fotos sin Dorsal" />

    <PageLayout>
        <section class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center mb-8" data-aos="fade-down">
                    <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                        Fotos <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600">sin Dorsal Asignado</span>
                    </h1>
                    <p class="text-gray-600">Imágenes que aún no han sido asignadas a un número de dorsal</p>
                </div>

                <!-- Results Section -->
                <div v-if="fotos.data.length > 0" data-aos="fade-up" data-aos-delay="200">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">
                        Galería ({{ fotos.total }} fotos)
                    </h2>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <div
                            v-for="foto in fotos.data"
                            :key="foto.id"
                            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group tilt-card"
                        >
                            <div class="thumbnail-container bg-gray-200 relative">
                                <div class="w-full h-full flex items-center justify-center">
                                    <!-- <PhotoIcon class="h-12 w-12 text-gray-400" /> -->
                                    <iframe :src="`https://drive.google.com/file/d/${foto.google_drive_file_id}/preview`" width="100%" height="100%"></iframe>
                                </div>
                            </div>
                            <div class="p-4">
                                <p class="font-medium text-gray-800 mb-1">
                                    {{ foto.evento?.nombre || 'Sin evento' }}
                                </p>
                                <p class="text-xs text-gray-400">
                                    {{ foto.nombre_archivo }}
                                </p>
                            </div>
                            <div class="px-4 pb-4 flex gap-2">
                                <PrimaryButton @click="viewFoto(foto)" class="flex-1 text-xs">
                                    Ver Foto
                                </PrimaryButton>
                                <PrimaryButton @click="downloadFoto(foto.id)" class="flex-1 text-xs">
                                    Descargar
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>

                    <Pagination :links="fotos.links" class="mt-6" />
                </div>

                <div v-else class="text-center py-12" data-aos="fade-up">
                    <PhotoIcon class="h-16 w-16 mx-auto text-gray-300 mb-4" />
                    <p class="text-gray-500 text-lg">No hay fotos sin dorsal disponibles en este momento</p>
                </div>

                <!-- Back Button -->
                <div class="mt-8 text-center" data-aos="fade-up" data-aos-delay="300">
                    <Link
                        :href="route('welcome')"
                        class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F57C00] to-[#D32F2F] text-white font-extrabold text-sm tracking-wider rounded-xl hover:from-[#FF9800] hover:to-[#E53935] transition-all duration-300 transform hover:scale-105 shadow-[0_4px_20px_rgba(245,124,0,0.4)]"
                    >
                        <ArrowLeftIcon class="w-4 h-4 mr-2" />
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        </section>
    </PageLayout>
</template>

<script setup>
import PageLayout from '@/Layouts/PageLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Head, Link } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import { PhotoIcon, ArrowLeftIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline';
import Pagination from '@/Components/Pagination.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

defineProps({
    eventos: {
        type: Array,
        required: true,
    },
    fotos: {
        type: Object,
        required: true,
    },
});

onMounted(async () => {
    AOS.refresh();
    try {
        const module = await import('vanilla-tilt');
        const VanillaTilt = module.default || module;
        const tiltElements = document.querySelectorAll('.tilt-card');
        if (tiltElements.length) {
            VanillaTilt.init(tiltElements, {
                max: 8,
                speed: 300,
                glare: true,
                'max-glare': 0.1,
                scale: 1.01,
            });
        }
    } catch (e) {
        // vanilla-tilt not available, skip
    }
});

const viewFoto = (foto) => {
    if (foto.google_drive_file_id) {
        const viewerUrl = `https://drive.google.com/file/d/${foto.google_drive_file_id}/preview`;
        window.open(viewerUrl, '_blank');
    }
};

const downloadFoto = (fotoId) => {
    window.open(route('fotos.public.download', fotoId), '_blank');
};

</script>

<style scoped>
.thumbnail-container {
    aspect-ratio: 4/3;
}

.tilt-card {
    will-change: transform;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
}
</style>