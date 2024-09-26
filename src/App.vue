<script setup>
import { ref } from 'vue'

import { RouterLink, RouterView } from 'vue-router'
import Header from './components/HeaderView.vue'
</script>

<template>
    <div class="outerWrap">
        <Header />

        <!-- <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav> -->
        <RouterView />
    </div>
</template>

<style scoped></style>
