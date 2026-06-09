<template>
    <div v-show="message">
        <p class="text-[8px] md:text-sm text-red-600" :class="[
            letraSize == -2 ? '!text-[6px] !md:text-[8px]'
                : letraSize == -1 ? '!text-[7px] !md:text-xs'
                    : letraSize == 1 ? '!text-xs !md:text-base'
                        : letraSize == 2 ? '!text-sm !md:text-lg' : ''
        ]">
            {{ message }}
        </p>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { usePage } from '@inertiajs/vue3';

defineProps(['message']);

const letraSize = ref(usePage().props.accesibilidad.letra);
watch(() => usePage().props.accesibilidad.letra, (newVal) => {
    letraSize.value = newVal;
});

</script>
