<template>
    <div class="login-container">
        <div class="bg_box">
            <img src="../../assets/login-bg.jpg"/>
        </div>
        <div class="login-center">
            <el-form :model="ruleForm" :rules="rules2" ref="ruleForm" class="demo-ruleForm login-container">
                <h3 class="title"><img src="../../assets/login-logo.png"/></h3>
                <el-form-item prop="email">
                    <el-input type="text" v-model="ruleForm.email" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-checkbox v-model="ruleForm.remember" class="remember">记住我</el-checkbox>
                <span class="push-right">忘记密码，请联系管理员！</span>
                <el-form-item style="width:100%; padding-top: 80px;">
                    <el-button type="primary" style="width:100%;" @click.native.prevent="submitForm('ruleForm')"
                               :loading="logining">登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                logining: false,
                ruleForm: {
                    email: '676659348@qq.com',
                    password: 'bing8u',
                    remember: true
                },
                rules2: {
                    email: [{
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    }, {
                        type: 'email',
                        message: '请输正确的邮箱',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.logining = true;
                        api.requestLogin(this.ruleForm).then(rs => {
                            utils.auth.setLoginUser(rs.data);
                            this.logining = false;
                            this.$message.success(`${rs.data.userInfo.name}，欢迎回来！`);
                            this.$router.push('/');
                        }).catch((err) => {
                            this.logining = false;
                            utils.fns.err(err);
                        });
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style scoped>
    .bg_box {
        position: absolute \9;
        width: 100% \9;
        height: 100% \9;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -2;
        overflow: hidden;
    }

    .bg_box img {
        width: 100%;
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