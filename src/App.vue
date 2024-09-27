<script setup>
import { RouterView } from 'vue-router'
import Header from './components/HeaderView.vue'
</script>

<template>
    <div class="outerWrap">
        <Header />
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
.outerWrap {
    max-width: 1920px;
    margin: 0 auto;
}
</style>
