<template>
  <div ref="zixianRef" class="demo" />
</template>
<script lang="ts" setup>
import { ref, reactive, effect } from 'vue-core-reactivity'
import {onMounted } from 'vue'
import JSON_Demo1 from './demo1.json'
import { createDrama, Zixian, createObjectActor, createZixian, createObjectInfoPanel } from 'zixian'

const a = ref(0)
const b = ref(0)
effect(() => b.value = a.value + 1)
a.value = 2
console.log(b.value)

const zixianRef = ref<HTMLElement | null>(null)

onMounted(() => {
    if (!zixianRef.value) {
        throw new Error('Container dom is null')
    }
    const zx = createZixian(zixianRef.value)

    const pixelSizeX = zixianRef.value.clientWidth / 1000
    const pixelSizeY = zixianRef.value.clientHeight / 1000

    const windowData = {
        width: zixianRef.value.clientWidth,
        height: zixianRef.value.clientWidth,
    }
    const objectPanel = createObjectInfoPanel({
        pixelSizeX,
        width: windowData.width,
        height: windowData.height
    })
    zx?.gui.addChild(objectPanel)


    // if (!zx.renderer) return
    // const node = createObjectActor()
    // zx.gui.addChild(node)
    // const drama = createDrama<{
    //     position: {
    //         x: number
    //         y: number
    //     }
    // }>(JSON_Demo1)
    // drama.play('Sheet 1', 'Node', {
    //     position: {
    //         x: 0,
    //         y: 0
    //     }
    // }, (obj) => {
    //     node.x = obj.position.x
    //     node.y = obj.position.x
    //     // console.log(obj.position, 'obj.position')
    // })
})
</script>
<style>
.demo {
    width: 100%;
    height: 600px;
}
</style>
