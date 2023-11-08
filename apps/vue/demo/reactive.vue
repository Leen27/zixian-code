<template>
    A0: {{ A0 }}
</template>
<script setup>
import { ref } from 'vue-core-reactivity'

const A0 = ref(0)

// triggers the effect
A0.value = 2
</script>