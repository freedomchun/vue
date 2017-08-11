<template>
    <div>
        <el-button @click="test">测试</el-button>
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
                userPermissions: []
            }
        },
        mounted() {
            api.requestUserPermissions().then(rs => {
                this.userPermissions = rs.data;
            });
        },
        methods: {
            hsPermissions(name) {
                return this.userPermissions.map(item => item.slug).includes(name);
            },
            test() {
                let b = this.hsPermissions('view.users');
                console.log(b);
            }
        }
    }
</script>