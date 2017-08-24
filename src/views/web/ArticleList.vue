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
                    <router-link :to="{name:'articleEdit'}" class="addmain">添加文章</router-link>
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
    import {mapState, mapActions} from 'vuex'

    export default {
        computed: mapState({
            categorys: state => state.article.categorys,
            loading: state => state.article.loading,
            op: state => state.article.op,
            props: state => state.article.props,
            pagination: state => state.article.pagination,
        }),
        mounted() {
            this.get_categorys()
        },
        methods: {
            ...mapActions(['get_categorys', 'get_articles']),
            currentClick(data) {
                this.pagination.current_page = 1
                this.$router.push({name: 'alist', query: {cid: data.id}})
            },
            articles() {
                this.pagination.current_page = 1
                this.get_articles()
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

    .addmain {
        background: #4db3ff;
        color: white;
        margin: 0;
        padding: 10px 15px;
        border-radius: 4px;
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        font-size: 14px;
        box-sizing: border-box;
        outline: 0;
        text-align: center;
        text-decoration: none;
        border: 1px solid #c4c4c4;
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