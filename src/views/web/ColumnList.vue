<template>
    <section>
        <div class="grid-content bg-g">
            <el-form inline style="padding-top: 20px; padding-left: 20px;">
                <el-form-item>
                    <el-input v-model="op.title" placeholder="请输入栏目"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getList">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="showAddFrom">新建</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="list" v-loading="loading.list" border style="width: 100%; margin-top: 20px;">
            <el-table-column prop="id" label="ID" sortable width="100"></el-table-column>
            <el-table-column prop="title" label="栏目名" sortable>
                <template scope="scope">
                    {{ '----'.repeat(scope.row.level) + scope.row.title }}
                </template>
            </el-table-column>
            <el-table-column prop="articles_count" label="文章数量" width="200" sortable></el-table-column>
            <el-table-column prop="created_at" label="创建日期" width="200" sortable></el-table-column>
            <el-table-column prop="is_show" label="状态" width="100">
                <template scope="scope">
                    <el-tag type="success" v-if="scope.row.is_show">显示</el-tag>
                    <el-tag type="danger" v-else>隐藏</el-tag>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="170">
                <template scope="scope">
                    <el-button-group>
                        <el-button type="primary" size="small" @click="editFrom(scope.$index, list)">
                            修改
                        </el-button>
                        <el-button type="danger" size="small" @click="delFrom(scope.$index, list)">
                            删除
                        </el-button>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>

        <!--新增界面-->
        <el-dialog title="新建栏目" v-model="op.showAdd" :close-on-click-modal="false" size="tiny">
            <el-form :model="current" ref="addFrom" label-position="top">
                <el-form-item label="上级栏目" prop="parent_id">
                    <el-select placeholder="请选择" style="width: 100%;" v-model="current.parent_id">
                        <el-option :key="0" label="顶级栏目" :value="0"></el-option>
                        <el-option v-for="item in list" :key="item.id" :label="'----'.repeat(item.level) + item.title"
                                   :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="栏目名称" prop="title" :rules="[{ required: true, message: '栏目名不能为空'}]">
                    <el-input v-model="current.title" placeholder="请输入栏目名称"></el-input>
                </el-form-item>
                <el-form-item label="SEO 标题">
                    <el-input v-model="current.seo_title" placeholder="请输入SEO 标题"></el-input>
                </el-form-item>
                <el-form-item label="SEO 关键词">
                    <el-input v-model="current.seo_keywords" placeholder="请输入SEO 关键词"></el-input>
                </el-form-item>
                <el-form-item label="SEO 网页描述">
                    <el-input type="textarea" v-model="current.seo_description" placeholder="请输入SEO 网页描述"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-switch v-model="current.is_show" on-text="显示" off-text="隐藏"></el-switch>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="op.showAdd = false">取消</el-button>
                <el-button type="primary" :loading="loading.add" @click="addSubmit">提交</el-button>
            </div>
        </el-dialog>

        <!--修改界面-->
        <el-dialog title="修改栏目" v-model="op.showEdit" :close-on-click-modal="false" size="tiny">
            <el-form :model="current" ref="editFrom" label-position="top">
                <el-form-item label="上级栏目" prop="parent_id">
                    <el-select placeholder="请选择" style="width: 100%;" v-model="current.parent_id">
                        <el-option :key="0" label="顶级栏目" :value="0"></el-option>
                        <el-option v-for="item in list" :key="item.id" :label="'----'.repeat(item.level) + item.title"
                                   :value="item.id" :disabled="item.id === current.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="栏目名称" prop="title" :rules="[{ required: true, message: '栏目名不能为空'}]">
                    <el-input v-model="current.title" placeholder="请输入栏目名称"></el-input>
                </el-form-item>
                <el-form-item label="SEO 标题">
                    <el-input v-model="current.seo_title" placeholder="请输入SEO 标题"></el-input>
                </el-form-item>
                <el-form-item label="SEO 关键词">
                    <el-input v-model="current.seo_keywords" placeholder="请输入SEO 关键词"></el-input>
                </el-form-item>
                <el-form-item label="SEO 网页描述">
                    <el-input type="textarea" v-model="current.seo_description" placeholder="请输入SEO 网页描述"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-switch v-model="current.is_show" on-text="显示" off-text="隐藏"></el-switch>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="op.showEdit = false">取消</el-button>
                <el-button type="primary" :loading="loading.edit" @click="editSubmit">提交</el-button>
            </div>
        </el-dialog>
    </section>
</template>
<script>
    import {mapState, mapMutations, mapActions} from 'vuex'

    export default {
        computed: mapState({
            list: state => state.category.list,
            loading: state => state.category.loading,
            op: state => state.category.op,
            current: state => state.category.current,
        }),
        mounted() {
            if (0 === this.list.length) {
                this.getList()
            }
        },
        methods: {
            ...mapMutations(['save_current', 'clear_current']),
            ...mapActions(['getList', 'addCategory', 'editCategory', 'delCategory']),
            showAddFrom() {
                this.op.showAdd = true
                this.clear_current()
            },
            addSubmit() {
                this.$refs.addFrom.validate((valid) => {
                    if (valid) {
                        this.addCategory().then(() => {
                            this.$message.success('新建成功!')
                            this.getList()
                        }).catch(() => {
                        })
                    } else {
                        return false
                    }
                })
            },
            editSubmit() {
                this.$refs.editFrom.validate((valid) => {
                    if (valid) {
                        this.editCategory().then(rs => {
                            this.$message.success('修改成功!')
                            this.getList()
                        }).catch(() => {
                        })
                    } else {
                        return false
                    }
                })
            },
            delFrom(index, rows) {
                this.$confirm(`确定要删除 ${rows[index].title} ?`, '提示', {
                    type: 'warning'
                }).then(() => {
                    this.delCategory(rows[index].id).then(rs => {
                        this.$message.success('删除成功!')
                        rows.splice(index, 1);
                    }).catch(() => {
                    })
                }).catch(() => {
                })
            },
            editFrom(index, rows) {
                this.op.showEdit = true
                this.save_current(rows[index])
            },
        }
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