<template>
    <div class="manage_container">
        <Menu class="manage_menu"></Menu>
        <div class="manage_main"></div>
    </div>
</template>

<script setup lang="ts">
import Menu from './menu/index.vue'
</script>

<style scoped lang="less">
.manage_container {
    width: 100%;
    min-height: 100vh;
    .manage_menu {
        width: 251px;
        height: 100vh;
        background-color: #1B1D29;
    }
}
</style>