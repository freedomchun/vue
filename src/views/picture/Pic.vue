<template>
    <section>
        <el-collapse-transition>
            <el-upload style="margin-bottom: 15px;" v-if="showUploadDiv"
                       :action="action" :data="appendInfo"
                       :headers="{Accept: 'application/json, text/plain, */*'}"
                       :on-remove="handleRemove" :file-list="fileList" :on-progress="onProgress"
                       :on-preview="handlePreview" :before-upload="beforeUpload"
                       multiple list-type="picture-card">
                <i class="el-icon-plus"></i>
            </el-upload>
        </el-collapse-transition>

        <el-dialog v-model="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>

        <div class="grid-content bg-g">
            <el-form inline>
                <el-form-item>
                    <el-input v-model="filterText" placeholder="按文件夹名搜索"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" icon="upload" @click="toggleUpload">上传图片</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="plus" @click="addFileForm">新建文件夹</el-button>
                </el-form-item>
            </el-form>
            <el-row :gutter="5">
                <el-col :lg="4" :md="8">
                    <div class="pic_title">
                        <h3 class="pic_h3">图片目录</h3>
                    </div>
                    <el-tree :data="dirs" :props="defaultProps" ref="dirs" highlight-current v-loading="dirLoading"
                             default-expand-all
                             :expand-on-click-node="false" :filter-node-method="filterNode"
                             @node-click="handleNodeClick"></el-tree>
                </el-col>
                <el-col :lg="20" :md="16">
                    <div class="pic_title">
                        <el-checkbox style="margin-right: 20px;" :indeterminate="isIndeterminate" v-model="checkAll"
                                     @change="handleCheckAllChange">全选
                        </el-checkbox>
                        <el-button type="danger" icon="delete" @click="deleteSelect" :disabled="isDeleting">删除
                        </el-button>
                    </div>
                    <div class="bg-white" v-loading="attachmentLoading">
                        <el-checkbox-group v-model="checkedAttachments" @change="handleCheckedAttachmentsChange">
                            <el-row>
                                <el-col :lg="6" :md="8" v-for="(attachment, index) in attachments" :key="attachment.id">
                                    <el-card :body-style="{ padding: '0px' }">
                                        <img :src="imagecut(attachment.url, 300)" class="image">
                                        <div class="hao_title">
                                            <span>{{ attachment.name }}</span>
                                        </div>
                                        <div class="bottom clearfix">
                                            <el-checkbox class="check" :label="attachment.id" :key="attachment.id">{{
                                                attachment.file_size}}
                                            </el-checkbox>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </el-checkbox-group>
                        <el-pagination class="fenye" layout="total, prev, pager, next" :total="attachmentTotal"
                                       :page-size="pageSize" @current-change="currentPageChange"></el-pagination>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
    import * as api from '@/api/attachment'

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
                showUploadDiv: false,
                fileList: [],
                action: '',
                appendInfo: {},
                dialogImageUrl: '',
                dialogVisible: false,
                isIndeterminate: false,
                checkAll: false,
                checkedAttachments: [],
                isDeleting: false,
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
            imagecut(url, width, height = false) {
                return `${process.env.BASE_HOST}/thumb/${width}${height ? `/${height}` : ''}?url=${encodeURI(url)}`;
            },
            getAttDirs() {
                this.dirLoading = true;
                api.requestAttDirs().then(rs => {
                    this.dirs = rs.data;
                    this.dirLoading = false;
                });
            },
            getAttachments() {
                this.attachmentLoading = true;
                let dir_id = typeof this.currentDir.id === 'undefined' ? null : this.currentDir.id;
                let o = {pageSize: this.pageSize, page: this.currentPage, dir_id, is_image: 'T'};
                api.requestAttachments(o).then(rs => {
                    this.attachmentTotal = rs.data.total;
                    this.attachments = rs.data.data;
                    this.attachmentLoading = false;
                })
            },
            addFileForm() {
                let parent_id = typeof this.currentDir.id === 'undefined' ? 0 : this.currentDir.id;
                let msg = parent_id === 0 ? '建立顶级文件夹' : `【${this.currentDir.title}】正在建立子文件夹`;
                this.$prompt(msg, '新建文件夹', {
                    confirmButtonText: '建立',
                    inputPattern: /.{3,20}/,
                    inputErrorMessage: '输入3-20个字符。'
                }).then(({value}) => {
                    api.requestCreateDir({parent_id, title: value}).then(rs => {
                        if (parent_id === 0) {
                            this.dirs.push(rs.data);
                        } else {
                            console.log(this.dirs[index].all_children)
                            let index = this.dirs.indexOf(this.currentDir);
                            this.dirs[index].all_children.push(rs.data);
                        }
                    }).catch(err => {
                    });
                }).catch(() => {
                });
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.title.indexOf(value) !== -1;
            },
            handleNodeClick(data) {
                if (this.currentDir !== data) {
                    this.currentDir = data;
                    this.getAttachments();
                }
            },
            currentPageChange(val) {
                this.currentPage = val;
                this.getAttachments();
            },
            toggleUpload() {
                if (typeof this.currentDir.id === 'undefined') {
                    this.$message('选择图片目录！');
                    return;
                }
                this.action = `${process.env.BASE_API}/attachment`;
                this.appendInfo = {api_token: this.$store.getters.token, dir_id: this.currentDir.id, is_image: 'T'};
                this.showUploadDiv = !this.showUploadDiv;
            },
            handleRemove(file, fileList) {
                if (file !== null && typeof file.response.id !== 'undefined') {
                    api.requestDeleteAttachment([file.response.id]).then(rs => {
                        this.getAttachments();
                    });
                }
            },
            onProgress(event, file, fileList) {
                if (event.loaded === event.total) {
                    this.getAttachments();
                }
            },
            beforeUpload(file) {
                let arrType = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp'];
                let isImage = arrType.includes(file.type);
                let isLt2M = file.size / 1024 / 1024 < 2;

                if (!isImage) {
                    this.$message.error('上传图片只能是 图片 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 2MB!');
                }
                return isImage && isLt2M;
            },
            handlePreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleCheckAllChange(event) {
                this.isIndeterminate = false;
                this.checkedAttachments = event.target.checked ? this.attachments.map(item => item.id) : [];
            },
            handleCheckedAttachmentsChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.attachments.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.attachments.length;
            },
            deleteSelect() {
                if (!!this.checkedAttachments.length) {
                    this.attachmentLoading = true;
                    this.isDeleting = true;
                    api.requestDeleteAttachment(this.checkedAttachments).then(rs => {
                        this.checkedAttachments = [];
                        this.isIndeterminate = false;
                        this.checkAll = false;
                        this.attachmentLoading = false;
                        this.isDeleting = false;
                        this.getAttachments();
                    });
                }
            }
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
        top: 0;
        left: 0;
    }

    .fenye {
        text-align: center;
        margin: 20px 0;
    }
</style>