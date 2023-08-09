<template>
    <div class="manage_container">
        <Menu class="manage_menu"></Menu>
        <div class="manage_main">
            <PageHeader></PageHeader>
            <Notice></Notice>
            <div class="manage_content">
                <DeviceManage></DeviceManage>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Menu from './menu/index.vue'
import PageHeader from './page-header/index.vue'
import Notice from './notice/index.vue'
// import Card from '@/components/card/index.vue'
import DeviceManage from '@/views/device-manage/index.vue'
</script>

<style scoped lang="less">
.manage_container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    .manage_menu {
        width: 251px;
        height: 100vh;
        background-color: #1B1D29;
    }
    .manage_main {
        flex: 1;
        .manage_content {
            padding: 40px 40px 0 40px;
        }
    }
}
</style>