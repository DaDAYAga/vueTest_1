<script setup>
import { RouterLink } from 'vue-router'
import { useThemeStore } from '@/stores/themeStore';
import DarkModeButton from './button/DarkModeButton.vue'
import IconLogo from './icons/IconLogo.vue';
import SearchInput from './inputs/SearchInput.vue';

// 日夜模式
const themeStore = useThemeStore();

const toggleMode = () => {
    themeStore.toggleDarkMode();
    document.querySelector('html').setAttribute('dark', themeStore.isDark);
}
</script>

<template>
    <header>
        <div class="wrapper">
            <div class="leftWrap">
                <IconLogo :dark="themeStore.isDark" />
                <SearchInput />
            </div>
            <div class="rightWrap">
                <nav class="headerList">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </nav>
                <DarkModeButton :dark="themeStore.isDark" @click="toggleMode" />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 110px;
    // background: url('../assets/images/Header_BG.jpg') no-repeat top center;
    // background-size: cover;
    background: var(--headerColor);
    border-bottom: solid 2px var(--lineColor);
    @include transition;
    @extend .shadowInset;

    .wrapper {
        max-width: 1250px;
        height: 100%;
        margin: 0 auto;
        @include flex($justifyContent: space-between);

        .leftWrap {
            @include flex;

            :deep(.logo) {
                margin-right: 20px;
            }

            :deep(.searchBox) {
                margin-top: 10px;
            }
        }
    }
}
</style>
