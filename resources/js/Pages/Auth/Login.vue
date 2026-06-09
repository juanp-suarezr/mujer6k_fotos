<template>

    <Head title="Iniciar Sesión" />

    <GuestLayout>
        <Link href="/" class="flex items-center justify-center">
        <ApplicationLogo :isLogin=true class="fill-current text-gray-500" />
        </Link>

        <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Correo electronico" :class="[
                    isContrast ? '!text-yellow-200 font-bold' : '',
                    letraSize == -2 ? '!sm:text-[0.65rem] !text-[0.55rem]'
                        : letraSize == -1 ? '!sm:text-xs !text-[0.65rem]'
                            : letraSize == 1 ? '!sm:text-lg !text-sm'
                                : letraSize == 2 ? '!sm:text-xl !text-base' : '!sm:tex-base text-xs'
                ]" />
                <TextInput id="email" type="email" class="mt-1 block w-full"
                    :class="[isContrast ? '!text-yellow-200 !font-bold !bg-black' : '']" v-model="form.email" required
                    autofocus autocomplete="username" />
                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-3">
                <InputLabel for="password" value="Contraseña" :class="[
                    isContrast ? '!text-yellow-200 font-bold' : '',
                    letraSize == -2 ? '!sm:text-[0.65rem] !text-[0.55rem]'
                        : letraSize == -1 ? '!sm:text-xs !text-[0.65rem]'
                            : letraSize == 1 ? '!sm:text-lg !text-sm'
                                : letraSize == 2 ? '!sm:text-xl !text-base' : '!sm:tex-base text-xs'
                ]" />
                <TextInput id="password" type="password" class="mt-1 block w-full"
                    :class="[isContrast ? '!text-yellow-200 !font-bold !bg-black' : '']" v-model="form.password" required
                    autocomplete="current-password" />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="mt-4 flex justify-between">
                <label class="inline-flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember"
                        :class="[isContrast ? '!text-yellow-200 font-bold bg-black border-yellow-200' : '']" />
                    <span class="mx-2 text-sm text-gray-600" :class="[
                        isContrast ? '!text-yellow-200 font-bold' : '',
                        letraSize == -2 ? '!text-[0.65rem]'
                            : letraSize == -1 ? '!text-xs'
                                : letraSize == 1 ? '!text-base'
                                    : letraSize == 2 ? '!text-lg' : ''
                    ]">Recordarme</span>
                </label>

                <Link v-if="canResetPassword" :href="route('password.request')"
                    class="text-sm text-gray-600 underline hover:text-gray-900" :class="[
                        isContrast ? '!text-yellow-200 font-bold' : '',
                        letraSize == -2 ? '!text-[0.65rem]'
                            : letraSize == -1 ? '!text-xs'
                                : letraSize == 1 ? '!text-base'
                                    : letraSize == 2 ? '!text-lg' : ''
                    ]">
                ¿Olvidaste tu contraseña?
                </Link>
            </div>

            <div class="mt-6">
                <PrimaryButton class="w-full justify-center flex" :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing">
                    Iniciar Sesión
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>

<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import { ref, watch, inject } from 'vue';


defineProps({
    canResetPassword: Boolean,
    status: String,

});


const isContrast = ref(usePage().props.accesibilidad.contraste);
const letraSize = ref(usePage().props.accesibilidad.letra);

watch(() => usePage().props.accesibilidad.contraste, (newVal) => {
    isContrast.value = newVal;
    
});

watch(() => usePage().props.accesibilidad.letra, (newVal) => {
    letraSize.value = newVal;
    
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
    origin: usePage().props.origin,
    identificacion: usePage().props.identificacion,

});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>
