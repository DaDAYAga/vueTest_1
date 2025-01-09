<script setup></script>

<template>
    <div class="userInfoBox">
        <button class="login">
            <span>我要登入</span>
        </button>
        <span class="line">/</span>
        <button class="register">
            <span>註冊</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.userInfoBox {
    @include flex;

    button {
        color: var(--linkColor);
        font-size: 14px;
        font-weight: bold;
        @include transition;

        &:hover {
            color: var(--linkHoverColor);
        }
    }

    .line {
        display: block;
        color: var(--linkColor);
        font-size: 14px;
        padding: 0 5px;
        margin-top: -1px;
        @include transition;
    }
}
</style>
