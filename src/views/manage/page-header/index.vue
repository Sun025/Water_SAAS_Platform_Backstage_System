<template>
    <div class="page_header">
        <h1>净水产品运营平台</h1>
        <div class="login">
            <LoginInfo></LoginInfo>
            <LoginList class="login_list"></LoginList>
        </div>
    </div>
</template>

<script setup lang="ts">
import LoginInfo from "./login-info/index.vue";
import LoginList from './login-list/index.vue'
</script>

<style scoped lang="less">
.page_header {
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #7994C2;
    position: relative;

    .login {
        position: absolute;
        right: 0;
        top: 0;

        .login_list {
            position: absolute;
            right: 0;
            top: 64px;
        }
    }
}
</style>