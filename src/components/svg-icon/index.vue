<template>
    <svg :style="svgStyle">
        <use :xlink:href="iconNames" :fill="color"></use>
    </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface SvgInter {
    width: string,
    height: string
}

const props = defineProps({
    iconName: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: '16px'
    },
    height: {
        type: String,
        default: '16px'
    }
});

const iconNames = computed(():string => {
    return `#icon-${props.iconName}`;
});

const svgStyle = computed((): SvgInter => {
    return {
        width: props.width,
        height: props.height,
    };
});
</script>

<style scoped lang="less">
svg {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>