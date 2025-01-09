<script setup>
import IconLogo from '../components/icons/IconLogo.vue';
import { useThemeStore } from '@/stores/themeStore';

const themeStore = useThemeStore();
</script>

<template>
    <div class="about">
        <h1>This is an about page</h1>
        <IconLogo :dark="themeStore.isDark" />
    </div>
</template>

<style scoped></style>
