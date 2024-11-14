<script setup>
import IconSearch from '../icons/IconSearch.vue';
</script>

<template>
    <div class="searchBox">
        <input type="text" />
        <button>
            <IconSearch />
        </button>
    </div>
</template>

<style lang="scss" scoped>
.searchBox {
    @include flex;

    input {
        width: 330px;
        height: 30px;
        background: #ffffff;
        border-radius: 5px 0 0 5px;
        padding-left: 5px;
    }

    button {
        width: 30px;
        height: 30px;
        background: var(--searchButtonColor);
        border-radius: 0 5px 5px 0;
        @include flex($justifyContent: center, $alignItems: center);
        @include transition;
    }
}
</style>