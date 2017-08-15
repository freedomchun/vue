<template>
    <section>
        <div class="grid-content bg-g">
            <el-form inline>
                <el-form-item>
                    <el-input v-model="filterText" placeholder="按文件夹名搜索"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning">上传图片</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addFileForm">新建文件夹</el-button>
                </el-form-item>
            </el-form>
            <el-row :gutter="5">
                <el-col :span="4">
                    <div class="pic_title">
                        <h3 class="pic_h3">图片目录</h3>
                    </div>
                    <el-tree :data="dirs" :props="defaultProps" ref="dirs" highlight-current v-loading="dirLoading"
                             :expand-on-click-node="false"
                             default-expand-all :filter-node-method="filterNode"
                             @node-click="handleNodeClick"></el-tree>
                </el-col>
                <el-col :span="20">
                    <div class="pic_title">
                        <el-checkbox style="margin-right: 20px;">全选</el-checkbox>
                        <el-button type="danger" style="margin-right: 20px; ">删除</el-button>
                    </div>
                    <div class="bg-white">
                        <el-row v-loading="attachmentLoading">
                            <el-col :lg="6" :md="8" v-for="(attachment, index) in attachments" :key="attachment.id">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img :src="attachment.path" class="image">
                                    <div class="hao_title">
                                        <span>{{ attachment.title }}</span>
                                    </div>
                                    <div class="bottom clearfix">
                                        <el-checkbox class="check"></el-checkbox>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                        <el-pagination class="fenye" layout="total, prev, pager, next" :total="attachmentTotal"
                                       :page-size="pageSize" @current-change="currentPageChange"></el-pagination>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                dirLoading: false,
                dirs: [],
                defaultProps: {
                    label: 'title',
                    children: 'all_children',
                },
                selectedOptions: [],
                filterText: '',
                currentDir: {},
                attachmentLoading: false,
                pageSize: 16,
                currentPage: 1,
                attachmentTotal: 0,
                attachments: [],
            };
        },
        watch: {
            filterText(val) {
                this.$refs.dirs.filter(val);
            }
        },
        mounted() {
            this.getAttDirs();
            this.getAttachments();
        },
        methods: {
            getAttDirs() {
                this.dirLoading = true;
                api.requestAttDirs().then(rs => {
                    this.dirs = rs.data;
                    this.dirLoading = false;
                }).catch(utils.fns.err);
            },
            getAttachments() {
                this.attachmentLoading = true;
                let dir_id = typeof this.currentDir.id === 'undefined' ? null : this.currentDir.id;
                let o = {pageSize: this.pageSize, page: this.currentPage, dir_id};
                api.requestAttachments(o).then(rs => {
                    this.attachmentTotal = rs.data.total;
                    this.attachments = rs.data.data;
                    this.attachmentLoading = false;
                }).catch(utils.fns.err);
            },
            addFileForm() {
                this.$prompt('请输入文件夹名', '新建文件夹').then(({value}) => {
                    console.log(value)
                }).catch(() => {
                });
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.title.indexOf(value) !== -1;
            },
            handleNodeClick(data) {
                this.currentDir = data;
                this.getAttachments();
            },
            currentPageChange(val) {
                this.currentPage = val;
                this.getAttachments();
            },
        }
    };
</script>

<style scoped>
    .bg-g {
        padding: 20px;
        background: #eeeeee;
        border-radius: .2em;
    }

    .pic_title {
        padding: 0 20px;
        background: #f6f6f6;
        line-height: 50px;
        border: 1px solid #d1dbe5;
        border-bottom: none !important;
    }

    .pic_h3 {
        text-align: center;
    }

    .bg-white {
        background: #fff;
        width: 100%;
        border: 1px solid #d1dbe5;
        padding: 10px 0;
        box-sizing: border-box;
    }

    .time {
        font-size: 14px;
        color: #999;
    }

    .hao_title {
        padding: 10px;
        line-height: 22px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .check {
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .el-card {
        margin: 10px 20px;
        position: relative;
    }

    .bottom {
        position: absolute;
        top: 0px;
        left: 0px;
    }

    .fenye {
        text-align: center;
        margin: 20px 0;
    }
</style>