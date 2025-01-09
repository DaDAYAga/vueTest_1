<script setup>
import { ref } from 'vue';
import DarkModeButton from '../button/DarkModeButton.vue';

const open = ref(false);

const toggleSlideMenu = () => {
    open.value = !open.value;
};
</script>

<template>
    <div class="slideMenuBox">
        <button class="slideTrigger" @click="toggleSlideMenu" :class="{ open }">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div class="slideMenu" :class="{ active: open }">
            <DarkModeButton />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.slideMenuBox {
    @include position;
}

.slideTrigger {
    width: 20px;
    height: 14px;

    &.open {

        span {

            &:nth-of-type(1) {
                top: 50%;
                transform: translateY(-50%) rotate(45deg);
            }

            &:nth-of-type(2) {
                width: 0;
            }

            &:nth-of-type(3) {
                transform: rotate(-45deg);
                bottom: 50%;
                transform: translateY(50%) rotate(-45deg);
            }
        }
    }

    span {
        display: block;
        width: 100%;
        height: 2px;
        background: var(--linkColor);
        @include position($position: absolute, $top: 0, $left: 0);
        @include transition;

        &:nth-of-type(1) {
            top: 0;
        }

        &:nth-of-type(2) {
            top: 50%;
            transform: translateY(-50%);
        }

        &:nth-of-type(3) {
            top: unset;
            bottom: 0;
        }
    }
}

.slideMenu {
    background: var(--moduleBgColor);
    border-radius: 16px 0 16px 16px;
    opacity: 0;
    pointer-events: none;
    padding: 20px;
    @include position($position: absolute, $right: 0, $top: calc(100% + 20px), $translateY: -20px);
    @include transition;
    @include pseudoBefore {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent var(--moduleBgColor) transparent;
        top: -10px;
        right: 0;
        @include transition;
    };

    &.active {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
    }
}
</style>