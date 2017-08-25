<template>
    <div class="cont">
        <el-form :model="currentArticle" ref="currentArticle" label-position="top">
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
                <mavon-editor style="height: 100%" v-model="currentArticle.article_data.content" @imgAdd="imgAdd"
                              @imgDel="imgDel"></mavon-editor>
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
        }),
        methods: {
            ...mapActions(['get_article', 'update_article', 'upload_images']),
            submit() {
                if (this.currentArticle.article_data.content.length === 0) {
                    return this.$message('请输入文章内容!')
                }
                this.update_article().then(rs => {
                    this.$message.success('修改成功!')
                    this.$router.go(-1)
                }).catch(() => {
                })
            },
            imgAdd(index, file) {
                this.img_files.splice(index, 0, file)
//                this.$imgUpdateByUrl(index, 'http://fanyi.baidu.com/static/translation/img/header/logo_cbfea26.png')
            },
            imgDel(index) {
                this.img_files.splice(index, 1)
            }
        },
        mounted() {
            let params = this.$route.params
            if (params) {
                this.get_article(params.id)
            }
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