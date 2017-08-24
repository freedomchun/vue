<template>
    <div class="cont">
        <el-form :model="addArticle" ref="addArticle" label-position="top">
            <el-form-item label="文章标题" prop="title">
                <el-input v-model="addArticle.title" placeholder="请输入文章名称"></el-input>
            </el-form-item>
            <el-form-item label="关键词">
                <el-input v-model="addArticle.keyword" placeholder="请输入关键词 用空格或逗号隔开"></el-input>
            </el-form-item>
            <el-form-item label="简介">
                <el-input type="textarea" v-model="addArticle.description" placeholder="请输入简介内容"></el-input>
            </el-form-item>
            <el-form-item label="文章内容">
                <mavon-editor style="height: 500px" v-model="addArticle.content"></mavon-editor>
            </el-form-item>
            <el-form-item>
                <el-button @click="$router.go(-1)">取消</el-button>
                <el-button type="primary">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {mavonEditor} from 'mavon-editor';
    import 'mavon-editor/dist/css/index.css'
    import {mapState} from 'vuex'

    export default {
        components: {
            mavonEditor
        },
        computed: mapState({
            addArticle: state => state.article.addArticle,
        }),
        mounted() {
            console.log(this.$route.params)
        }
    }
</script>
<style>
    .cont {
        background-color: #fff;
        border: 1px solid #c9c8c8;
        box-sizing: border-box;
        padding: 20px;
    }
</style>