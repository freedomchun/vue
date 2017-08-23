<template>
    <el-col :span="4">
        <div class="artaside">
            <el-tree :data="categorys" :props="props" ref="tree" highlight-current node-key="id" v-loading="loading.category"></el-tree>
        </div>
    </el-col>
</template>
<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        computed: mapState({
            categorys: state => state.article.categorys,
            loading: state => state.article.loading,
            op: state => state.article.op,
            props: state => state.article.props,
        }),
        mounted() {
            this.get_categorys()
        },
        methods: mapActions(['get_categorys']),
    }
</script>

<style scoped>
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