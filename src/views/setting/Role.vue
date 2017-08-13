<template>
    <section>
        <div class="grid-content bg-g">
            <el-form inline style="padding-top: 20px; padding-left: 20px;">
                <el-form-item>
                    <el-input v-model="keyword" placeholder="请输入检测词"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getRoles">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="showAddRole = true">新建</el-button>
                </el-form-item>
            </el-form>
        </div>

        <el-table :data="roles" border v-loading="loading" style="width: 100%; margin-top: 20px;">
            <el-table-column prop="name" label="名称" width="200"></el-table-column>
            <el-table-column prop="slug" label="检测词" width="150"></el-table-column>
            <el-table-column prop="level" label="层级" width="100"></el-table-column>
            <el-table-column prop="description" label="摘要"></el-table-column>
            <el-table-column prop="created_at" label="创建日期" width="200"></el-table-column>
            <el-table-column fixed="right" label="操作" width="170">
                <template scope="scope">
                    <el-button-group>
                        <el-button type="info" size="small" @click="syncPermissions(scope.$index, roles)">权限</el-button>
                        <el-button type="primary" size="small" @click.native.prevent="editRow(scope.$index, roles)">
                            修改
                        </el-button>
                        <el-button type="danger" size="small" @click.native.prevent="deleteRow(scope.$index, roles)">
                            删除
                        </el-button>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>

        <!--新增界面-->
        <el-dialog title="新增角色" v-model="showAddRole" :close-on-click-modal="false">
            <el-form :model="addRole" ref="addRole" label-position="top" label-width="80px">
                <el-form-item label="名称" prop="name" :rules="[{ required: true, message: '名称不能为空'}]">
                    <el-input v-model="addRole.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="检测词" prop="slug" :rules="[{ required: true, message: '检测词不能为空'}]">
                    <el-input v-model="addRole.slug"></el-input>
                    <span class="text-colorred">提示：用于程序判断是否具有此角色的重要标识</span>
                </el-form-item>
                <el-form-item label="层级" prop="level"
                              :rules="[{ required: true, message: '层级不能为空'},{ type: 'number', message: '层级必须为数字值'}]">
                    <el-input v-model.number="addRole.level"></el-input>
                    <span class="text-colorred">提示：0-10之间，它将拥小于它层级的权限</span>
                </el-form-item>
                <el-form-item label="摘要">
                    <el-input v-model="addRole.description"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showAddRole = false">取消</el-button>
                <el-button type="primary" @click.native.prevent="submitAddRole" :loading="addLoading">提交</el-button>
            </div>
        </el-dialog>

        <!--修改界面-->
        <el-dialog title="修改角色" :visible.sync="showEditRole" :close-on-click-modal="false">
            <el-form :model="editRole" ref="editRole" label-position="top" label-width="80px">
                <el-form-item label="名称" prop="name" :rules="[{ required: true, message: '名称不能为空'}]">
                    <el-input v-model="editRole.name"></el-input>
                </el-form-item>
                <el-form-item label="检测词" prop="slug" :rules="[{ required: true, message: '检测词不能为空'}]">
                    <el-input v-model="editRole.slug"></el-input>
                    <span class="text-colorred">提示：用于程序判断是否具有此角色的重要标识</span>
                </el-form-item>
                <el-form-item label="层级" prop="level"
                              :rules="[{ required: true, message: '层级不能为空'},{ type: 'number', message: '层级必须为数字值'}]">
                    <el-input v-model.number="editRole.level"></el-input>
                    <span class="text-colorred">提示：0-10之间，它将拥小于它层级的权限</span>
                </el-form-item>
                <el-form-item label="摘要">
                    <el-input v-model="editRole.description"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showEditRole = false">取消</el-button>
                <el-button type="primary" @click.native.prevent="submitEditRole" :loading="editLoading">提交</el-button>
            </div>
        </el-dialog>

        <!--同步权限-->
        <el-dialog :title="'同步权限：' + currentRole.name" :visible.sync="showPermissions">
            <el-table :data="psList" ref="multipleTable" v-loading="psLoading" @selection-change="handlePsChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column property="name" label="名称" show-overflow-tooltip></el-table-column>
                <el-table-column property="slug" label="检测词" show-overflow-tooltip></el-table-column>
                <el-table-column property="description" label="摘要" show-overflow-tooltip></el-table-column>
                <el-table-column property="model" label="模型" show-overflow-tooltip></el-table-column>
                <el-table-column property="created_at" label="创建日期" show-overflow-tooltip></el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showPermissions = false">取消</el-button>
                <el-button type="primary" @click.native.prevent="submitSyncPermissions" :loading="syncLoading">提交</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                loading: false,
                roles: [],
                keyword: '',
                showEditRole: false,
                editLoading: false,
                editRole: {
                    name: '',
                    slug: '',
                    description: '',
                    model: '',
                },
                showAddRole: false,
                addLoading: false,
                addRole: {
                    name: '',
                    slug: '',
                    level: 1,
                    description: '',
                },
                showPermissions: false,
                psLoading: false,
                psList: [],
                syncLoading: false,
                psListMultiple: [],
                currentRole: {},
                currentRolePermissions: [],
            }
        },
        mounted() {
            this.getRoles();
        },
        methods: {
            syncPermissions(index, rows) {
                this.currentRole = rows[index];
                this.showPermissions = true;
                this.psLoading = true;

                // 获取所有权限
                let psReady = api.requestPermissions().then(rs => {
                    this.psList = rs.data;
                }).catch(utils.fns.err);

                // 获取角色的权限
                let psRoleReady = api.requestRolePermissions(this.currentRole.id).then(rs => {
                    this.currentRolePermissions = rs.data;
                }).catch(utils.fns.err);

                // 所有请求已完成
                axios.all([psReady, psRoleReady]).then(axios.spread(() => {
                    this.psLoading = false;
                    this.psList.forEach(row => {
                        let v = this.currentRolePermissions.map(item => item.id).includes(row.id);
                        this.$refs.multipleTable.toggleRowSelection(row, v);
                    });
                })).catch(utils.fns.err);
            },
            editRow(index, rows) {
                this.editRole = rows[index];
                this.showEditRole = true;
            },
            deleteRow(index, rows) {
                this.$confirm(`你确认删除${rows[index].name}吗?`, '提示', {type: 'warning'}).then(() => {
                    api.requestDeleteRole(rows[index].id).then(rs => {
                        rows.splice(index, 1);
                    }).catch(utils.fns.err);
                }).catch(() => {
                });
            },
            getRoles() {
                this.loading = true;
                api.requestRoles(this.keyword).then(rs => {
                    this.roles = rs.data;
                    this.loading = false;
                }).catch(err => {
                    this.loading = false;
                    utils.fns.err(err);
                });
            },
            submitAddRole() {
                this.$refs.addRole.validate((valid) => {
                    if (valid) {
                        this.addLoading = true;
                        api.requestCreateRole(this.addRole).then(rs => {
                            this.addLoading = false;
                            this.showAddRole = false;
                            this.roles.push(rs.data);
                        }).catch(err => {
                            this.addLoading = false;
                            utils.fns.err(err);
                        });
                    } else {
                        return false;
                    }
                });
            },
            submitEditRole() {
                this.$refs.editRole.validate((valid) => {
                    if (valid) {
                        this.editLoading = true;
                        api.requestEditRole(this.editRole).then(rs => {
                            this.editLoading = false;
                            this.showEditRole = false;
                        }).catch(err => {
                            this.editLoading = false;
                            utils.fns.err(err);
                        });
                    } else {
                        return false;
                    }
                });
            },
            handlePsChange(val) {
                this.psListMultiple = val;
            },
            submitSyncPermissions() {
                let ids = this.psListMultiple.map(item => item.id);
                api.requestRoleSyncPermissions(this.currentRole.id, ids).then(rs => {
                    this.showPermissions = false;
                }).catch(utils.fns.err);
            },
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