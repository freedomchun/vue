<template>
    <div>
        <el-row class="container">
            <head-top></head-top>
            <el-col :span="24" class="main">
                <nav-left></nav-left>
                <section class="content-container">
                    <div class="grid-content bg-purple-light">
                        <bread-crumb></bread-crumb>
                        <el-col :span="24" class="content-wrapper">
                            <router-view></router-view>
                        </el-col>
                    </div>
                </section>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import {HeadTop, NavLeft, BreadCrumb} from '@/views/common'
    
    export default {
        components: {
            HeadTop,
            NavLeft,
            BreadCrumb
        }
    }
</script>
<style>
    .container {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        padding-left: 0 !important;
        padding-right: 0 !important;
    }

    .header {
        height: 50px;
        line-height: 50px;
        background: #242527;
        color: #fff;
    }

    .logo {
        width: 260px;
        height: 50px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .logo img {
        vertical-align: middle;
    }

    .usersearch {
        text-align: right;
    }

    .usersearch span {
        display: inline;
        float: right;
        padding-right: 10px;
    }

    .usersearch span input {
        background-color: #3a3b3d;
        color: #dddddd;
        border: 1px solid #636b6f !important;
    }

    .inputnew {
        background-color: #3a3b3d !important;
    }

    .userinfo {
        float: right;
        text-align: right;
        padding-right: 20px;
        cursor: pointer;
    }

    .userinfo span {
        color: #fff;
    }

    .userinfo-inner img {
        width: 35px;
        height: 35px;
        display: inline;
        float: left;
        padding-right: 5px;
        margin-top: 8px;
    }

    .main {
        display: flex;
        position: absolute;
        top: 50px;
        bottom: 0;
        overflow: hidden;
    }

    aside {
        flex: 0 0 260px;
        width: 260px;
        position: absolute;
        top: 0;
        bottom: 0;
        background: #35363a;
    }

    aside .el-menu {
        height: 100%;
        background: #35363a;
    }

    .collapsed {
        width: 50px;
    }

    .item {
        position: relative;
    }

    .submenu {
        position: absolute;
        top: 0;
        left: 60px;
        z-index: 99999;
        height: auto;
        display: none;
    }

    .menu-collapsed {
        flex: 0 0 60px;
        width: 60px;
    }

    .menu-expanded {
        flex: 0 0 260px;
        width: 260px;
    }

    .content-container {
        background: #fff;
        flex: 1;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        left: 260px;
        overflow-y: scroll;
    }

    .breadcrumb-container {
        background: #eee;
        width: 100%;
        height: 60px;
    }

    .breadcrumb-container,
    .el-breadcrumb {
        padding-left: 20px;
        font-size: 16px;
        line-height: 60px;
    }

    .title {
        width: 200px;
        float: left;
        color: #475669;
    }

    .breadcrumb-inner {
        float: right;
    }

    .content-wrapper {
        box-sizing: border-box;
        padding: 20px;
    }

    .admin-custombg {
        background: #35363a;
        border-bottom: 2px solid #424242;
    }

    .admin-customtext {
        color: #fff;
    }

    aside .el-submenu__title {
        color: #fff !important;
    }

    aside .el-menu-item.is-active {
        color: #fff;
        background: #242527;
    }

    aside .el-submenu .el-menu-item:hover,
   aside .el-submenu__title:hover {
        background-color: #242527;
        color: #fff;
    }

    ol,
    ul {
        list-style: none
    }
</style>