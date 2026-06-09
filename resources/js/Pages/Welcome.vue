<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import { ref, onMounted, inject, watch } from "vue";
import PageLayout from '@/Layouts/PageLayout.vue';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { WifiIcon, ComputerDesktopIcon, AcademicCapIcon, RocketLaunchIcon } from '@heroicons/vue/24/solid';
import VanillaTilt from 'vanilla-tilt';

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


//IMAGEN
const getImageUrl = (imageName) => {
    // Si las imágenes están almacenadas en la carpeta public/images, la ruta sería algo como esto:
    return `/storage/uploads/categorias/${imageName}`;
};

const form = useForm({
    correo: '',
});

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


const particlesContainer = ref(null);

onMounted(() => {
    if (window.particlesJS) {
        window.particlesJS('aa_particles', {
            particles: {
                number: {
                    value: 120,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#FFBA00'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#FFBA00'
                    },
                    polygon: {
                        nb_sides: 8
                    },

                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ED1C24',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'window', // Detectar eventos en la ventana completa
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 150,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 8
                    },
                    remove: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // Inicializar VanillaTilt en la imagen
    const imageElement = document.querySelector('.tilt-image');
    if (imageElement) {
        VanillaTilt.init(imageElement, {
            max: 25,
            speed: 50,
            glare: true,
            "max-glare": 0.5,
        });
    }

});

</script>

<template>

    <Head title="Home" />

    <PageLayout>

        <!-- Banner de pantalla completa -->
        <div id="inicio" class="w-full h-screen overflow-hidden">
            <div class="aa_sec flex items-center justify-center">
                <div class="aa_txt text-center">
                    <div class="aa_inner" :class="letraSize == -2 ? 'sm:text-2xl text-xl'
                        : letraSize == -1 ? 'sm:text-4xl text-2xl'
                            : letraSize == 1 ? 'sm:text-[4rem] text-4xl'
                                : letraSize == 2 ? 'sm:text-[5rem] text-4xl' : 'sm:text-[3rem] text-4xl'">
                        <span class="font-bold p-2 bg-primary text-white">SECRETARÍA</span>
                        <div class="mt-2 sm:mt-5 md:mt-6">
                            
                            <span class="font-bold p-2 bg-amarillo text-white">TIC</span>
                        </div>
                        <h1 class="px-12 sm:px-8 md:px-16 text-parrafo mt-4 sm:mt-6 font-bold italic" :class="[{ '!text-yellow-200': isContrast },
                        letraSize == -2 ? 'sm:text-lg text-xs'
                            : letraSize == -1 ? 'sm:text-xl text-sm'
                                : letraSize == 1 ? 'sm:text-4xl text-base'
                                    : letraSize == 2 ? 'sm:text-6xl text-base' : 'sm:text-2xl text-base'
                        ]">
                            Aprende, conéctate y haz de la tecnología tu aliada.
                        </h1>
                    </div>
                    <!-- <div class="mt-8 z-30">
                        <Link href="/capacitaciones"
                            class="bg-primary text-white font-bold py-2 px-4 z-30 rounded mr-2 cursor-pointer text-2xl">
                        Capacitaciones 
                        </Link>
                        <Link href="/register" class="bg-primary text-white font-bold py-2 px-4 rounded text-2xl">
                        Registro
                        </Link>
                    </div> -->
                </div>
            </div>
            <div ref="particlesContainer" id="aa_particles" :class="{ '!bg-black': isContrast }"></div>

        </div>

        <!-- 2 parte -->
        <div class="w-full overflow-hidden px-6 bg-gradient-to-b from-option2 to option1 text-parrafo"
            data-aos="fade-up"
            :class="{ '!bg-gradient-to-b !from-black to-black !text-yellow-200 font-bold': isContrast }">
            <!-- texto e imagen -->
            <div class="flex flex-col md:flex-row md:grid grid-cols-8 gap-4 mt-8">
                <!-- texto -->
                <div class="col-span-3 flex justify-center items-center px-6 mb-4" :class="getLetterSize(letraSize)">
                    Transformamos comunidades a través del acceso al conocimiento y la tecnología.
                </div>
                <!-- imagen -->
                <div class="col-span-5 flex justify-center items-center m-auto px-4">
                    <!-- <figure>
                        <img class="w-full rounded-xl shadow-xl tilt-image" :src="puntoVive" alt="imagen de espacio digital"
                            title="Punto vive digital">
                        <figcaption lang="es" class="hidden">Esta es una imagen del punto vive digital Lucy Tejada de
                            Pereira</figcaption>
                    </figure> -->
                </div>
            </div>
        </div>

        <section class="section1 overflow-hidden" data-aos="fade-up">
            <svg class="curve" viewBox="0 0 370.417 79.375">
                <path class="wave"
                    d="M-1.301 51.894C141.54 5.807 159.612 38.111 226.846 62.2c90.74 32.51 149.712-33.492 149.712-33.492v59.541H-1.302z"
                    fill="#C20E1A" fill-rule="evenodd" />
            </svg>

        </section>




    </PageLayout>

</template>

<style scoped>
#aa_particles {
    width: 100%;
    height: 100vh;
    z-index: 0;
    background: #F2F2F2;
    /* Adjust as needed */
}

.aa_sec {
    position: absolute;
    top: 12vb;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    /* Asegúrate de que esté por encima del contenedor de partículas */
}

.aa_txt {
    color: #ffffff;
    /* Color del texto */
}
</style>
