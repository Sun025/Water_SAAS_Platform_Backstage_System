<template>
    <ul class="login_list">
        <li>账号设置</li>
        <li>修改密码</li>
        <li class="li_buttom">退出登陆</li>
    </ul>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
ul {
    width: 168px;
    background-color: #1B1D29;
    border-radius: 8px;
    color: #F2F6FA;

    li {
        height: 40px;
        text-align: left;
        line-height: 40px;
        padding-left: 21px;
    }

    .li_buttom {
        border-top: 2px solid #3D4364;
    }
}
</style>