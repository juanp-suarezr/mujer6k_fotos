<template>

    <div class="flex flex-col overflow-x-hidden bg-option1" :class="{ '!bg-black': HandleContrast }">

        <div class="fixed top-64 w-screen" style="z-index: 50; pointer-events: none;">
            <div class="xl:w-[5%] sm:w-[6%] w-[10%] sm:ml-[95%] ml-[90%]">
                <div class="bg-azul w-full py-4 sm:rounded-tl-xl sm:rounded-bl-xl rounded-tl-md rounded-bl-md"
                    style="pointer-events: auto;">
                    <!-- contraste -->
                    <button v-tooltip.center="{ value: 'Contraste', autoHide: false }" @click="toggleContrast"
                        class="flex w-auto py-2 lg:px-4 px-2" :class="{ 'bg-[#3366cc]': HandleContrast }">
                        <span
                            class="lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 512 512">
                                <path
                                    d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                            </svg>
                        </span>
                    </button>
                    <!-- Reducir texto -->
                    <button v-tooltip.center="{ value: 'Reducir letra', autoHide: false }"
                        @click="toggleLetra(HandleLetra - 1, 'reducir')" class="flex w-full py-2 lg:px-4 px-2"
                        :class="{ 'bg-[#3366cc]': HandleActivated == 'reducir' && !HandleContrast }">
                        <span
                            class="lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full">
                            <p class="font-extrabold text-xs lg:text-base">A<sup>-</sup></p>
                        </span>
                    </button>
                    <!-- default texto -->
                    <button v-tooltip.center="{ value: 'Restablecer letra', autoHide: false }"
                        @click="toggleLetra(0, 'default')" class="flex w-full py-2 lg:px-4 px-2"
                        :class="{ 'bg-[#3366cc]': HandleActivated == 'default' && !HandleContrast }">
                        <span
                            class="lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full">
                            <p class="font-extrabold text-xs lg:text-base">A<sup>n</sup></p>
                        </span>
                    </button>
                    <!-- Aumentar texto -->
                    <button v-tooltip.center="{ value: 'Aumentar letra', autoHide: false }"
                        @click="toggleLetra(HandleLetra + 1, 'aumentar')" class="flex w-full py-2 lg:px-4 px-2"
                        :class="{ 'bg-[#3366cc]': HandleActivated == 'aumentar' && !HandleContrast }">
                        <span
                            class="lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full">
                            <p class="font-extrabold text-xs lg:text-base">A<sup>+</sup></p>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <header class="w-full py-2 ps-8 flex bg-[#3366cc]">
            <a class="flex w-5/6 sm:w-[20%] md:w-[10%] z-20" href="https://www.gov.co/" target="_blank">
                <figure>
                    <img class="w-full sm:w-5/6" :src="logoGobierno" alt="imagen de logo" title="Gobierno colombiano">
                    <figcaption lang="es" class="hidden">Esta es una imagen del logo del gobierno actual de colombia
                    </figcaption>
                </figure>
            </a>
        </header>
        <nav class="w-full h-full bg-option2 py-2 text-xl sm:text-2xl text-parrafo z-20" :class="[
            !home ? 'hidden' : '',    
            { '!text-yellow-200 font-bold !bg-black': HandleContrast },
            HandleLetra == -2 ? '!text-base !sm:text-lg'
                : HandleLetra == -1 ? '!text-lg !sm:text-xl'
                    : HandleLetra == 1 ? '!text-2xl !sm:text-4xl'
                        : HandleLetra == 2 ? '!text-4xl !sm:text-6xl' : ''
        ]">
            <div class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex w-full justify-between items-center">
                    <div class="flex-shrink-0 sm:w-1/4 w-3/6 p-4">
                        <a href="/Welcome" class="text-white text-2xl font-semibold">
                            <figure>
                                <img v-if="HandleContrast" class="w-full sm:w-5/6" :src="logoBlanco"
                                    alt="imagen de logo" title="Alcaldía de Pereira">
                                <img v-else class="w-full sm:w-5/6" :src="logo" alt="imagen de logo"
                                    title="Alcaldía de Pereira">
                                <figcaption lang="es" class="hidden">Esta es una imagen del logo de la alcaldía de
                                    Pereira
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div class="hidden md:block">
                        <ul class="flex space-x-4">

                            <!-- <li><a :href="route('puntos.index')" :class="[{ 'underline': route().current('puntos') },
                            { '!text-yellow-200 font-bold': HandleContrast },

                            ]" class="text-parrafo cursor border-r-2 border-l-2 border-secondary px-2 hover:underline">Puntos</a>
                            </li> -->



                            <li><a :href="route('register')"
                                    :class="[{ 'underline': route().current('register') }, { '!text-yellow-200 font-bold': HandleContrast }, { '!text-yellow-200 font-bold': HandleContrast }]"
                                    v-tooltip.bottom="{ value: 'Registro de ingreso al punto', autoHide: false }"
                                    class="text-parrafo cursor hover:underline border-r-2 border-secondary pe-2">Registro</a>
                            </li>

                            <li><a :href="route('dashboard')" v-if="$page.props.auth.user"
                                    :class="[{ 'underline': route().current('dashboard') }, { '!text-yellow-200 font-bold': HandleContrast }, { '!text-yellow-200 font-bold': HandleContrast }]"
                                    v-tooltip.bottom="{ value: 'regresar al dashboard', autoHide: false }"
                                    class="text-parrafo cursor hover:underline border-r-2 border-secondary pe-2">Dashboard</a>
                            </li>

                        </ul>
                    </div>
                    <div class="md:hidden z-20">
                        <!-- Mobile menu button -->
                        <button class="text-parrafo hover:text-secondary focus:outline-none"
                            @click="isMobileMenuOpen = !isMobileMenuOpen"
                            :class="[{ '!text-yellow-200 font-bold': HandleContrast }]">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Mobile menu -->
            <div v-if="isMobileMenuOpen" class="md:hidden">
                <ul class="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                    <li>
                        <a :href="route('register')"
                            :class="[{ 'underline': route().current('register') }, { '!text-yellow-200 font-bold': HandleContrast }]"
                            class="block text-parrafo hover:underline border-b-2 border-secondary py-2">Registro</a>
                    </li>
                    <li>
                        <a :href="route('dashboard')" v-if="$page.props.auth.user"
                            :class="[{ 'underline': route().current('dashboard') }, { '!text-yellow-200 font-bold': HandleContrast }]"
                            class="block text-parrafo hover:underline border-b-2 border-secondary py-2">Dashboard</a>
                    </li>
                    <!-- Añadir más elementos de menú aquí si es necesario -->
                </ul>
            </div>

        </nav>

        <main class="flex-1 overflow-y-auto overflow-x-hidden bg-light text-black">

            <slot />

        </main>

        <footer class="px-2 bg-option2/90 text-parrafo flex flex-col py-6"
            :class="{ '!bg-black !text-white': HandleContrast }">
            <div class="container mx-auto flex flex-wrap items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center flex-shrink-0 mr-6 w-1/6">
                    <a href="/" class="w-full">
                        <figure>
                            <img v-if="HandleContrast" class="w-full" :src="logoBlanco" alt="imagen de logo"
                                title="Alcaldía de Pereira">
                            <img v-else class="w-full" :src="logo" alt="imagen de logo" title="Alcaldía de Pereira">
                            <figcaption lang="es" class="hidden">Esta es una imagen del logo de la alcaldía de
                                Pereira
                            </figcaption>
                        </figure>
                    </a>
                </div>
                <!-- Redes Sociales -->
                <div class="flex justify-center items-center space-x-4 text-primary">
                    <a href="https://www.instagram.com/alcaldiadepereira/" target="_blank"
                        class="hover:text-parrafo transition duration-300">
                        <font-awesome-icon :icon="faInstagram" size="xl" />
                    </a>
                    <a href="https://www.facebook.com/AlcaldiaDePereira/" target="_blank"
                        class="hover:text-parrafo transition duration-300">
                        <font-awesome-icon :icon="faFacebook" size="xl" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCAFZZcG6RI0gw5DkrT6kMSQ/videos" target="_blank"
                        class="hover:text-parrafo transition duration-300">
                        <font-awesome-icon :icon="faYoutube" size="xl" />
                    </a>

                </div>

                <div>
                    <a href="#inicio" class="text-primary hover:text-parrafo transition duration-300">
                        <ArrowUpCircleIcon class="w-12 animate-bounce" />
                    </a>
                </div>
            </div>
            <div class="container px-4 mt-8">
                <ul class="custom-list space-y-2">
                    
                </ul>
            </div>

        </footer>

        <div class="w-full py-4 ps-8 flex bg-[#3366cc]">
            <a class="flex w-5/6 sm:w-[25%] md:w-[15%]" href="https://www.gov.co/" target="_blank">
                <figure>
                    <img class="w-full sm:w-5/6" :src="logoGobierno" alt="imagen de logo" title="Gobierno colombiano">
                    <figcaption lang="es" class="hidden">Esta es una imagen del logo del gobierno actual de colombia
                    </figcaption>
                </figure>
            </a>
        </div>

    </div>
