<script setup>
import imglogo from '/public/assets/img/logo.webp'
import imglogoWhite from '/public/assets/img/logo_white.webp'
import { ref, watch, inject } from 'vue';
import { usePage } from '@inertiajs/vue3';

defineProps(['isLogin']);

const isContrast = ref(usePage().props.accesibilidad.contraste);
watch(() => usePage().props.accesibilidad.contraste, (newVal) => {
    isContrast.value = newVal;
});


</script>
<template>
    <img v-if="isLogin && isContrast" :src="imglogoWhite" class="w-1/2" alt="">
    <img v-else :src="imglogo" class="w-1/2" alt="">
</template>
