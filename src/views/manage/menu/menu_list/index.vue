<template>
    <div>
        <el-menu background-color="#1B1D29" text-color="#DCE8FF">
            <el-menu-item>概览</el-menu-item>
            <el-sub-menu>
                <template #title>
                    <svg>
                        <use xlink:href="#icon-ic_lease"></use>
                    </svg>
                    <span>运营管理</span>
                </template>
                <el-menu-item v-for="item of yunying_list">{{ item }}</el-menu-item>
            </el-sub-menu>
            <el-menu-item>租赁管理</el-menu-item>
            <el-menu-item>数据中心</el-menu-item>
            <el-menu-item>产品配置</el-menu-item>
            <el-menu-item>账号管理</el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const yunying_list = reactive<Array<string>>([
    '用户管理',
    '设备管理',
    '滤芯寿命管理',
    '故障监控',
    '消息推送',
    '用户反馈'
])
</script>

<style scoped></style>