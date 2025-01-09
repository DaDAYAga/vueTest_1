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
        <ul>
            <li>
                <RouterLink to="/android">Android</RouterLink>
            </li>
            <li>
                <RouterLink to="/ios">iOS</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.headerList {
    
    ul {
        @include flex;

        li {
            border-right: solid 1px var(--linkColor);
            padding-right: 10px;
            margin-right: 10px;

            &:last-child {
                border: none;
                padding: 0;
                margin: 0;
            }

            a {
                color: var(--linkColor);
                font-size: 13px;
                
                &:hover {
                    color: var(--linkHoverColor);
                }
            }
        }
    }
}
</style>
