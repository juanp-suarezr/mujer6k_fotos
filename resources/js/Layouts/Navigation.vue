<template>
    <div :class="$page.props.showingMobileMenu ? 'block' : 'hidden'" @click="$page.props.showingMobileMenu = false"
        class="fixed inset-0 z-20 bg-red-900 opacity-50 transition-opacity lg:hidden"></div>

    <div :class="$page.props.showingMobileMenu ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
        class="overflow-y-auto fixed inset-y-0 left-0 z-30 w-64 bg-gray-600 transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0">
        <div class="flex justify-center items-center mt-4">
            <div class="flex items-center justify-center">
                <img :src="imglogo_w" class="w-4/6" alt="">
            </div>
        </div>

        <nav class="mt-6">
            <nav-link :href="route('dashboard')" :active="route().current('dashboard')">
                <HomeIcon class="h-6 w-6 text-white" />
                <span class="mx-3">Inicio</span>
            </nav-link>

            <nav-link :href="route('eventos.index')" :active="route().current().includes('eventos')">
                <CalendarIcon class="h-6 w-6 text-white" />
                <span class="mx-3">Eventos</span>
            </nav-link>

            <SeparadorMenu>Recursos</SeparadorMenu>
            <nav-link :href="route('corredores.index')" :active="route().current().includes('corredores')">
                <UserGroupIcon class="h-6 w-6 text-white" />
                <span class="mx-3">Corredores</span>
            </nav-link>
            <nav-link :href="route('fotos.index')" :active="route().current().includes('fotos')">
                <CameraIcon class="h-6 w-6 text-white" />
                <span class="mx-3">Fotos</span>
            </nav-link>
        </nav>
    </div>
</template>

<script>
import NavLink from '@/Components/NavLink.vue';
import SeparadorMenu from "@/Components/SeparadorMenu.vue";
import imglogo_w from '/public/assets/img/logo_white.webp'
import { ref } from 'vue'
import { HomeIcon, UserGroupIcon, CalendarIcon, CameraIcon } from '@heroicons/vue/24/solid'

export default {
    components: {
        NavLink,
        SeparadorMenu,
        HomeIcon,
        UserGroupIcon,
        CalendarIcon,
        CameraIcon,
    },

    setup() {
        return {
            imglogo_w
        }
    },
}
</script>

<style scoped></style>
