<template>
    <div class="manage_container">
        <Menu class="manage_menu"></Menu>
        <div class="manage_main">
            <PageHeader></PageHeader>
            <Notice></Notice>
            <div class="cards">
                <Card width="427px" height="322px" title="每日新增设备" backgroundColor="#3F74F9">
                </Card>
                <Card width="427px" height="322px" title="用户周充值金额" backgroundColor="#FF8B2D">
                </Card>
                <Card width="649px" height="322px" title="设备每周总量" backgroundColor="#6DCD3C">
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Menu from './menu/index.vue'
import PageHeader from './page-header/index.vue'
import Notice from './notice/index.vue'
import Card from '@/components/card/index.vue'
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
        .cards {
            padding: 40px 0 0 40px;
            display: flex;
            flex-wrap: wrap;
        }
    }
}
</style>