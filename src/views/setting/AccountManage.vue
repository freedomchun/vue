<template>
    <section>
        <div class="grid-content bg-g">
            <el-form inline style="padding-top: 20px; padding-left: 20px;">
                <el-form-item>
                    <el-input v-model="keyword" placeholder="请输入姓名或邮箱"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getUsers">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="showAddUser = true">新建</el-button>
                </el-form-item>
            </el-form>
        </div>

        <el-table :data="users" v-loading="loading" border style="width: 100%; margin-top: 20px;">
            <el-table-column type="selection" label="勾选" width="55"></el-table-column>
            <el-table-column prop="avatar" label="头像">
                <template scope="scope">
                    <img :src="scope.row.avatar" width="100">
                </template>
            </el-table-column>
            <el-table-column prop="name" label="昵称"></el-table-column>
            <el-table-column prop="email" label="邮箱" show-overflow-tooltip></el-table-column>
            <el-table-column prop="disable_at" label="状态"></el-table-column>
            <el-table-column prop="created_at" label="创建日期"></el-table-column>
            <el-table-column fixed="right" label="操作" width="170">
                <template scope="scope">
                    <el-button-group>
                        <el-button type="primary" size="small"
                                   @click.native.prevent="restPassword(scope.$index, users)">重置密码
                        </el-button>
                        <el-button type="danger" @click.native.prevent="deleteRow(scope.$index, users)" size="small">
                            删除
                        </el-button>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>

        <!--分页-->
        <el-col :span="24" class="toolbar" style="margin-top: 20px;">
            <el-pagination layout="total, prev, pager, next" :total="userTotal" :page-size="pageSize"
                           @current-change="currentChange" style="float:right;"></el-pagination>
        </el-col>

        <!--新增界面-->
        <el-dialog title="新增账户" v-model="showAddUser" :close-on-click-modal="false">
            <el-form label-position="top" :model="addUser" ref="addUser">
                <el-form-item label="昵称" prop="name" :rules="[{ required: true, message: '昵称不能为空'}]">
                    <el-input v-model="addUser.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email" :rules="[{ required: true, message: '邮箱不能为空'}, { type: 'email', message: '邮箱格式不正确'}]">
                    <el-input v-model="addUser.email"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="role" :rules="[{ required: true, message: '角色不能为空'}]">
                    <el-select v-model="addUser.role" multiple placeholder="请选择角色">
                        <el-option label="超级管理员" value="admin"></el-option>
                        <el-option label="网站编辑" value="edit"></el-option>
                        <el-option label="测试" value="test"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="状态" prop="disable" :rules="[{ required: true, message: '状态不能为空'}]">
                    <el-select v-model="addUser.disable" placeholder="请选择状态">
                        <el-option label="启用" value="F"></el-option>
                        <el-option label="禁用" value="T"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showAddUser = false">取消</el-button>
                <el-button type="primary">提交</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                keyword: '',
                loading: false,
                users: [],
                userTotal: 0,
                currentPage: 1,
                pageSize: 15,
                showAddUser: false,
                addUser: {
                    avatar: '',
                    name: '',
                    email: '',
                    password: '',
                    role: ['admin'],
                    disable: 'F'
                }
            }
        },
        mounted() {
            this.getUsers();
        },
        methods: {
            restPassword(index, rows) {
                this.$confirm(`你确认要将${rows[index].name}的密码重置吗?`, '提示', {type: 'warning'}).then(() => {
                    api.requestResetPassword(rows[index].id).then(rs => {
                        this.$notify({
                            type: 'success',
                            title: `新密码是 ${rs.data}`,
                            message: `${rows[index].name} 需要使用新密码。`,
                            duration: 20000,
                            offset: 35
                        });
                    }).catch(err => {
                        console.log(err)
                    });
                }).catch(() => {
                });
            },
            deleteRow(index, rows) {
                this.$confirm(`你确认删除${rows[index].name}吗?`, '提示', {type: 'warning'}).then(() => {
                    api.requestDeleteUser(rows[index].id).then(rs => {
                        rows.splice(index, 1);
                    }).catch(utils.fns.err);
                }).catch(() => {
                });
            },
            getUsers() {
                let o = {keyword: this.keyword, pageSize: this.pageSize, page: this.currentPage};
                api.requestUsers(o).then(rs => {
                    this.userTotal = rs.data.total;
                    this.users = rs.data.data;
                    this.loading = false;
                }).catch(utils.fns.err);
            },
            currentChange(val) {
                this.currentPage = val;
                this.getUsers();
            }
        },
    }
</script>

<style scoped>
    .bg-g {
        background: #eeeeee;
        border-radius: .2em;
    }

    .text-colorred {
        color: #f00;
        font-size: 12px;
    }
</style>