<script setup>
import { ref } from 'vue'

// 日夜模式
const isDark = ref(false)

const changeMode = () => {
    isDark.value = !isDark.value
    document.querySelector('html').setAttribute('dark', isDark.value)
}
</script>

<template>
    <header>
        <div class="wrapper">
            <button @click="changeMode">change</button>
        </div>
    </header>
</template>

<style lang="scss" scoped></style>
