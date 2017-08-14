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
                    <el-button type="primary" @click="addUserForm">新建</el-button>
                </el-form-item>
            </el-form>
        </div>

        <el-table :data="users" v-loading="loading" border style="width: 100%; margin-top: 20px;">
            <el-table-column prop="id" label="ID" sortable width="100"></el-table-column>
            <el-table-column prop="avatar" label="头像">
                <template scope="scope">
                    <img :src="scope.row.avatar" width="100">
                </template>
            </el-table-column>
            <el-table-column prop="name" label="名称" sortable></el-table-column>
            <el-table-column prop="email" label="邮箱" sortable show-overflow-tooltip></el-table-column>
            <el-table-column prop="disable_at" label="状态" width="100" sortable>
                <template scope="scope">
                    <el-tag type="success" v-if="scope.row.disable_at === null">激活</el-tag>
                    <el-popover trigger="hover" placement="top" v-else>
                        <el-icon name="time"></el-icon>
                        {{ scope.row.disable_at }}
                        <div slot="reference" class="name-wrapper">
                            <el-tag type="danger">禁用</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column prop="roles" label="角色组" sortable>
                <template scope="scope">
                    <el-tag v-for="role in scope.row.roles" :key="role.id" type="gray" closable
                            @close="removeUserRole(scope.row, role)">{{ role.name }}
                    </el-tag>
                    <el-button type="danger" plain size="small" @click="addUserForm">+</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="created_at" label="创建日期" sortable></el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
                <template scope="scope">
                    <el-button-group>
                        <el-button type="warning" size="small" @click.native.prevent="changeDisable(scope.row, 'T')"
                                   v-if="scope.row.disable_at === null">禁用
                        </el-button>
                        <el-button type="success" size="small" @click.native.prevent="changeDisable(scope.row, 'F')"
                                   v-else>激活
                        </el-button>
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
                <el-form-item label="名称" prop="name" :rules="[{ required: true, message: '名称不能为空'}]">
                    <el-input v-model="addUser.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email"
                              :rules="[{ required: true, message: '邮箱不能为空'}, { type: 'email', message: '邮箱格式不正确'}]">
                    <el-input v-model="addUser.email"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="roles" :rules="[{ type: 'array', required: true, message: '至少选择一个角色'}]">
                    <el-select v-model="addUser.roles" multiple placeholder="请选择角色">
                        <el-option v-for="role in roles" :key="role.id" :label="role.name" :value="role.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="状态" prop="disable" :rules="[{ required: true, message: '状态不能为空'}]">
                    <el-select v-model="addUser.disable" placeholder="请选择状态">
                        <el-option label="启用" value="F"></el-option>
                        <el-option label="禁用" value="T"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="密码" prop="password"
                              :rules="[{ required: true, message: '密码不能为空'}, { min: 6, max: 15, message: '密码长度在6-15位' }]">
                    <el-input type="password" v-model="addUser.password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeUserForm">取消</el-button>
                <el-button type="primary" @click.native.prevent="addUserSubmit">提交</el-button>
            </div>
        </el-dialog>
        
          <!--添加角色-->
        <el-dialog title="添加角色" v-model="showAddUser" :close-on-click-modal="false">
            <el-form label-position="left" :model="addUser" ref="addUser">
               <el-form-item label="角色" prop="roles" :rules="[{ type: 'array', required: true, message: '至少选择一个角色'}]">
                    <el-select v-model="addUser.roles" multiple placeholder="请选择角色">
                        <el-option v-for="role in roles" :key="role.id" :label="role.name" :value="role.id"></el-option>
                    </el-select>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeUserForm">取消</el-button>
                <el-button type="primary" @click.native.prevent="addUserSubmit">提交</el-button>
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
                    roles: [],
                    disable: 'F'
                },
                roles: [],
            }
        },
        mounted() {
            this.getUsers();
        },
        methods: {
            changeDisable(user, disable) {
                let index = this.users.indexOf(user);
                let roles = user.roles;
                api.requestEditUser(user.id, {disable}).then(rs => {
                    user = rs.data;
                    user.roles = roles;
                    this.$set(this.users, index, user);
                }).catch(utils.fns.err);
            },
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
                this.$confirm(`你还要删除${rows[index].name}吗?`, '此账号所有资料都将清除！', {type: 'warning'}).then(() => {
                    api.requestDeleteUser(rows[index].id).then(rs => {
                        rows.splice(index, 1);
                        this.userTotal--;
                    }).catch(utils.fns.err);
                }).catch(() => {
                });
            },
            getUsers() {
                this.loading = true;
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
            },
            addUserForm() {
                this.showAddUser = true;
                if (!!this.roles.length) {
                    return false;
                }
                api.requestRoles().then(rs => {
                    this.roles = rs.data;
                }).catch(utils.fns.err);
            },
            addUserSubmit() {
                this.$refs.addUser.validate((valid) => {
                    if (valid) {
                        api.requestCreateUser(this.addUser).then(rs => {
                            this.userTotal++;
                            this.users.push(rs.data);
                            this.addUser = {avatar: '', name: '', email: '', password: '', roles: [], disable: 'F'};
                            this.closeUserForm();
                        }).catch(utils.fns.err);
                    } else {
                        return false;
                    }
                });
            },
            closeUserForm() {
                this.showAddUser = false;
                this.$refs.addUser.resetFields();
            },
            removeUserRole(user, role) {
                this.$confirm(`你要将${user.name}移除${role.name}吗?`, '提示', {type: 'warning'}).then(() => {
                    let index = user.roles.indexOf(role);

                    /**
                     * 新复制角色组， 从当前角色组 删除一个 来提交到用户的同步角色请求上
                     */
                    let roles = user.roles.slice();
                    roles.splice(index, 1);

                    /**
                     * 查找新复制的角色组中的id属性
                     */
                    let roleIds = roles.map(item => item.id);

                    /**
                     * 请求成功再移除原本角色组中，需要删除的角色
                     */
                    api.requestSyncUserRoles(user.id, roleIds).then(rs => {
                        user.roles.splice(index, 1);
                    }).catch(utils.fns.err);
                }).catch(() => {
                });
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

    .el-tag{
        margin-right: 10px;
    }
    .el-select{ width: 100%;}
</style>