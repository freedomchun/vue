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
                        <el-button type="primary" size="small">重置密码</el-button>
                        <el-button type="danger" @click.native.prevent="deleteRow(scope.$index, users)" size="small">
                            删除
                        </el-button>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>

        <!--分页-->
        <el-col :span="24" class="toolbar" style="margin-top: 20px;">
            <el-pagination layout="prev, pager, next" :total="1000" style="float:right;">
            </el-pagination>
        </el-col>

        <!--新增界面-->
        <el-dialog title="新增账户" v-model="showAddUser" :close-on-click-modal="false">
            <el-form label-position="top" :model="addUser" ref="addUser">
                <el-form-item label="昵称" prop="name">
                    <el-input v-model="addUser.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="addUser.email"></el-input>
                </el-form-item>
                <el-form-item label="角色组" prop="rolegroup">
                    <el-dropdown>
                        <el-button>
                            请选择角色<i class="el-icon-caret-bottom el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>超级管理员</el-dropdown-item>
                            <el-dropdown-item>网站编辑</el-dropdown-item>
                            <el-dropdown-item>测试</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-form-item>
                <el-form-item label="状态">
                    <el-dropdown>
                        <el-button>
                            请选择状态<i class="el-icon-caret-bottom el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>启用</el-dropdown-item>
                            <el-dropdown-item>禁用</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button>取消</el-button>
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
                showAddUser: false,
                addUser: {
                    avatar: '',
                    name: '',
                    email: '',
                    password: '',
                }
            }
        },
        mounted() {
            this.getUsers();
        },
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            getUsers(keyword = null) {
                api.requestUsers(this.keyword).then(rs => {
                    this.users = rs.data;
                    this.loading = false;
                }).catch(utils.fns.err);
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