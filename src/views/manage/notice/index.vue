<template>
    <div class="notice">
        <SvgIcon iconName="ic_horn" width="21px" height="16px"></SvgIcon>
        <el-text>【公告】热烈祝贺我公司接入云净水平台</el-text>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svg-icon/index.vue'
</script>

<style scoped lang="less">
.notice {
    height: 50px;
    padding-left: 40px;
    background-color:#F5FAFF;
    border-top: 0.5px solid #C0D2E2;
    border-bottom: 0.5px solid #C0D2E2;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}
</style>