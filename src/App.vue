<template>
    <div id="app">
        <transition name="el-fade-in-linear">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    body {
        margin: 0px;
        padding: 0px;
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
    }

    #app {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
        left: 0px;
        right: 0px;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    .iconfont {
        font-size: 20px;
        vertical-align: baseline;
        margin-right: 5px;
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        display: inline-block;
    }
</style>