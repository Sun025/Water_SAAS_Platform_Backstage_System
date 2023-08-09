<template>
    <div class="device_manage_filter">
        <div class="state_buttons">
            <el-button round size="large" v-for="item of lagerButtons" :index="item">{{ item }}</el-button>
        </div>
        <div class="substatue_buttons">
            <el-button round v-for="item of defalutButtons" :index="item">{{ item }}</el-button>
        </div>
        <div class="search_bar">
            <el-input placeholder="在此输入净水器mac地址"></el-input>
        </div>
        <div class="map">
            <SvgIcon iconName="ic_map"></SvgIcon>
            <el-text class="text">地图</el-text>
        </div>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svg-icon/index.vue'
import { reactive } from 'vue'

const lagerButtons = reactive<Array<string>>(['在线情况', '故障情况', '滤芯情况']);
const defalutButtons = reactive<Array<string>>(['所有', '在线', '离线']);

</script>

<style scoped lang="less">
.device_manage_filter {
    padding: 12px 26px 20px 11px;
    position: relative;
    .state_buttons {
        margin-bottom: 29px;
    }
    .search_bar {
        position: absolute;
        top: 12px;
        right: 26px;
        width: 390px;
    }
    .map {
        position: absolute;
        bottom: 20px;
        right: 26px;
        display: flex;
        align-items: center;
        .text {
            margin-left: 3px;
        }
    }
}
</style>