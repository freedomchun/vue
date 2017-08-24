<template>
    <div class="login-container">
        <div class="login-center">
            <el-form :model="loginForm" ref="loginForm">
                <h3 class="title"><img src="../../assets/login-logo.png"/></h3>
                <el-form-item prop="email"
                              :rules="[{required: true,message: '请输入账号'}, {type: 'email', message: '请输正确的邮箱'}]">
                    <el-input type="text" v-model="loginForm.email" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item prop="password" :rules="[{required: true, message: '请输入密码', trigger: 'blur'}]">
                    <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-checkbox v-model="loginForm.remember" class="remember">记住我</el-checkbox>
                <span class="push-right">忘记密码，请联系管理员！</span>
                <el-form-item style="width:100%; padding-top: 80px;">
                    <el-button type="primary" style="width:100%;" @click="submitForm" :loading="loading">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: false,
                loginForm: {
                    email: '',
                    password: '',
                    remember: false
                }
            }
        },
        mounted() {
            let info = JSON.parse(localStorage.getItem('userInputInfo'))
            if (info !== null && info.remember) {
                this.loginForm.email = info.email
                this.loginForm.password = info.password
                this.loginForm.remember = info.remember
            }
        },
        methods: {
            submitForm() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.loading = true
                        this.$store.dispatch('login', this.loginForm).then(rs => {
                            this.saveUserInputInfo()
                            this.loading = false
                            this.$message.success(`${rs.data.userInfo.name}，欢迎回来！`)
                            this.$router.push('/')
                        }).catch(() => {
                            this.loading = false
                        })
                    } else {
                        return false
                    }
                })
            },
            saveUserInputInfo() {
                localStorage.setItem('userInputInfo', JSON.stringify(this.loginForm))
            }
        }
    }
</script>
<style scoped>
    .login-container {
        background-image: url("../../assets/login-bg.jpg");
        background-position: center center;
        background-size: cover;
        height: 100%;
    }

    .login-center {
        width: 440px;
        height: 480px;
        position: absolute;
        left: 50%;
        margin-left: -220px;
        top: 50%;
        margin-top: -240px;
        z-index: 10;
        background: rgba(255, 255, 255, .1);
        box-shadow: 0 3px 3px #0006;
        border-radius: 3px;
        padding: 20px;
    }

    .title {
        padding: 30px 0;
    }

    .el-input__inner {
        border-radius: 20px !important;
    }

    .remember {
        float: left;
        color: #fff;
    }

    .push-right {
        float: right;
        color: #fff;
        margin-right: 20px;
    }
</style>