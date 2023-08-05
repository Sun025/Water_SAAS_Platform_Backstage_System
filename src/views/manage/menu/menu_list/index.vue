<template>
    <div>
        <el-menu background-color="#1B1D29" text-color="#DCE8FF">
            <el-menu-item>
                <SvgIcon iconName="ic_gaikuo"></SvgIcon>
                <span>概览</span>
            </el-menu-item>
            <el-sub-menu>
                <template #title>
                    <SvgIcon iconName="ic_opera"></SvgIcon>
                    <span>运营管理</span>
                </template>
                <el-menu-item v-for="item of yunying_list">{{ item }}</el-menu-item>
            </el-sub-menu>
            <el-menu-item>
                <SvgIcon iconName="ic_lease"></SvgIcon>
                <span>租赁管理</span>
            </el-menu-item>
            <el-menu-item>
                <SvgIcon iconName="ic_date"></SvgIcon>
                <span>数据中心</span>
            </el-menu-item>
            <el-menu-item>
                <SvgIcon iconName="ic_device"></SvgIcon>
                <span>产品配置</span>
            </el-menu-item>
            <el-menu-item>
                <SvgIcon iconName="ic_account"></SvgIcon>
                <span>账号管理</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import SvgIcon from '@/components/svg-icon/index.vue'

const yunying_list = reactive<Array<string>>([
    '用户管理',
    '设备管理',
    '滤芯寿命管理',
    '故障监控',
    '消息推送',
    '用户反馈'
])
</script>

<style scoped>
span {
    margin-left: 20px;
}
</style>