<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import { ref, onMounted, inject, watch, computed, onBeforeUnmount, nextTick } from "vue";
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
import { CameraIcon, ArrowDownTrayIcon, ShareIcon, ChevronDoubleDownIcon, FireIcon } from '@heroicons/vue/24/outline';

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

// ============================================================
// INTERACTIVE ENHANCEMENTS
// ============================================================

// --- Scroll Progress ---
const scrollProgress = ref(0);
const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
};

// --- Mouse Parallax ---
const heroRef = ref(null);
const parallaxOffset = ref({ x: 0, y: 0 });
const handleMouseMove = (e) => {
    if (!heroRef.value) return;
    const rect = heroRef.value.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    parallaxOffset.value = { x: x * 8, y: y * 12 };
};






// --- Stats Counter Animation ---
const statsVisible = ref(false);
const counters = ref([
    { label: 'Eventos Realizados', value: 12, suffix: '+', icon: FireIcon, current: 0 },
    { label: 'Fotos Capturadas', value: 25000, suffix: '+', icon: CameraIcon, current: 0 },
    { label: 'Corredores', value: 8000, suffix: '+', icon: ArrowDownTrayIcon, current: 0 },
    { label: 'Descargas', value: 45000, suffix: '+', icon: ShareIcon, current: 0 },
]);
let counterIntervals = [];

const animateCounters = () => {
    statsVisible.value = true;
    counters.value.forEach((counter, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = counter.value / steps;
        let currentStep = 0;
        
        if (counterIntervals[index]) clearInterval(counterIntervals[index]);
        
        counterIntervals[index] = setInterval(() => {
            currentStep++;
            counter.current = Math.min(Math.round(increment * currentStep), counter.value);
            if (currentStep >= steps) {
                clearInterval(counterIntervals[index]);
            }
        }, duration / steps);
    });
};

// --- Stats Intersection Observer ---
const statsSectionRef = ref(null);
let statsObserver = null;

// --- Vanilla Tilt Initialization ---
let VanillaTilt = null;

// --- Dynamic Dorsal Preview ---
const dorsalPreview = computed(() => {
    const num = form.dorsal.trim();
    if (!num) return null;
    return num;
});

// --- Search Input Focus ---
const isSearchFocused = ref(false);

onMounted(async () => {
    AOS.refresh();
    
    // Scroll progress
    window.addEventListener('scroll', handleScroll);
    
    // Stats observer
    await nextTick();
    if (statsSectionRef.value) {
        statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsVisible.value) {
                    animateCounters();
                }
            });
        }, { threshold: 0.3 });
        statsObserver.observe(statsSectionRef.value);
    }
    
    // Load vanilla-tilt dynamically
    try {
        const module = await import('vanilla-tilt');
        VanillaTilt = module.default || module;
        
        // Initialize tilt on polaroids
        nextTick(() => {
            if (VanillaTilt) {
                const tiltElements = document.querySelectorAll('.tilt-card');
                VanillaTilt.init(tiltElements, {
                    max: 12,
                    speed: 400,
                    glare: true,
                    'max-glare': 0.2,
                    scale: 1.02,
                });
            }
        });
    } catch (e) {
        console.log('vanilla-tilt not available, using CSS fallback');
    }
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
    if (statsObserver) statsObserver.disconnect();
    counterIntervals.forEach(interval => clearInterval(interval));
    
    // Destroy vanilla-tilt instances
    if (VanillaTilt) {
        document.querySelectorAll('.tilt-card').forEach(el => {
            try { VanillaTilt?.destroy?.(el); } catch(e) {}
        });
    }
});

// --- Animated runner refs ---
const runnerRef = ref(null);

// --- Featured dorsal numbers for suggestion chips ---
const suggestedDorsals = ['1542', '0891', '2317', '0456', '3721'];
</script>

