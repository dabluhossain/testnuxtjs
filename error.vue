<template>
    <div class="mt-7 max-w-sm mx-auto text-center card"> 
        <p class="mt-7 text-7xl font-bold">{{error.status}}</p>
        <p class="mt-7 text-6xl">Ooop.</p>
        <p class="mt-7">{{error.message}}</p>
        <button class="btn my-7" @click="handleClearerror"> Go Home....</button>
        </div>
</template>

<script setup>
defineProps(['error'])
const handleClearerror = ()=>clearError({redirect:'/'})
</script>

<style scoped>

</style>