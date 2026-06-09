<template>
    <input class="block mt-1 w-full rounded-md form-input focus:border-sky-600" :class="[
            letraSize == -2 ? '!sm:text-xs'
                : letraSize == -1 ? '!text-sm'
                    : letraSize == 1 ? '!text-lg'
                        : letraSize == 2 ? '!text-xl' : ''
        ]" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="input">
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { usePage } from '@inertiajs/vue3';

defineProps(['modelValue']);

defineEmits(['update:modelValue']);

const input = ref(null);

const letraSize = ref(usePage().props.accesibilidad.letra);
watch(() => usePage().props.accesibilidad.letra, (newVal) => {
    letraSize.value = newVal;
    console.log(letraSize.value);
});

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});
</script>
