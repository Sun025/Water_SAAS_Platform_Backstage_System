<template>
    <div class="login_info">
        <el-avatar size="defalut"></el-avatar>
        <el-text class="login_name">这里是昵称</el-text>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.login_info {
    display: flex;
    align-items: center;

    .login_name {
        margin-left: 7px;
    }
}
</style>