</template>

<script setup>
import logo from '../../../public/assets/img/logo.webp';
import logoBlanco from '../../../public/assets/img/logo_white.webp';
import logoGobierno from '../../../public/assets/img/gobierno.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUpCircleIcon } from '@heroicons/vue/24/solid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { usePage } from '@inertiajs/vue3';
import { ref, watch, inject } from 'vue';
import { useToast } from 'vue-toast-notification';

const props = defineProps({
    home: {
        type: Boolean,
        default: false,
    }
});


const $toast = useToast();

AOS.init();

const HandleContrast = ref(usePage().props.accesibilidad.contraste);
const HandleLetra = ref(usePage().props.accesibilidad.letra);
const HandleActivated = ref('');
// Variable para manejar el estado del menú móvil
const isMobileMenuOpen = ref(false);

const toggleContrast = () => {
    HandleContrast.value = !HandleContrast.value;
    usePage().props.accesibilidad.contraste = HandleContrast.value;
}

const toggleLetra = (num, estado) => {

    if (num >= 2) {
        HandleLetra.value = 2;
        let instance = $toast.open({
            message: "Limite de aumento de letra alcanzado",
            type: 'warning',
            position: 'top-right',
            duration: 4000,
            pauseOnHover: true,

        });
    } else if (num <= -2) {
        HandleLetra.value = -2;
        let instance = $toast.open({
            message: "Limite de reducción de letra alcanzado",
            type: 'warning',
            position: 'top-right',
            duration: 4000,
            pauseOnHover: true,

        });
    } else {
        HandleLetra.value = num;
    }

    HandleActivated.value = estado;
    usePage().props.accesibilidad.letra = HandleLetra.value;
}

</script>

<style>
body {
    font-family: "Montserrat", sans-serif;
    min-height: 100%;
    text-align: justify;
    min-width: 100%;
    overflow-x: hidden !important;
}

ul.custom-list {
    list-style-type: disc;
    padding-left: 20px;
    margin-top: 10px;
}

.custom-list li {
    margin-bottom: 10px;
    font-size: 1rem;
    /* Puedes ajustar esto según tus necesidades */
}

.custom-list li span {
    display: block;
}
</style>

<style scoped>
.isolation-isolate {
    isolation: isolate;
}
</style>
