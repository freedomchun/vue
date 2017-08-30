<template>
    <section>
        <div class="bg-g">
            <el-form inline style="padding-top: 20px;">
                <el-form-item>
                    <el-input placeholder="请输入文章标题" v-model="op.title"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="get_articles">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button @click="toAdd">添加文章</el-button>
                </el-form-item>
            </el-form>
            <el-row :span="24" :gutter="10">
                <el-col :span="4">
                    <div class="artaside">
                        <el-tree :data="categorys" :props="props" ref="tree" highlight-current node-key="id"
                                 v-loading="loading.category" default-expand-all @current-change="currentClick"
                                 :expand-on-click-node="false"></el-tree>
                    </div>
                </el-col>
                <el-col :span="20">
                    <router-view></router-view>
                </el-col>
            </el-row>
        </div>
    </section>
</template>
<script>
    import {mapState, mapMutations, mapActions} from 'vuex'

    export default {
        computed: mapState({
            categorys: state => state.article.categorys,
            loading: state => state.article.loading,
            op: state => state.article.op,
            props: state => state.article.props,
            pagination: state => state.article.pagination,
        }),
        mounted() {
            if (0 === this.categorys.length) {
                this.get_categorys()
            }
        },
        methods: {
            ...mapMutations(['clear_currentArticle']),
            ...mapActions(['get_categorys', 'get_articles']),
            currentClick(data) {
                this.pagination.current_page = 1
                this.$router.push({name: 'alist', query: {cid: data.id}})
            },
            articles() {
                this.pagination.current_page = 1
                this.get_articles()
            },
            toAdd() {
                this.clear_currentArticle()
                this.$router.push({name: 'articleAdd'})
            }
        },
    }
</script>

<style scoped>
    .bg-g {
        background: #eeeeee;
        border-radius: .2em;
        padding: 20px;
    }

    .artmain {
        background-color: #fff;
        border: 1px solid #c9c8c8;
        box-sizing: border-box;
        height: auto;
        min-height: 200px;
    }

    .artaside {
        min-width: 200px;
        background-color: #fff;
        border: 1px solid #c9c8c8;
        box-sizing: border-box;
        height: auto;
    }

    .artsubmenu {
        height: 100%;
        background-color: #fff;
    }

    .artaside .el-menu {
        height: 100%;
        background: #fff;
    }

    .artbg {
        background-color: #fff;
        /*border-bottom: 1px solid #f0eeee;*/
    }

    .artaside .el-menu-item.is-active {
        color: #333;
        background-color: #e4e8f1;
    }

    .artaside .submenu__title:hover {
        background-color: #e4e8f1;
        color: #333;
    }

    .artaside .el-menu-item:hover,
    .artaside .el-submenu__title:hover {
        background-color: #e4e8f1;
        color: #333;
    }
</style>