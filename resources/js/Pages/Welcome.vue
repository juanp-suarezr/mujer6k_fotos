<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import { ref, onMounted, inject, watch, computed } from "vue";
import PageLayout from '@/Layouts/PageLayout.vue';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { WifiIcon, ComputerDesktopIcon, AcademicCapIcon, RocketLaunchIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { CameraIcon, ArrowDownTrayIcon, ShareIcon } from '@heroicons/vue/24/outline';

AOS.init();

const swal = inject('$swal');

defineProps({
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

const isContrast = ref(usePage().props.accesibilidad.contraste);
const letraSize = ref(usePage().props.accesibilidad.letra);

watch(() => usePage().props.accesibilidad.contraste, (newVal) => {
    isContrast.value = newVal;
});

watch(() => usePage().props.accesibilidad.letra, (newVal) => {
    letraSize.value = newVal;
});

const getLetterSize = size => {
    let fontClass = 'text';
    switch (size) {
        case -2:
            fontClass = `${fontClass}-xs sm:${fontClass}-base md:${fontClass}-lg`;
            break;
        case -1:
            fontClass = `${fontClass}-sm sm:${fontClass}-lg md:${fontClass}-xl`;
            break;
        case 0:
            fontClass = `${fontClass}-base sm:${fontClass}-xl md:${fontClass}-2xl`;
            break;
        case 1:
            fontClass = `${fontClass}-lg sm:${fontClass}-2xl md:${fontClass}-4xl`;
            break;
        case 2:
            fontClass = `${fontClass}-xl sm:${fontClass}-4xl md:${fontClass}-6xl`;
            break;
        default:
            break;
    }
    return fontClass;
}

const form = useForm({
    dorsal: '',
    evento_id: '',
});

const submitSearch = () => {
    if (form.dorsal.trim()) {
        form.get(route('fotos.public.search'), {
            preserveScroll: true,
        });
    }
};

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

onMounted(() => {
    AOS.refresh();
});
</script>

<template>
    <Head title="Home" />

    <PageLayout>

        <!-- ============================================================ -->
        <!-- HERO SECTION - PREMIUM FULL-VIEWPORT -->
        <!-- ============================================================ -->
        <section id="inicio" class="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#1a0a0a] via-[#2d0f0f] to-[#1a0505]">

            <!-- Background Image Layer with Overlay -->
            <div class="absolute inset-0 z-0">
                <!-- Dark gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-r from-[#0d0404]/95 via-[#1a0808]/80 to-[#0d0404]/70 z-10"></div>
                
                <!-- Warm orange glow -->
                <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F57C00]/20 via-[#FFC107]/10 to-transparent z-10"></div>
                
                <!-- Bottom gradient fade -->
                <div class="absolute bottom-0 left-0 right-0 h-32 sm:h-64 bg-gradient-to-t from-[#1a0a0a] to-transparent z-10"></div>

                <!-- Runners background image -->
                <img 
                    src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop" 
                    alt="Corredores en carrera"
                    class="absolute inset-0 w-full h-full object-cover object-[center_30%] sm:object-center scale-105"
                    style="filter: saturate(1.1) contrast(1.05);"
                />
            </div>

            <!-- Decorative dynamic lines (speed/movement) - hidden on mobile -->
            <div class="absolute inset-0 z-20 pointer-events-none overflow-hidden hidden sm:block">
                <!-- Diagonal speed lines -->
                <div class="absolute top-[15%] left-0 w-[120%] h-[2px] bg-gradient-to-r from-transparent via-[#FFC107]/40 to-transparent transform -rotate-12 translate-x-[-10%]"></div>
                <div class="absolute top-[35%] left-0 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#F57C00]/30 to-transparent transform rotate-6 translate-x-[-10%]"></div>
                <div class="absolute top-[55%] left-0 w-[120%] h-[2px] bg-gradient-to-r from-transparent via-[#FFC107]/25 to-transparent transform -rotate-8 translate-x-[-10%]"></div>
                <div class="absolute top-[75%] left-0 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#F57C00]/20 to-transparent transform rotate-10 translate-x-[-10%]"></div>
                <div class="absolute top-[88%] left-0 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#FFC107]/15 to-transparent transform -rotate-5 translate-x-[-10%]"></div>
                
                <!-- Vertical accent lines -->
                <div class="absolute right-[20%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#F57C00]/20 to-transparent"></div>
                <div class="absolute right-[35%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#FFC107]/15 to-transparent"></div>
            </div>

            <!-- Decorative SaaS-style curved shapes - smaller on mobile -->
            <div class="absolute -right-16 sm:-right-32 -top-16 sm:-top-32 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-[#F57C00]/10 blur-3xl z-10"></div>
            <div class="absolute -left-16 sm:-left-32 top-1/3 w-40 sm:w-80 h-40 sm:h-80 rounded-full bg-[#D32F2F]/10 blur-3xl z-10"></div>
            <div class="absolute right-[10%] bottom-[20%] w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-[#FFC107]/8 blur-3xl z-10"></div>

            <!-- Floating Polaroid Photos - only on lg+ screens -->
            <div class="absolute z-20 pointer-events-none hidden lg:block">
                <!-- Polaroid 1 -->
                <div class="absolute top-[12%] right-[8%] w-40 bg-white p-2 pb-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-12 animate-float-slow hover:rotate-6 transition-all duration-700"
                    data-aos="fade-left" data-aos-delay="300">
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=300&auto=format&fit=crop" 
                         alt="Corredor" class="w-full h-28 object-cover" />
                    <p class="mt-2 text-[10px] font-bold text-gray-700 text-center tracking-wider">DORSAL #1542</p>
                </div>
                <!-- Polaroid 2 -->
                <div class="absolute top-[45%] right-[3%] w-36 bg-white p-2 pb-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-12 animate-float-slower hover:rotate-[-6deg] transition-all duration-700"
                    data-aos="fade-left" data-aos-delay="600">
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=300&auto=format&fit=crop" 
                         alt="Corredora" class="w-full h-24 object-cover object-top" />
                    <p class="mt-2 text-[10px] font-bold text-gray-700 text-center tracking-wider">DORSAL #0891</p>
                </div>
                <!-- Polaroid 3 -->
                <div class="absolute top-[70%] right-[12%] w-36 bg-white p-2 pb-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-8 animate-float-medium hover:rotate-3 transition-all duration-700"
                    data-aos="fade-left" data-aos-delay="900">
                    <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=300&auto=format&fit=crop" 
                         alt="Corredores" class="w-full h-24 object-cover" />
                    <p class="mt-2 text-[10px] font-bold text-gray-700 text-center tracking-wider">DORSAL #2317</p>
                </div>
                <!-- Polaroid 4 -->
                <div class="absolute top-[28%] right-[22%] w-32 bg-white p-1.5 pb-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-6 animate-float-slower hover:rotate-[-3deg] transition-all duration-700"
                    data-aos="fade-left" data-aos-delay="450">
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=300&auto=format&fit=crop" 
                         alt="Meta" class="w-full h-20 object-cover" />
                    <p class="mt-1.5 text-[9px] font-bold text-gray-700 text-center tracking-wider">META 🏁</p>
                </div>
            </div>

            <!-- Main Content -->
            <div class="relative z-30 flex flex-col justify-center w-full h-full min-h-screen max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">

                <!-- Logo oficial de Pereira - Top Right -->
                <div class="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-10 lg:right-16 xl:right-20" data-aos="fade-down" data-aos-delay="200">
                    <div class="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 shadow-lg">
                        <img src="/assets/img/logo_white.webp" alt="Alcaldía de Pereira" class="h-7 sm:h-12 w-auto" />
                        <div class="h-5 sm:h-8 w-[1px] bg-white/30"></div>
                        <span class="text-[8px] sm:text-xs font-bold text-white/90 uppercase tracking-widest leading-tight">
                            Alcaldía<br/>de Pereira
                        </span>
                    </div>
                </div>

                <!-- Content Row: Text + Visual spacer -->
                <div class="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full mt-16 sm:mt-20 lg:mt-0">

                    <!-- Text Content Column -->
                    <div class="w-full lg:w-[55%] xl:w-[50%] pt-4 sm:pt-8 lg:pt-20" data-aos="fade-right" data-aos-duration="1000">

                        <!-- Badge -->
                        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 border border-white/20"
                            :class="{ '!bg-yellow-200/30 !border-yellow-300': isContrast }">
                            <span class="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#FFC107] animate-pulse"></span>
                            <span class="text-[9px] sm:text-xs font-semibold text-white/80 uppercase tracking-widest">
                                Plataforma Oficial
                            </span>
                        </div>

                        <!-- Main Title -->
                        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-none text-white mb-1 sm:mb-2"
                            :class="{ '!text-yellow-200': isContrast }">
                            <span class="block">CONSULTA</span>
                            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#F57C00] to-[#D32F2F]">
                                TUS FOTOS
                            </span>
                        </h1>

                        <!-- Subtitle -->
                        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white/90 mt-1 sm:mt-2 mb-4 sm:mb-6 tracking-wide"
                            :class="{ '!text-yellow-200': isContrast }">
                            POR DORSAL
                        </h2>

                        <!-- Description -->
                        <p class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mb-5 sm:mb-8 leading-relaxed"
                            :class="[{ '!text-white !font-bold': isContrast }, getLetterSize(letraSize)]">
                            Encuentra, descarga y comparte tus fotografías oficiales del evento.
                        </p>

                        <!-- Search Box - Glassmorphism -->
                        <div class="max-w-xl mb-8 sm:mb-12" data-aos="fade-up" data-aos-delay="300">
                            <form @submit.prevent="submitSearch" class="relative group">
                                <!-- Glassmorphism container - stacks on mobile -->
                                <div class="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] 
                                    transition-all duration-500 group-hover:border-[#F57C00]/50 group-hover:shadow-[0_8px_32px_rgba(245,124,0,0.2)]
                                    overflow-hidden"
                                    :class="{ '!bg-yellow-200/10 !border-yellow-300': isContrast }">
                                    
                                    <!-- Inner flex row for icon + input on mobile -->
                                    <div class="flex items-center flex-1">
                                        <!-- Search Icon -->
                                        <div class="pl-4 sm:pl-5 pr-2 sm:pr-3 flex-shrink-0">
                                            <MagnifyingGlassIcon class="w-5 sm:w-6 h-5 sm:h-6 text-[#FFC107]" 
                                                :class="{ '!text-yellow-200': isContrast }" />
                                        </div>

                                        <!-- Input Field -->
                                        <input
                                            v-model="form.dorsal"
                                            type="text"
                                            placeholder="Ingresa tu número de dorsal"
                                            class="flex-1 bg-transparent text-white placeholder-gray-400 py-3 sm:py-4 pr-4 text-base sm:text-lg font-medium
                                                focus:outline-none focus:ring-0 border-0 w-full min-w-0"
                                            :class="{ '!text-yellow-200 !placeholder-yellow-200/70': isContrast }"
                                        />
                                    </div>

                                    <!-- Search Button - full width on mobile -->
                                    <button type="submit"
                                        class="sm:relative mx-3 sm:mx-0 mb-3 sm:mb-0 sm:mr-2 sm:my-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#F57C00] to-[#D32F2F] 
                                            text-white font-extrabold text-xs sm:text-sm lg:text-base tracking-widest rounded-xl
                                            hover:from-[#FF9800] hover:to-[#E53935] 
                                            transition-all duration-300 transform hover:scale-105 active:scale-95
                                            shadow-[0_4px_20px_rgba(245,124,0,0.4)]
                                            hover:shadow-[0_6px_30px_rgba(245,124,0,0.6)]"
                                        :class="{ '!bg-yellow-200 !text-black !shadow-yellow-200/50': isContrast }">
                                        BUSCAR
                                    </button>
                                </div>
                            </form>

                            <!-- Helper text -->
                            <p class="mt-2 sm:mt-3 text-[10px] sm:text-xs text-gray-500 pl-2">
                                <span class="text-[#FFC107]" :class="{ '!text-yellow-200': isContrast }">Ejemplo:</span> 1542, 0891, 2317
                            </p>
                        </div>

                        <!-- Benefits Bar - responsive wrapping -->
                        <div class="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 mb-4 sm:mb-6" data-aos="fade-up" data-aos-delay="500">
                            <div class="flex items-center gap-2 sm:gap-3 group cursor-default">
                                <div class="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#F57C00]/20 to-[#FFC107]/20 border border-[#F57C00]/30 
                                    flex items-center justify-center group-hover:from-[#F57C00]/30 group-hover:to-[#FFC107]/30 transition-all duration-300">
                                    <CameraIcon class="w-4 h-4 sm:w-6 sm:h-6 text-[#FFC107]" />
                                </div>
                                <div>
                                    <p class="text-xs sm:text-sm font-bold text-white">Encuentra</p>
                                    <p class="text-[10px] sm:text-xs text-gray-400">tus fotos</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-2 sm:gap-3 group cursor-default">
                                <div class="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#F57C00]/20 to-[#FFC107]/20 border border-[#F57C00]/30 
                                    flex items-center justify-center group-hover:from-[#F57C00]/30 group-hover:to-[#FFC107]/30 transition-all duration-300">
                                    <ArrowDownTrayIcon class="w-4 h-4 sm:w-6 sm:h-6 text-[#FFC107]" />
                                </div>
                                <div>
                                    <p class="text-xs sm:text-sm font-bold text-white">Descarga</p>
                                    <p class="text-[10px] sm:text-xs text-gray-400">en alta calidad</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-2 sm:gap-3 group cursor-default">
                                <div class="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#F57C00]/20 to-[#FFC107]/20 border border-[#F57C00]/30 
                                    flex items-center justify-center group-hover:from-[#F57C00]/30 group-hover:to-[#FFC107]/30 transition-all duration-300">
                                    <ShareIcon class="w-4 h-4 sm:w-6 sm:h-6 text-[#FFC107]" />
                                </div>
                                <div>
                                    <p class="text-xs sm:text-sm font-bold text-white">Comparte</p>
                                    <p class="text-[10px] sm:text-xs text-gray-400">tus recuerdos</p>
                                </div>
                            </div>
                        </div>

                        <!-- Institutional Footer Text -->
                        <div class="mt-4 sm:mt-8 mb-4" data-aos="fade-up" data-aos-delay="700">
                            <div class="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-[#FFC107] to-transparent mb-2 sm:mb-4"></div>
                            <p class="text-xs sm:text-base lg:text-lg font-light text-gray-400 italic tracking-wide"
                                :class="{ '!text-yellow-200 !font-bold !not-italic': isContrast }">
                                "Pereira, una ciudad que avanza"
                            </p>
                        </div>
                    </div>

                    <!-- Right side: Visual spacer (polaroids float on this side) -->
                    <div class="hidden lg:block lg:w-[45%] xl:w-[50%]"></div>

                </div>
            </div>

            <!-- Bottom gradient fade to next section -->
            <div class="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-[#F2F2F2] to-transparent z-30"></div>

        </section>

        
        <!-- <section class="section1 overflow-hidden" data-aos="fade-up">
            <svg class="curve" viewBox="0 0 370.417 79.375">
                <path class="wave"
                    d="M-1.301 51.894C141.54 5.807 159.612 38.111 226.846 62.2c90.74 32.51 149.712-33.492 149.712-33.492v59.541H-1.302z"
                    fill="#C20E1A" fill-rule="evenodd" />
            </svg>
        </section> -->

    </PageLayout>
</template>

<style scoped>
/* Floating animations for polaroid pictures */
@keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(12deg); }
    50% { transform: translateY(-15px) rotate(10deg); }
}

@keyframes float-slower {
    0%, 100% { transform: translateY(0px) rotate(-12deg); }
    50% { transform: translateY(-20px) rotate(-10deg); }
}

@keyframes float-medium {
    0%, 100% { transform: translateY(0px) rotate(8deg); }
    50% { transform: translateY(-12px) rotate(6deg); }
}

.animate-float-slow {
    animation: float-slow 6s ease-in-out infinite;
}

.animate-float-slower {
    animation: float-slower 8s ease-in-out infinite;
}

.animate-float-medium {
    animation: float-medium 5s ease-in-out infinite;
}

/* Ensure the particles container from old code is hidden */
#aa_particles {
    display: none;
}
</style>
