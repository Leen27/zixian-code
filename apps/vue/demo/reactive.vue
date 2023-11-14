<template>
    <div ref="zixianRef" class="demo" />
</template>
<script lang="ts" setup>
import { ref, reactive, effect } from 'vue-core-reactivity'
import { createPlayer } from 'zixian'
import {onMounted } from 'vue'
const a = ref(0)
const b = ref(0)
effect(() => b.value = a.value + 1)
a.value = 2
console.log(b.value)

const zixianRef = ref(null)

onMounted(() => {
    if(!zixianRef.value) return
    createPlayer(zixianRef.value)
})
</script>
<style>
.demo {
    width: 100%;
    height: 400px;
}
</style>