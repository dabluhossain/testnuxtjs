<template>
    <div>
        <h1>Products Layout</h1>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/products" class="font-bold">Products</NuxtLink>
            </nav>
        </header>
        <div class="container mx-auto p-4 ">
            <slot></slot>
        </div>
        
        <div class="container mx-auto p-4 flex justify-between border-t-2">
        <footer >
            <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                </ul>
        </footer>
    </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active{
        color:#12b488;
    }
</style>