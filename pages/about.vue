<template>
    <div>
        <h1>About Page</h1>
         <div>
             {{data}}
         </div>
    </div>
</template>

<script setup>
/*const { data: message } = await useFetch('/api/ninja?name=mario',
    {
        method: 'post',
        body:{ age: 30 }
    }
)*/
//const { data } = await useFetch('/api/ninja/')
const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>

</style>