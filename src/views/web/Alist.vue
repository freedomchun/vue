<template>
    <div>
        <el-table ref="articles" :data="articles" border tooltip-effect="dark" style="width: 100%"
                  v-loading="loading.article" @selection-change="save_multiple">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="id" label="ID" width="100"></el-table-column>
            <el-table-column prop="title" label="标题" show-overflow-tooltip></el-table-column>
            <el-table-column prop="click" label="点击量" sortable width="100"></el-table-column>
            <el-table-column prop="created_at" label="创建日期" sortable show-overflow-tooltip
                             width="200"></el-table-column>
            <el-table-column prop="user.name" label="发布人" show-overflow-tooltip width="150"></el-table-column>
            <el-table-column prop="created_at" label="最后更新" sortable show-overflow-tooltip
                             width="200"></el-table-column>
            <el-table-column fixed="right" label="操作" width="130">
                <template scope="scope">
                    <el-button-group>
                        <el-button type="primary" size="small" @click="edit(scope.row)">
                            修改
                        </el-button>
                        <el-button type="danger" size="small" @click="deleteRow(scope.row)">
                            删除
                        </el-button>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px; float: left;">
            <el-button type="danger" icon="delete" @click="deleteMultiple" :loading="loading.del">删除</el-button>
        </div>
        <el-pagination class="fenye" :current-page.sync="pagination.current_page" :page-size="pagination.per_page"
                       :total="pagination.total" @current-change="get_articles"
                       layout="total, prev, pager, next"></el-pagination>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'

    export default {
        watch: {
            '$route': 'fetchData'
        },
        computed: mapState({
            articles: state => state.article.articles,
            loading: state => state.article.loading,
            pagination: state => state.article.pagination,
            op: state => state.article.op,
        }),
        mounted() {
            this.fetchData()
        },
        methods: {
            ...mapMutations(['save_currentId', 'save_multiple']),
            ...mapActions(['get_articles', 'delete_articles']),
            fetchData() {
                let query = this.$route.query
                if (query) {
                    this.save_currentId(query.cid)
                }
                this.get_articles()
            },
            deleteRow(row) {
                this.$refs.articles.toggleRowSelection(row, true)
                this.deleteMultiple()
            },
            deleteMultiple() {
                let len = this.op.multipleSelection.length
                if (len > 0) {
                    this.$confirm(`你确定要这${len}条删除吗?`, '提示', {
                        type: 'warning'
                    }).then(() => {
                        this.delete_articles().then(rs => {
                            this.$message.success('删除成功')
                        }).catch(() => {
                        })
                    }).catch(() => {
                    })
                }
            },
            edit(row) {
                this.$router.push({name: 'articleEdit', params: {id: row.id}})
            }
        }
    }
</script>
<style>
    .fenye {
        float: right;
        margin: 20px 0;
    }
</style>