<template>
    <Head title="Home" />

    <PageLayout>

        <!-- ============================================================ -->
        <!-- SCROLL PROGRESS BAR -->
        <!-- ============================================================ -->
        <div class="fixed top-0 left-0 right-0 z-[9999] h-[3px] sm:h-1">
            <div class="h-full bg-gradient-to-r from-[#FFC107] via-[#F57C00] to-[#D32F2F] transition-all duration-150 ease-out"
                :class="{ '!from-yellow-300 !to-yellow-400': isContrast }"
                :style="{ width: scrollProgress + '%' }">
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- HERO SECTION - PREMIUM FULL-VIEWPORT -->
        <!-- ============================================================ -->
        <section id="inicio" ref="heroRef"
            class="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#1a0a0a] via-[#2d0f0f] to-[#1a0505]"
            @mousemove="handleMouseMove">

            <!-- Background Image Layer with Parallax -->
            <div class="absolute inset-0 z-0 transition-transform duration-[50ms] ease-out"
                :style="{
                    transform: `translate(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px)`
                }">
                <!-- Dark gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-r from-[#0d0404]/95 via-[#1a0808]/80 to-[#0d0404]/70 z-10"></div>
                
                <!-- Warm orange glow -->
                <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F57C00]/20 via-[#FFC107]/10 to-transparent z-10"></div>
                
                <!-- Bottom gradient fade -->
                <div class="absolute bottom-0 left-0 right-0 h-32 sm:h-64 bg-gradient-to-t from-[#1a0a0a] to-transparent z-10"></div>

                <!-- Runners background image -->
                <img 
                    src="/assets/img/fondo.webp" 
                    alt="Corredores en carrera"
                    class="absolute inset-0 w-full h-full object-cover object-[center_30%] sm:object-center scale-105"
                    style="filter: saturate(1.1) contrast(1.05);"
                />
            </div>

            <!-- Animated Speed Particles (CSS-based) -->
            <div class="absolute inset-0 z-[5] pointer-events-none overflow-hidden hidden sm:block">
                <!-- Particle dots -->
                <div class="particle particle-1"></div>
                <div class="particle particle-2"></div>
                <div class="particle particle-3"></div>
                <div class="particle particle-4"></div>
                <div class="particle particle-5"></div>
                <div class="particle particle-6"></div>
                <div class="particle particle-7"></div>
                <div class="particle particle-8"></div>
                <div class="particle particle-9"></div>
                <div class="particle particle-10"></div>
                <div class="particle particle-11"></div>
                <div class="particle particle-12"></div>
                
                <!-- Speed streak lines -->
                <div class="speed-streak streak-1"></div>
                <div class="speed-streak streak-2"></div>
                <div class="speed-streak streak-3"></div>
                <div class="speed-streak streak-4"></div>
                <div class="speed-streak streak-5"></div>
            </div>

            <!-- Decorative dynamic lines (speed/movement) - enhanced -->
            <div class="absolute inset-0 z-20 pointer-events-none overflow-hidden hidden sm:block">
                <!-- Diagonal speed lines with animation -->
                <div class="speed-line" style="top: 15%; transform: rotate(-12deg); animation-delay: 0s; height: 2px; width: 120%; background: linear-gradient(90deg, transparent, rgba(255,193,7,0.4), transparent);"></div>
                <div class="speed-line" style="top: 35%; transform: rotate(6deg); animation-delay: 0.4s; height: 1px; width: 120%; background: linear-gradient(90deg, transparent, rgba(245,124,0,0.3), transparent);"></div>
                <div class="speed-line" style="top: 55%; transform: rotate(-8deg); animation-delay: 0.8s; height: 2px; width: 120%; background: linear-gradient(90deg, transparent, rgba(255,193,7,0.25), transparent);"></div>
                <div class="speed-line" style="top: 75%; transform: rotate(10deg); animation-delay: 1.2s; height: 1px; width: 120%; background: linear-gradient(90deg, transparent, rgba(245,124,0,0.2), transparent);"></div>
                <div class="speed-line" style="top: 88%; transform: rotate(-5deg); animation-delay: 1.6s; height: 1px; width: 120%; background: linear-gradient(90deg, transparent, rgba(255,193,7,0.15), transparent);"></div>
                
                <!-- Vertical accent lines -->
                <div class="absolute right-[20%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#F57C00]/20 to-transparent"></div>
                <div class="absolute right-[35%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#FFC107]/15 to-transparent"></div>
            </div>

            <!-- Decorative SaaS-style curved shapes -->
            <div class="absolute -right-16 sm:-right-32 -top-16 sm:-top-32 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-[#F57C00]/10 blur-3xl z-10 animate-pulse-slow"></div>
            <div class="absolute -left-16 sm:-left-32 top-1/3 w-40 sm:w-80 h-40 sm:h-80 rounded-full bg-[#D32F2F]/10 blur-3xl z-10 animate-pulse-slower"></div>
            <div class="absolute right-[10%] bottom-[20%] w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-[#FFC107]/8 blur-3xl z-10 animate-pulse-medium"></div>

            <!-- Animated Runner Character - only on lg+ screens -->
            <div ref="runnerRef" class="absolute z-20 pointer-events-none hidden lg:block" style="bottom: 18%; left: 5%;">
                <div class="runner-container">
                    <svg class="runner-svg" width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- Body -->
                        <circle cx="50" cy="25" r="12" fill="#FFC107" opacity="0.9"/>
                        <!-- Torso -->
                        <line x1="50" y1="37" x2="50" y2="65" stroke="#FFC107" stroke-width="5" stroke-linecap="round" opacity="0.9"/>
                        <!-- Left arm (back) -->
                        <line x1="50" y1="42" x2="32" y2="35" stroke="#FFC107" stroke-width="4" stroke-linecap="round" opacity="0.7" class="arm-left"/>
                        <!-- Right arm (front) -->
                        <line x1="50" y1="42" x2="68" y2="35" stroke="#FFC107" stroke-width="4" stroke-linecap="round" opacity="0.9" class="arm-right"/>
                        <!-- Left leg (back) -->
                        <line x1="50" y1="65" x2="32" y2="88" stroke="#FFC107" stroke-width="5" stroke-linecap="round" opacity="0.7" class="leg-left"/>
                        <!-- Right leg (front) -->
                        <line x1="50" y1="65" x2="68" y2="88" stroke="#FFC107" stroke-width="5" stroke-linecap="round" opacity="0.9" class="leg-right"/>
                        <!-- Speed trail -->
                        <circle cx="15" cy="45" r="3" fill="#FFC107" opacity="0.3" class="trail-1"/>
                        <circle cx="8" cy="55" r="2" fill="#F57C00" opacity="0.2" class="trail-2"/>
                        <circle cx="10" cy="35" r="2" fill="#FFC107" opacity="0.15" class="trail-3"/>
                    </svg>
                </div>
            </div>

        

            <!-- Main Content -->
            <div class="relative z-30 flex flex-col justify-center w-full h-full min-h-screen max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">

                <!-- Logo oficial de Pereira - Top Right -->
                <div class="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-10 lg:right-16 xl:right-20" data-aos="fade-down" data-aos-delay="200">
                    <div class="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
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

                        <!-- Badge - animated pulse -->
                        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 border border-white/20 badge-pulse"
                            :class="{ '!bg-yellow-200/30 !border-yellow-300': isContrast }">
                            <span class="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#FFC107] animate-pulse"></span>
                            <span class="text-[9px] sm:text-xs font-semibold text-white/80 uppercase tracking-widest">
                                Plataforma Oficial
                            </span>
                        </div>

                        <!-- Main Title -->
                        <h1 class="main-title-gradient max-w-full min-w-0 text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-black mb-1 sm:mb-2"
                            :class="{ '!bg-none !text-yellow-200': isContrast }">
                            CONSULTA TUS FOTOS
                        </h1>

                        <!-- Subtitle with reveal -->
                        <h2 class="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-extrabold text-white/90 mt-1 sm:mt-2 mb-4 sm:mb-6 tracking-wide"
                            :class="{ '!text-yellow-200': isContrast }"
                            data-aos="fade-up" data-aos-delay="200">
                            POR DORSAL
                        </h2>

                        <!-- Description -->
                        <p class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mb-5 sm:mb-8 leading-relaxed"
                            :class="[{ '!text-white !font-bold': isContrast }, getLetterSize(letraSize)]"
                            data-aos="fade-up" data-aos-delay="300">
                            Encuentra, descarga y comparte tus fotografías oficiales del evento.
                        </p>

                        <!-- Search Box - Glassmorphism + Interactive -->
                        <div class="max-w-xl mb-8 sm:mb-12" data-aos="fade-up" data-aos-delay="400">
                            <form @submit.prevent="submitSearch" class="relative group">
                                <!-- Glassmorphism container -->
                                <div class="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] 
                                    transition-all duration-500 group-hover:border-[#F57C00]/50 group-hover:shadow-[0_8px_32px_rgba(245,124,0,0.2)]
                                    overflow-hidden"
                                    :class="{ 
                                        '!bg-yellow-200/10 !border-yellow-300': isContrast,
                                        '!border-[#FFC107]/70 !shadow-[0_8px_32px_rgba(255,193,7,0.25)]': isSearchFocused
                                    }"
                                    @focusin="isSearchFocused = true"
                                    @focusout="isSearchFocused = false">
                                    
                                    <!-- Inner flex row for icon + input -->
                                    <div class="flex items-center flex-1">
                                        <!-- Search Icon with rotate animation on focus -->
                                        <div class="pl-4 sm:pl-5 pr-2 sm:pr-3 flex-shrink-0">
                                            <MagnifyingGlassIcon class="w-5 sm:w-6 h-5 sm:h-6 text-[#FFC107] transition-all duration-500"
                                                :class="{ 
                                                    '!text-yellow-200': isContrast,
                                                    'rotate-12 scale-110': isSearchFocused
                                                }" />
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

                                    <!-- Search Button with pulse animation -->
                                    <button type="submit"
                                        class="sm:relative mx-3 sm:mx-0 mb-3 sm:mb-0 sm:mr-2 sm:my-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#F57C00] to-[#D32F2F] 
                                            text-white font-extrabold text-xs sm:text-sm lg:text-base tracking-widest rounded-xl
                                            hover:from-[#FF9800] hover:to-[#E53935] 
                                            transition-all duration-300 transform hover:scale-105 active:scale-95
                                            shadow-[0_4px_20px_rgba(245,124,0,0.4)]
                                            hover:shadow-[0_6px_30px_rgba(245,124,0,0.6)]
                                            btn-pulse"
                                        :class="{ '!bg-yellow-200 !text-black !shadow-yellow-200/50': isContrast }">
                                        <span class="flex items-center gap-2">
                                            <MagnifyingGlassIcon class="w-4 h-4 sm:hidden" />
                                            BUSCAR
                                        </span>
                                    </button>
                                </div>
                            </form>

                            <!-- Helper text with quick-select dorsal chips -->
                            <div class="mt-2 sm:mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2 pl-2">
                                <span class="text-[10px] sm:text-xs text-gray-500">
                                    <span class="text-[#FFC107]" :class="{ '!text-yellow-200': isContrast }">Ejemplo:</span>
                                </span>
                                <button v-for="dorsal in suggestedDorsals" :key="dorsal"
                                    @click="form.dorsal = dorsal; submitSearch()"
                                    class="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full
                                        bg-white/10 border border-white/20 text-white/70
                                        hover:bg-[#F57C00]/20 hover:border-[#F57C00]/40 hover:text-white
                                        transition-all duration-300 transform hover:scale-105 active:scale-95
                                        cursor-pointer"
                                    :class="{ '!bg-yellow-200/20 !border-yellow-300/40 !text-yellow-200': isContrast }">
                                    #{{ dorsal }}
                                </button>
                            </div>
                        </div>

                        <!-- Benefits Bar with 3D hover effect -->
                        <div class="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 mb-4 sm:mb-6" data-aos="fade-up" data-aos-delay="500">
                            <div class="flex items-center gap-2 sm:gap-3 group cursor-default benefit-card">
                                <div class="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#F57C00]/20 to-[#FFC107]/20 border border-[#F57C00]/30 
                                    flex items-center justify-center group-hover:from-[#F57C00]/40 group-hover:to-[#FFC107]/40 group-hover:border-[#F57C00]/60 group-hover:shadow-lg group-hover:shadow-[#F57C00]/20
                                    transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1">
                                    <CameraIcon class="w-4 h-4 sm:w-6 sm:h-6 text-[#FFC107] transition-transform duration-500 group-hover:rotate-[-10deg]" />
                                </div>
                                <div>
                                    <p class="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFC107] transition-colors duration-300">Encuentra</p>
                                    <p class="text-[10px] sm:text-xs text-gray-400">tus fotos</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-2 sm:gap-3 group cursor-default benefit-card">
                                <div class="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#F57C00]/20 to-[#FFC107]/20 border border-[#F57C00]/30 
                                    flex items-center justify-center group-hover:from-[#F57C00]/40 group-hover:to-[#FFC107]/40 group-hover:border-[#F57C00]/60 group-hover:shadow-lg group-hover:shadow-[#F57C00]/20
                                    transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1">
                                    <ArrowDownTrayIcon class="w-4 h-4 sm:w-6 sm:h-6 text-[#FFC107] transition-transform duration-500 group-hover:translate-y-[2px]" />
                                </div>
                                <div>
                                    <p class="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFC107] transition-colors duration-300">Descarga</p>
                                    <p class="text-[10px] sm:text-xs text-gray-400">en alta calidad</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-2 sm:gap-3 group cursor-default benefit-card">
                                <div class="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#F57C00]/20 to-[#FFC107]/20 border border-[#F57C00]/30 
                                    flex items-center justify-center group-hover:from-[#F57C00]/40 group-hover:to-[#FFC107]/40 group-hover:border-[#F57C00]/60 group-hover:shadow-lg group-hover:shadow-[#F57C00]/20
                                    transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1">
                                    <ShareIcon class="w-4 h-4 sm:w-6 sm:h-6 text-[#FFC107] transition-transform duration-500 group-hover:rotate-12" />
                                </div>
                                <div>
                                    <p class="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFC107] transition-colors duration-300">Comparte</p>
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

                    <!-- Right side: Visual spacer -->
                    <div class="hidden lg:block lg:w-[45%] xl:w-[50%]"></div>

                </div>
            </div>

            <!-- Scroll Down Indicator -->
            <div class="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 sm:gap-2 animate-bounce-slow cursor-pointer"
                @click="document.getElementById('stats-section')?.scrollIntoView({ behavior: 'smooth' })">
                <span class="text-[8px] sm:text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium">Scroll</span>
                <ChevronDoubleDownIcon class="w-4 h-4 sm:w-5 sm:h-5 text-[#FFC107]/60" />
            </div>

            <!-- Bottom gradient fade to next section -->
            <div class="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-[#1a0a0a] to-transparent z-30"></div>

        </section>

        

        <!-- ============================================================ -->
        <!-- FEATURED EVENTS / CTA SECTION -->
        <!-- ============================================================ -->
        <section class="relative w-full py-16 sm:py-20 lg:py-24 bg-[#F2F2F2] overflow-hidden"
            :class="{ '!bg-black': isContrast }">
            
            <div class="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
                <div class="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
                    
                    <!-- Left: Image mockup -->
                    <div class="w-full lg:w-1/2" data-aos="fade-right">
                        <div class="relative">
                            <div class="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#F57C00]/30"></div>
                            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img src=""
                                    alt="Mujer Valiente 6K" 
                                    class="w-full h-64 sm:h-80 lg:h-96 object-cover"
                                    loading="lazy" />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                                    <span class="inline-block px-3 py-1 bg-[#FFC107]/90 text-black text-xs sm:text-sm font-bold rounded-full">
                                        #MujerValiente6K
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Content -->
                    <div class="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
                        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight"
                            :class="{ '!text-yellow-200': isContrast }">
                            ¿Participaste en la
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#F57C00] to-[#D32F2F]">
                                Mujer Valiente 6K
                            </span>?
                        </h2>
                        <p class="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
                            :class="{ '!text-white !font-bold': isContrast }">
                            Todos los participantes pueden encontrar, descargar y compartir sus fotos oficiales de la carrera. 
                            ¡Tu momento de gloria está a solo un dorsal de distancia!
                        </p>
                        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            <a href="#inicio"
                                class="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#F57C00] to-[#D32F2F] text-white font-extrabold text-sm sm:text-base tracking-wider rounded-xl
                                    hover:from-[#FF9800] hover:to-[#E53935] transition-all duration-300 transform hover:scale-105 active:scale-95
                                    shadow-[0_4px_20px_rgba(245,124,0,0.4)] hover:shadow-[0_6px_30px_rgba(245,124,0,0.6)]
                                    text-center btn-pulse">
                                BUSCAR MIS FOTOS
                            </a>
                            <a href="https://www.pereira.gov.co" target="_blank"
                                class="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 font-bold text-sm sm:text-base tracking-wider rounded-xl
                                    border-2 border-gray-200 hover:border-[#F57C00]/50 hover:text-[#F57C00]
                                    transition-all duration-300 transform hover:scale-105 active:scale-95
                                    text-center"
                                :class="{ '!bg-yellow-200 !text-black !border-yellow-200': isContrast }">
                                MÁS INFORMACIÓN
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </PageLayout>
</template>

<style scoped>
/* ============================================================ */
/* FLOATING ANIMATIONS FOR POLAROIDS */
/* ============================================================ */
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

/* ============================================================ */
/* PULSE ANIMATIONS FOR GLOW ORBS */
/* ============================================================ */
@keyframes pulse-slow {
    0%, 100% { opacity: 0.08; transform: scale(1); }
    50% { opacity: 0.15; transform: scale(1.05); }
}

@keyframes pulse-slower {
    0%, 100% { opacity: 0.08; transform: scale(1); }
    50% { opacity: 0.13; transform: scale(1.08); }
}

@keyframes pulse-medium {
    0%, 100% { opacity: 0.06; transform: scale(1); }
    50% { opacity: 0.12; transform: scale(1.03); }
}

.animate-pulse-slow {
    animation: pulse-slow 6s ease-in-out infinite;
}

.animate-pulse-slower {
    animation: pulse-slower 8s ease-in-out infinite;
}

.animate-pulse-medium {
    animation: pulse-medium 5s ease-in-out infinite;
}

/* ============================================================ */
/* BOUNCE ANIMATION FOR SCROLL INDICATOR */
/* ============================================================ */
@keyframes bounce-slow {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(8px); }
}

.animate-bounce-slow {
    animation: bounce-slow 2s ease-in-out infinite;
}

/* ============================================================ */
/* CSS PARTICLES (Speed/Dust effects) */
/* ============================================================ */
.particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #FFC107;
    border-radius: 50%;
    opacity: 0;
    animation: particleFloat 4s ease-in-out infinite;
}

.particle-1 { top: 20%; left: 10%; animation-delay: 0s; }
.particle-2 { top: 40%; left: 15%; animation-delay: 0.5s; width: 2px; height: 2px; }
.particle-3 { top: 60%; left: 8%; animation-delay: 1s; background: #F57C00; }
.particle-4 { top: 30%; left: 25%; animation-delay: 1.5s; width: 4px; height: 4px; }
.particle-5 { top: 70%; left: 20%; animation-delay: 2s; background: #F57C00; }
.particle-6 { top: 15%; left: 35%; animation-delay: 0.3s; width: 2px; height: 2px; }
.particle-7 { top: 50%; left: 30%; animation-delay: 0.8s; }
.particle-8 { top: 80%; left: 12%; animation-delay: 1.3s; background: #F57C00; width: 2px; height: 2px; }
.particle-9 { top: 25%; left: 5%; animation-delay: 1.8s; }
.particle-10 { top: 65%; left: 35%; animation-delay: 2.3s; width: 4px; height: 4px; background: #F57C00; }
.particle-11 { top: 45%; left: 5%; animation-delay: 0.6s; width: 2px; height: 2px; }
.particle-12 { top: 85%; left: 28%; animation-delay: 1.1s; }

@keyframes particleFloat {
    0% { transform: translateX(0) translateY(0) scale(0); opacity: 0; }
    20% { opacity: 0.6; transform: translateX(20px) translateY(-10px) scale(1); }
    40% { opacity: 0.4; transform: translateX(40px) translateY(-20px) scale(0.8); }
    60% { opacity: 0.3; transform: translateX(60px) translateY(-15px) scale(0.6); }
    80% { opacity: 0.1; transform: translateX(80px) translateY(-5px) scale(0.3); }
    100% { transform: translateX(100px) translateY(0) scale(0); opacity: 0; }
}

/* ============================================================ */
/* SPEED STREAK LINES */
/* ============================================================ */
.speed-streak {
    position: absolute;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.3), transparent);
    animation: streakMove 3s linear infinite;
    opacity: 0;
}

.streak-1 { top: 10%; width: 60px; left: -60px; animation-delay: 0s; }
.streak-2 { top: 30%; width: 80px; left: -80px; animation-delay: 0.7s; }
.streak-3 { top: 50%; width: 50px; left: -50px; animation-delay: 1.4s; }
.streak-4 { top: 65%; width: 70px; left: -70px; animation-delay: 2.1s; }
.streak-5 { top: 82%; width: 45px; left: -45px; animation-delay: 2.8s; }

@keyframes streakMove {
    0% { transform: translateX(0); opacity: 0; }
    10% { opacity: 0.6; }
    90% { opacity: 0.6; }
    100% { transform: translateX(calc(100vw + 100px)); opacity: 0; }
}

/* ============================================================ */
/* SPEED LINE ANIMATION (decorative diagonal) */
/* ============================================================ */
.speed-line {
    position: absolute;
    left: -10%;
    animation: speedLineSlide 4s linear infinite;
    opacity: 0;
}

@keyframes speedLineSlide {
    0% { transform: translateX(-10%); opacity: 0; }
    10% { opacity: 0.5; }
    50% { opacity: 0.3; }
    80% { opacity: 0; }
    100% { transform: translateX(110%); opacity: 0; }
}

/* ============================================================ */
/* RUNNER SVG ANIMATION */
/* ============================================================ */
.runner-container {
    animation: runnerRun 0.6s ease-in-out infinite;
}

.runner-svg {
    animation: runnerMove 8s linear infinite;
}

@keyframes runnerRun {
    0%, 100% { transform: translateY(0); }
    25% { transform: translateY(-3px); }
    50% { transform: translateY(0); }
    75% { transform: translateY(-2px); }
}

@keyframes runnerMove {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(100vw - 200px)); }
}

/* Runner limb animations */
:deep(.arm-left) {
    animation: swingArmLeft 0.6s ease-in-out infinite;
    transform-origin: 50px 42px;
}

:deep(.arm-right) {
    animation: swingArmRight 0.6s ease-in-out infinite;
    transform-origin: 50px 42px;
}

:deep(.leg-left) {
    animation: swingLegLeft 0.6s ease-in-out infinite;
    transform-origin: 50px 65px;
}

:deep(.leg-right) {
    animation: swingLegRight 0.6s ease-in-out infinite;
    transform-origin: 50px 65px;
}

:deep(.trail-1), :deep(.trail-2), :deep(.trail-3) {
    animation: trailFade 1s ease-out infinite;
}

:deep(.trail-2) { animation-delay: 0.3s; }
:deep(.trail-3) { animation-delay: 0.6s; }

@keyframes swingArmLeft {
    0%, 100% { transform: rotate(20deg); }
    50% { transform: rotate(-20deg); }
}

@keyframes swingArmRight {
    0%, 100% { transform: rotate(-20deg); }
    50% { transform: rotate(20deg); }
}

@keyframes swingLegLeft {
    0%, 100% { transform: rotate(-20deg); }
    50% { transform: rotate(20deg); }
}

@keyframes swingLegRight {
    0%, 100% { transform: rotate(20deg); }
    50% { transform: rotate(-20deg); }
}

@keyframes trailFade {
    0% { opacity: 0.4; transform: scale(1); }
    100% { opacity: 0; transform: scale(0.3); }
}

/* ============================================================ */
/* BUTTON PULSE EFFECT */
/* ============================================================ */
.btn-pulse {
    position: relative;
    overflow: hidden;
}

.btn-pulse::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn-pulse:active::after {
    width: 200%;
    height: 200%;
}

/* ============================================================ */
/* BADGE PULSE BORDER */
/* ============================================================ */
.badge-pulse {
    animation: badgeGlow 3s ease-in-out infinite;
}

@keyframes badgeGlow {
    0%, 100% { border-color: rgba(255, 255, 255, 0.2); }
    50% { border-color: rgba(255, 193, 7, 0.4); }
}

/* ============================================================ */
/* BENEFIT CARD 3D HOVER */
/* ============================================================ */
.benefit-card {
    perspective: 500px;
}

/* ============================================================ */
/* ENSURE OLD PARTICLES CONTAINER IS HIDDEN */
/* ============================================================ */
#aa_particles {
    display: none;
}

/* ============================================================ */
/* TILT CARD STYLES */
/* ============================================================ */
.tilt-card {
    will-change: transform;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
}

.main-title-gradient {
    background: linear-gradient(135deg, rgba(255, 224, 138, 0.95), rgba(245, 124, 0, 0.78), rgba(211, 47, 47, 0.62));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: left;
}

/* ============================================================ */
/* TABULAR NUMBERS FOR COUNTERS */
/* ============================================================ */
.tabular-nums {
    font-variant-numeric: tabular-nums;
}

</style>
