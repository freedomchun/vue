<template>
    <div class="cont">
        <el-form :model="currentArticle" ref="article" label-position="top">
            <el-form-item label="所属栏目" prop="category_id" :rules="[{required: true, message: '请选择所属栏目'}]">
                <el-select v-model="currentArticle.category_id" placeholder="请选择所属栏目">
                    <el-option v-for="item in categorys_level" :key="item.id" :label="'----'.repeat(item.level) + item.title" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="文章标题" prop="title" :rules="[{required: true, message: '请输入文章标题', trigger: 'blur'}]">
                <el-input v-model="currentArticle.title" placeholder="请输入文章名称"></el-input>
            </el-form-item>
            <el-form-item label="关键词">
                <el-input v-model="currentArticle.keywords" placeholder="请输入关键词 以英文逗号隔开"></el-input>
            </el-form-item>
            <el-form-item label="简介">
                <el-input type="textarea" v-model="currentArticle.description" placeholder="请输入简介内容"></el-input>
            </el-form-item>
            <el-form-item label="文章内容">
                <mavon-editor style="height: 500px" v-model="currentArticle.article_data.content"></mavon-editor>
            </el-form-item>
            <el-form-item>
                <el-button @click="$router.go(-1)">取消</el-button>
                <el-button type="primary" @click="submit" :loading="loading.edit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {mavonEditor} from 'mavon-editor';
    import 'mavon-editor/dist/css/index.css'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            mavonEditor
        },
        computed: mapState({
            currentArticle: state => state.article.currentArticle,
            loading: state => state.article.loading,
            img_files: state => state.article.img_files,
            categorys_level: state => state.article.categorys_level,
        }),
        methods: {
            ...mapActions(['get_article', 'updateArticle', 'createArticle', 'upload_images', 'get_categorys_level']),
            submit() {
                this.$refs.article.validate((valid) => {
                    if (valid) {
                        this.currentArticle.id ? this.update() : this.add()
                    } else {
                        return false
                    }
                })
            },
            add() {
                this.createArticle().then(rs => {
                    this.$message.success('添加成功!')
                    this.$router.go(-1)
                }).catch(() => {
                })
            },
            update() {
                this.updateArticle().then(rs => {
                    this.$message.success('修改成功!')
                    this.$router.go(-1)
                }).catch(() => {
                })
            }
        },
        mounted() {
            let params = this.$route.params
            if (params.id) {
                this.get_article(params.id)
            }
            this.get_categorys_level()
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