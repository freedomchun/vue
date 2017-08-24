<template>
    <div class="bg-g" v-loading="loading.info">
        <el-form label-position="top" :model="info">
            <el-form-item label="网站名称">
                <el-input v-model="info.name"></el-input>
            </el-form-item>
            <el-form-item label="网站关键字">
                <el-input v-model="info.keywords"></el-input>
            </el-form-item>
            <el-form-item label="网站描述">
                <el-input v-model="info.description"></el-input>
            </el-form-item>
            <el-form-item label="版权/备案号">
                <el-input v-model="info.copy"></el-input>
            </el-form-item>
            <el-form-item label="公用代码">
                <el-input type="textarea" v-model="info.code"></el-input>
            </el-form-item>
            <el-form-item label="PC端代码">
                <el-input type="textarea" v-model="info.code_pc"></el-input>
            </el-form-item>
            <el-form-item label="移动端代码">
                <el-input type="textarea" v-model="info.code_mobile"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="doUpdate" :loading="loading.edit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        computed: mapState({
            info: state => state.web.info,
            loading: state => state.web.loading,
        }),
        mounted() {
            this.getInfo()
        },
        methods: {
            ...mapActions(['updateInfo', 'getInfo']),
            doUpdate() {
                this.updateInfo().then(rs => {
                    this.$message.success('已更新成功！')
                })
            }
        },
    }
</script>
<style scoped>
    .bg-g {
        background: #eeeeee;
        border-radius: .2em;
        padding: 20px
    }
</style>