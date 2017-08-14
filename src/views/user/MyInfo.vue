<template>
    <section>
        <el-row>
            <el-col :span="24" class="bg-g">
                <el-upload class="avatar-uploader" action="" :show-file-list="false" :on-success="handleAvatarSuccess"
                           :before-upload="beforeAvatarUpload">
                    <img v-if="user.avatar" :src="user.avatar" class="avatar">
                    <el-button type="primary">上传头像</el-button>
                    <span> 支持jpg格式，图片大小1MB以内。</span>
                </el-upload>
                <ul>
                    <li>名称：{{ user.name }}</li>
                    <li>电子邮箱：{{ user.email }}</li>
                    <li>角色组：
                        <el-tag type="gray" v-for="role in roles" :key="role.id">{{ role.name }}</el-tag>
                    </li>
                    <li>状态：
                        <el-tag type="success" v-if="user.disable_at === null">激活</el-tag>
                        <el-tag type="danger" v-else>禁用</el-tag>
                    </li>
                </ul>
            </el-col>
            <el-col :span="24" class="bg-g" style="margin-top: 20px;">
                <el-form :model="pwdInfo" ref="pwdInfo" label-width="100px">
                    <p style="padding:12px 20px; border-bottom: 1px solid #c6c6c6;">更改密码</p>
                    <el-form-item label="原密码" prop="oldPassword"
                                  :rules="[{ required: true, message: '原密码不能为空'},{ min: 6, max: 15, message: '原密码长度为6-15'}]">
                        <el-input type="password" v-model="pwdInfo.oldPassword"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newPassword"
                                  :rules="[{ required: true, message: '新密码不能为空'},{ min: 6, max: 15, message: '新密码长度为6-15'}]">
                        <el-input type="password" v-model="pwdInfo.newPassword"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="newPassword_confirmation"
                                  :rules="[{ required: true, validator: validatePass, trigger: 'blur' }]">
                        <el-input type="password" v-model="pwdInfo.newPassword_confirmation"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="pwdInfoSubmit" :loading="pwdLoading">提交</el-button>
                        <el-button @click="resetPwdForm">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                user: {},
                roles: [],
                pwdLoading: false,
                pwdInfo: {
                    oldPassword: '',
                    newPassword: '',
                    newPassword_confirmation: '',
                },
            };
        },
        mounted() {
            this.user = utils.auth.getLoginUser();
            this.getMyRoles();
        },
        methods: {
            validatePass(rule, value, callback) {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.pwdInfo.newPassword) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            },
            getMyRoles() {
                api.requestMyRoles().then(rs => {
                    this.roles = rs.data;
                }).catch(utils.fns.err);
            },
            pwdInfoSubmit() {
                this.$refs.pwdInfo.validate((valid) => {
                    if (valid) {
                        this.pwdLoading = true;
                        api.requestEditMyInfo(this.pwdInfo).then(rs => {
                            this.user = rs.data;
                            this.$message.success('修改成功，下次登录需要使用新密码。');
                            this.resetPwdForm();
                            this.pwdLoading = false;
                        }).catch(utils.fns.err);
                    } else {
                        return false;
                    }
                });
            },
            resetPwdForm() {
                this.$refs.pwdInfo.resetFields();
            },
            handleAvatarSuccess(res, file) {
                this.user.avatar = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                let isJPG = file.type === 'image/jpeg';
                let isLt2M = file.size / 1024 / 1024 < 1;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 1MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style scoped>
    .bg-g {
        background: #eeeeee;
        border-radius: .2em;
    }

    .bg-g ul li {
        border-bottom: 1px solid #c6c6c6;
        line-height: 24px;
        font-size: 16px;
        padding: 12px 20px;
    }

    .avatar-uploader {
        border-bottom: 1px solid #c6c6c6;
        padding: 20px;
    }

    .avatar-uploader .el-upload {
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        border-radius: 6px;
        width: 160px;
        height: 160px;
        display: block;
        margin-bottom: 20px;
    }

    .el-form-item {
        width: 500px !important;
    }
</style>