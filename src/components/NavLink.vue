<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
    position: {
        type: String,
        default: 'header',
        validator: (value) => {
            return ['header', 'sideMenu', 'footer'].includes(value)
        },
    }
})

const navClass = computed(() => {
    return {
        header: 'headerList',
        sideMenu: 'sideMenuList',
        footer: 'footerList',
    }[props.position]
})
</script>

<template>
    <nav :class="navClass">
        <RouterLink to="/android">Android</RouterLink>
    </nav>
</template>

<style lang="scss" scoped>
.headerList {
    
}
</style>
