<template>
    <div>
        <Logo class="logo"></Logo>
        <MenuList class="menu_list"></MenuList>
    </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import MenuList from './menu_list/index.vue'
</script>

<style scoped lang="less">
.menu_list {
    padding-top: 60px;
}
</style>