<script setup>
import { useThemeStore } from '@/stores/themeStore';
import NavLink from './NavLink.vue';
import LoginAndRegisterButton from './user/LoginAndRegister.vue';
import UserAvatar from './user/UserAvatar.vue';
import IconLogo from './icons/IconLogo.vue';
import SearchInput from './inputs/SearchInput.vue';
import SlideMenu from './slideMenu/SlideMenu.vue';

// 日夜模式
const themeStore = useThemeStore();
</script>

<template>
    <header>
        <div class="wrapper">
            <div class="leftWrap">
                <IconLogo :dark="themeStore.isDark" />
                <SearchInput />
            </div>
            <div class="rightWrap">
                <div class="topBox">
                    <UserAvatar />
                    <LoginAndRegisterButton />
                    <SlideMenu />
                </div>
                <NavLink position="header" />
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

        .rightWrap {
            height: 100%;
            padding: 10px 0;
            @include flex($flexDirection: column, $justifyContent: space-between, $alignItems: flex-end);

            .topBox {
                @include flex($alignItems: center);

                :deep(.userAvatar) {
                    margin-right: 30px;
                    @include position;
                    @include pseudoBefore() {
                        width: 1px;
                        height: 80%;
                        background: var(--linkColor);
                        @include position($position: absolute, $right: -18px, $top: 50%, $translateY: -50%);
                    };
                }

                :deep(.slideMenuBox) {
                    margin-left: 20px;
                }
            }
        }
    }
}
</style>
