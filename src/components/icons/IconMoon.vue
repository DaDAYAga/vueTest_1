<template>
    <svg viewBox="0 0 168 184">
        <g>
            <path
                d="M89.5,184c33.8,0,63.3-19.3,78.5-47.8C119.3,168,54.5,132.3,54.5,72c0-32.5,19.8-60.2,47.8-71 C48.9-7.2,0,35.7,0,92C0,142.8,40.1,184,89.5,184z"
            />
        </g>
    </svg>
</template>

<style lang="scss" scoped>
svg {
    width: 20px;
    height: 20px;
    opacity: 0;
    @include position(
        $position: absolute,
        $left: 50%,
        $top: 50%,
        $translateX: -50%,
        $translateY: -150%
    );
    @include transition;

    path {
        fill: #ffffff;
    }
}
</style>
