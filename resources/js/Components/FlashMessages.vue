<template>
    <div v-if="$page.props.flash?.success" class="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
        {{ $page.props.flash.success }}
    </div>
    <div v-if="$page.props.flash?.error" class="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
        {{ $page.props.flash.error }}
    </div>
    <div v-if="$page.props.flash?.message" class="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
        {{ $page.props.flash.message }}
    </div>
    <div v-if="$page.props.flash?.status" class="mb-6 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg text-sm">
        {{ $page.props.flash.status }}
    </div>
</template>