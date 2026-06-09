<template>
    <div class="flex h-screen items-center justify-center bg-option1 px-6" :class="{ '!bg-gray-800': HandleContrast, '!h-full': isRegister }">
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
                                viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
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
        <div class="w-full rounded-md p-6 shadow-md z-20"
            :class="[isRegister ? 'max-w-4xl' : 'max-w-sm ', HandleContrast ? 'bg-black' : 'bg-white']">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, inject } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { useToast } from 'vue-toast-notification';

defineProps(['isRegister']);
const $toast = useToast();

const HandleContrast = ref(usePage().props.accesibilidad.contraste);
const HandleLetra = ref(usePage().props.accesibilidad.letra);
const HandleActivated = ref('');

const toggleContrast = () => {
    HandleContrast.value = !HandleContrast.value;
    console.log(HandleContrast.value);
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

<style scoped>
.p-tooltip {
    background: #3366cc;
}
</style>
