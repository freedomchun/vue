<template>
    <div>
        <el-col :span="24" class="breadcrumb-container">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{ item.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        }
    }
</script>