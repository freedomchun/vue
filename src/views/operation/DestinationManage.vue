<template>
    <section>
        <div class="grid-content bg-g">
            <el-form inline style="padding-top: 20px; padding-left: 20px;">
                <el-form-item>
                    <el-input placeholder="请输入目的地" v-model="mop.title"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="get_mddList">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button @click="mddForm">新建</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="mddList" border style="width: 100%; margin-top: 20px;" v-loading="loading.list">
            <el-table-column prop="is_show" label="状态" width="100">
                <template scope="scope">
                    <el-tag type="success" v-if="scope.row.is_show">激活</el-tag>
                    <el-tag type="danger" v-else>隐藏</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="cascader" label="地区" width="300">
                <template scope="scope">
                    <el-cascader class="nostyle" :options="locList" :props="props" v-model="scope.row.cascader" disabled style="width: 100%; border: none !important; background-color: none !important;"></el-cascader>
                </template>
            </el-table-column>
            <el-table-column prop="title" label="目的地" width="200"></el-table-column>
            <el-table-column prop="amount_count" label="活动数"></el-table-column>
            <el-table-column prop="raider_count" label="攻略数"></el-table-column>
            <el-table-column prop="food_count" label="美食数"></el-table-column>
            <el-table-column prop="minsu_count" label="民宿数"></el-table-column>
            <el-table-column prop="created_at" label="创建时间" show-overflow-tooltip></el-table-column>
            <el-table-column fixed="right" label="操作" width="170">
                <template scope="scope">
                    <el-button-group>
                        <el-button style="margin-left: 10px;" type="primary" size="small" @click="mEdit(scope.row)">修改
                        </el-button>
                        <el-button type="danger" size="small" @click="deleteMdd(scope.row)">删除</el-button>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="fenye" :current-page.sync="pagination.current_page" :page-size="pagination.per_page"
                       :total="pagination.total" layout="total, prev, pager, next">
        </el-pagination>

        <el-dialog :title="mop.current.id ? '修改' : '创建'" v-model="mop.show" :close-on-click-modal="false" size="tiny">
            <el-form label-position="top" :model="mop.current" ref="mdd">
                <el-form-item label="选择所在地" prop="cascader" :rules="[{ required: true, message: '选择所在地'}]">
                    <el-cascader placeholder="可搜索" :options="locList" v-model="mop.current.cascader" :props="props"
                                 filterable change-on-select></el-cascader>
                </el-form-item>
                <el-form-item label="目的地" prop="title"
                              :rules="[{ required: true, message: '目的地不能为空'}, {min: 2, max: 50, message: '长度在2-50字'}]">
                    <el-input v-model="mop.current.title"></el-input>
                </el-form-item>
                <el-form-item label="封面图片">
                    <el-input v-model="mop.current.thumb"></el-input>
                    <p>建议尺寸：1920*470</p>
                </el-form-item>
                <el-form-item label="目的地描述">
                    <el-input type="textarea" placeholder="目的地描述" v-model="mop.current.description"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-switch v-model="mop.current.is_show" on-text="显示" off-text="隐藏"></el-switch>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="mop.show = false">取消</el-button>
                <el-button type="primary" @click="submitMdd" :loading="loading.add">提交</el-button>
            </div>
        </el-dialog>
    </section>
</template>
<script>
    import {mapState, mapMutations, mapActions} from 'vuex'

    export default {
        computed: mapState({
            locList: state => state.loc.list,
            props: state => state.loc.props,

            mddList: state => state.mdd.list,
            pagination: state => state.mdd.pagination,
            mop: state => state.mdd.op,
            loading: state => state.mdd.loading,
        }),
        mounted() {
            if (this.locList.length === 0) {
                this.get_locList()
            }
            if (this.mddList.length === 0) {
                this.get_mddList()
            }
        },
        methods: {
            ...mapActions(['get_locList', 'get_mddList', 'submit_mdd', 'delete_mdd']),
            ...mapMutations(['clear_current_mdd']),
            mddForm() {
                this.mop.show = true
                this.clear_current_mdd()
            },
            submitMdd() {
                this.$refs.mdd.validate((valid) => {
                    if (valid) {
                        this.submit_mdd().then(rs => {
                            this.mop.show = false
                            this.$message.success('操作成功!')
                        }).catch(() => {
                        })
                    } else {
                        return false
                    }
                })
            },
            mEdit(mdd) {
                this.mop.show = true
                this.mop.current = Object.assign({}, mdd)
            },
            deleteMdd(mdd) {
                this.$confirm(`你确定要删除 ${mdd.title} 吗?`, '提示', {
                    type: 'warning'
                }).then(() => {
                    this.delete_mdd(mdd).then(rs => {
                        this.get_mddList()
                        this.$message.success('删除成功')
                    }).catch(() => {
                    })
                }).catch(() => {
                })
            }
        }
    }
</script>
<style scoped>
    .bg-g {
        background: #eeeeee;
        border-radius: .2em;
    }
    .el-cascader .el-icon-caret-bottom { display: none !important;}
    .nostyle .el-input.is-disabled .el-input__inner {
    background: none !important;
    border: none !important;}
    .nostyle i{ display: none;}
    .nostyle .el-input__icon{ display: none !important; }
    .el-input__icon{ display: none !important;}
</style>