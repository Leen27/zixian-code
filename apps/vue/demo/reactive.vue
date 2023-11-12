<template>
    1
</template>
<script lang="ts" setup>
import { ref, reactive, effect } from 'vue-core-reactivity'

const a = ref(0)
const b = ref(0)
effect(() => b.value = a.value + 1)
a.value = 2
console.log(b.value)
</script>