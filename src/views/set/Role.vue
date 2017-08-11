<template>
    <section>
        <div class="grid-content bg-g">
            <el-form :inline="true" :model="filters" style="padding-top: 20px; padding-left: 20px;">
                <el-form-item>
                    <el-input placeholder="请输入关键词"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">新建</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="tableData4" border style="width: 100%; margin-top: 20px;">
            <el-table-column prop="sort" label="排序" width="100" sortable></el-table-column>
            <el-table-column prop="role_name" label="名称" width="200"></el-table-column>
            <el-table-column prop="terms" label="检测词" width="150"></el-table-column>
            <el-table-column prop="level" label="层级" width="150"></el-table-column>
            <el-table-column prop="intro" label="简介"></el-table-column>
            <el-table-column prop="date" label="创建日期" width="150"></el-table-column>
            <el-table-column fixed="right" label="操作">
                <template scope="scope">
                    <el-button type="primary" size="small">权限</el-button>
                    <el-button type="primary" size="small">修改</el-button>
                    <el-button type="danger" @click.native.prevent="deleteRow(scope.$index, tableData4)" size="small">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--分页-->
        <el-col :span="24" class="toolbar" style="margin-top: 20px;">
            <el-button type="danger">批量删除</el-button>
            <el-pagination layout="prev, pager, next" :total="1000" style="float:right;">
            </el-pagination>
        </el-col>
        <!--新增界面-->
        <el-dialog title="新增菜单" v-model="addFormVisible" :close-on-click-modal="false">
            <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                <el-form-item label="名称" prop="name">
                    <el-input v-model="addForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="图标">
                    <el-input v-model="addForm.icon"></el-input>
                </el-form-item>
                <el-form-item label="路由">
                    <el-input v-model="addForm.rute"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-dropdown>
                        <el-button>
                            请选择状态<i class="el-icon-caret-bottom el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>开启</el-dropdown-item>
                            <el-dropdown-item>关闭</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-form-item>
                <el-form-item label="上级菜单">
                    <el-dropdown>
                        <el-button>
                            请选择菜单<i class="el-icon-caret-bottom el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>全局配置</el-dropdown-item>
                            <el-dropdown-item>...系统概况</el-dropdown-item>
                            <el-dropdown-item>...菜单管理</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-form-item>
                <el-form-item label="排序">
                    <el-input v-model="addForm.sort"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="addFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="handleAdd" :loading="addLoading">提交</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                addLoading: false,
                filters: {
                    name: ''
                },
                addFormVisible: false, //新增界面是否显示
                addFormRules: {
                    name: [{
                        required: true,
                        message: '请输入名称',
                        trigger: 'blur'
                    }]
                },
                //新增界面数据
                addForm: {
                    sort: 1,
                    role_name: '超级管理员',
                    terms: 'admin',
                    level: 1,
                    intro: '超级管理员组',
                    date: '2016-05-03',
                },

                tableData4: [{
                    sort: 1,
                    role_name: '超级管理员',
                    terms: 'admin',
                    level: 1,
                    intro: '超级管理员组',
                    date: '2016-05-03',
                }, {
                    sort: 2,
                    role_name: '网站编辑',
                    terms: 'edit',
                    level: 2,
                    intro: '网站编辑',
                    date: '2016-05-03',
                }, {
                    sort: 3,
                    role_name: '测试',
                    terms: 'test',
                    level: 5,
                    intro: '测试',
                    date: '2016-05-03',
                }]
            }
        },
        methods: {
            handleAdd: function () {
                this.addFormVisible = true;
                this.addForm = {
                    role_name: '超级管理员',
                };
            },

            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
        },
    }
</script>

<style scoped>
    .bg-g {
        background: #eeeeee;
        border-radius: .2em;
    }
</style>