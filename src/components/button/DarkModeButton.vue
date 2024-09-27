<script setup>
import { ref } from 'vue'
import IconMoon from '../icons/IconMoon.vue'
import IconSun from '../icons/IconSun.vue'
// 日夜模式
const isDark = ref(false)

const changeMode = () => {
    isDark.value = !isDark.value
    document.querySelector('html').setAttribute('dark', isDark.value)
}
</script>

<template>
    <button :class="['darkButton', { isDark: isDark }]" @click="changeMode">
        <i>
            <IconMoon />
            <IconSun />
        </i>
    </button>
</template>

<style lang="scss" scoped>
.darkButton {
    width: 70px;
    height: 40px;
    border-radius: 99px;
    background: var(--darkButtonColor);
    padding: 0 5px;
    @include transition(0.3s);

    &.isDark {
        i {
            margin: 0;

            :deep(svg) {
                &:nth-of-type(1) {
                    transform: translate(-50%, -50%);
                    opacity: 1;
                }
                &:nth-of-type(2) {
                    transform: translate(-50%, 100%);
                    opacity: 0;
                }
            }
        }
    }

    i {
        display: block;
        width: 30px;
        height: 30px;
        background: var(--darkButtonIconColor);
        border-radius: 50%;
        margin-left: 30px;
        overflow: hidden;
        @include position;
        @include transition(0.3s);
    }
}
</style>
