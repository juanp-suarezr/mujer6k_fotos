<template>
    <Link
        class="inline-flex whitespace-nowrap items-center px-4 py-2 bg-sky-700 border border-gray-300 rounded-md font-semibold text-xs text-white uppercase tracking-widest shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150">
    <slot />
    </Link>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { onMounted, ref, watch } from 'vue';
import { usePage } from '@inertiajs/vue3';

const letraSize = ref(usePage().props.accesibilidad.letra);
watch(() => usePage().props.accesibilidad.letra, (newVal) => {
    letraSize.value = newVal;
});

defineProps({
    type: {
        type: String
    },
});
</script>
