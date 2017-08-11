<template>
    <el-col :span="24" class="header">
        <el-col :span="4" class="logo">
            <img src="../../assets/admin-logo.png"/>
        </el-col>
        <el-col :span="18" class="usersearch">
            <span><i class="iconfont icon-rizhi"></i></span>
            <span><i class="iconfont icon-shouyeshixin" @click="open1"></i></span>
            <span><el-input style="border-radius: 20px;" placeholder="搜索..." icon="search" v-model="search"></el-input></span>
        </el-col>
        <el-col :span="2" class="userinfo">
            <el-dropdown trigger="hover">
				<span class="el-dropdown-link userinfo-inner">
						<img :src="loginUser.avatar"> {{ loginUser.name }}
                        <i class="icon-angle-down"></i>
					</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>我的消息</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-col>
</template>

<script>
    export default {
        data() {
            return {
                search: '',
                loginUser: {},
            }
        },
        mounted() {
            this.loginUser = utils.auth.getLoginUser()
        },
        methods: {
            logout: function () {
                this.$confirm('确认退出吗?', '提示').then(() => {
                    utils.auth.removeLoginUser()
                    this.$router.push('/login')
                }).catch(() => {
                })
            },
            open1() {
                utils.fns.openWindow('https://www.baidu.com/')
            }
        }
    }
</script>