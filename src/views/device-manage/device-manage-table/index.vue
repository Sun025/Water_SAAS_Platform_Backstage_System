<template>
    <div class="device_manage_table">
        <el-table :border="true" :data="deviceList">
            <el-table-column label="设备mac" prop="mac"></el-table-column>
            <el-table-column label="设备状态" prop="state"></el-table-column>
            <el-table-column label="用户姓名" prop="name"></el-table-column>
            <el-table-column label="用户地址" prop="address"></el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import DeviceInfo from './type.ts'

const deviceList = reactive<Array<DeviceInfo>>([
    {
        mac: 'DJJ3482JFHD3',
        state: '正常',
        name: '黄俊平',
        address: '深圳市宝安区梧桐道14A冬至7-8楼'
    },
    {
        mac: '394JFNGK2942',
        state: '检修',
        name: '阎伟',
        address: '深圳市宝安区梧桐道14A冬至7-8楼'
    }
])
</script>

<style scoped lang="less"></style>