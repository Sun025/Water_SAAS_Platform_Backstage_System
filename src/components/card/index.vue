<template>
    <div class="card" :style="{ width: props.width, height: props.height }">
        <div class="card_header" :style="{ backgroundColor: props.backgroundColor }">
            <el-text class="card_header_title">{{ props.title }}</el-text>
            <slot name="subTitle"></slot>
            <slot></slot>
        </div>
        <div class="card_main">
            <slot name="chart"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    backgroundColor: {
        type: String,
        default: 'red'
    },
    width: {
        type: String
    },
    height: {
        type: String
    },
    title: {
        type: String
    }
});
</script>

<style scoped lang="less">
.card {
    border-radius: 8px 8px 0 0;
    overflow: hidden;

    .card_header {
        height: 50px;
        padding-left: 20px;
        padding-right: 20px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;

        .card_header_title {
            color: #FFFFFF;
        }
    }
}
</style>