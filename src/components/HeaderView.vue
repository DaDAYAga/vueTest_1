<script setup>
import DarkModeButton from './button/DarkModeButton.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <div class="wrapper">
            <nav class="headerList">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
            <DarkModeButton />
        </div>
    </header>
</template>

<style lang="scss" scoped></style>
