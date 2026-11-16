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

                <!-- Selector de Evento -->
                <div class="max-w-md mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
                    <div class="bg-white rounded-2xl shadow-md p-4 sm:p-5 border border-gray-100">
                        <label for="evento-selector" class="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2 flex items-center gap-2">
                            <CalendarDaysIcon class="w-4 h-4 text-amber-500" />
                            Seleccionar Evento
                        </label>
                        <div class="relative">
                            <select
                                id="evento-selector"
                                v-model="selectedEvento"
                                @change="handleEventoChange"
                                class="w-full bg-gray-50 hover:bg-gray-100/70 border border-gray-300 text-gray-800 text-sm font-semibold rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 block p-3 pr-10 appearance-none transition-all duration-200 cursor-pointer shadow-sm"
                            >
                                <option value="">Todos los eventos</option>
                                <option v-for="evento in eventos" :key="evento.id" :value="evento.id">
                                    {{ evento.nombre }}
                                </option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                <ChevronDownIcon class="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Results Section -->
                <div v-if="fotos.data.length > 0" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                        <h2 class="text-xl font-semibold text-gray-800">
                            Galería ({{ fotos.total }} fotos)
                        </h2>
                        <span v-if="selectedEventoNombre" class="inline-flex items-center text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-800 rounded-full w-fit">
                            {{ selectedEventoNombre }}
                        </span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-10">
                        <div
                            v-for="foto in fotos.data"
                            :key="foto.id"
                            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group tilt-card"
                        >
                            <div class="thumbnail-container bg-gray-200 relative">
                                <div class="w-full h-full flex items-center justify-center">
                                    <iframe class="cursor-none pointer-events-none" loading="lazy" :src="`https://drive.google.com/file/d/${foto.google_drive_file_id}/preview`" width="100%" height="100%"></iframe>
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
                    <p class="text-gray-500 text-lg">
                        {{ selectedEvento ? 'No hay fotos sin dorsal disponibles para este evento' : 'No hay fotos sin dorsal disponibles en este momento' }}
                    </p>
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
import { Head, Link, router } from '@inertiajs/vue3';
import { ref, watch, computed, onMounted } from 'vue';
import { PhotoIcon, ArrowLeftIcon, ArrowDownTrayIcon, CalendarDaysIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';
import Pagination from '@/Components/Pagination.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const props = defineProps({
    eventos: {
        type: Array,
        required: true,
    },
    fotos: {
        type: Object,
        required: true,
    },
    selectedEventoId: {
        type: [String, Number],
        default: '',
    },
});

const selectedEvento = ref(props.selectedEventoId ?? '');

watch(() => props.selectedEventoId, (newVal) => {
    selectedEvento.value = newVal ?? '';
});

const selectedEventoNombre = computed(() => {
    if (!selectedEvento.value) return null;
    const found = props.eventos.find(e => String(e.id) === String(selectedEvento.value));
    return found ? found.nombre : null;
});

const handleEventoChange = () => {
    router.get(
        route('fotos.public.sin-dorsal'),
        { evento_id: selectedEvento.value },
        {
            preserveState: true,
            preserveScroll: true,
        }
    );
};

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
    window.location.href = route('fotos.public.download', fotoId);
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
