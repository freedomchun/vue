<template>
    <section class="grid-content bg-g">
        <el-collapse-transition>
            <el-upload style="margin-bottom: 15px;" v-if="upload.show"
                       :action="upload.url" :data="upload.data" :headers="upload.headers"
                       :on-preview="uploadPreview" :on-remove="uploadRemove" :on-progress="uploadProgress"
                       :before-upload="beforeUpload" multiple list-type="picture-card">
                <i class="el-icon-plus"></i>
            </el-upload>
        </el-collapse-transition>

        <el-dialog v-model="upload.dialog.show" size="tiny">
            <img width="100%" :src="upload.dialog.imageUrl">
        </el-dialog>

        <el-form inline>
            <el-form-item>
                <el-input placeholder="按文件夹名搜索" @input="searchInput" v-model="op.searchDirWord"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="warning" icon="upload" @click="toggleUpload">上传图片</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="plus" @click="showFolderDialog">新建文件夹</el-button>
            </el-form-item>
        </el-form>
        <el-row :gutter="5">
            <el-col :lg="4" :md="8">
                <div class="pic_title">
                    <h3 class="pic_h3">图片目录</h3>
                </div>
                <el-tree :data="dirs" :props="props" ref="tree" highlight-current v-loading="loading.dir"
                         @node-click="dirClick" :filter-node-method="searchDir" node-key="id"
                         :render-content="renderContent"></el-tree>
            </el-col>
            <el-col :lg="20" :md="16">
                <div class="pic_title">
                    <el-checkbox style="margin-right: 20px;" :indeterminate="sel.indeterminate" v-model="sel.checkAll"
                                 @change="checkAllChange">全选
                    </el-checkbox>
                    <el-button type="danger" @click="deleteSelect" :disabled="loading.del">
                        <span v-if="loading.del"><i class="el-icon-loading"></i> 进行中…</span>
                        <span v-else><i class="el-icon-delete"></i> 删除</span>
                    </el-button>
                </div>
                <div class="bg-white" v-loading="loading.att">
                    <el-checkbox-group v-model="sel.checkedAtts" @change="checkedAttsChange">
                        <el-row>
                            <el-col :lg="6" :md="8" v-for="(att, index) in atts" :key="att.id">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img :src="imagecut(att.url, 300)" class="image">
                                    <div class="hao_title">
                                        <span>{{ att.name }}</span>
                                    </div>
                                    <div class="bottom clearfix">
                                        <el-checkbox class="check" :label="att.id" :key="att.id">{{ att.file_size }}
                                        </el-checkbox>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-checkbox-group>
                    <el-pagination class="fenye" layout="total, prev, pager, next" @current-change="getAtts"
                                   :total="pagination.total"
                                   :current-page.sync="pagination.current_page"
                                   :page-size="pagination.per_page"></el-pagination>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'

    export default {
        computed: {
            ...mapState({
                dirs: state => state.pic.dirs,
                atts: state => state.pic.atts,
                props: state => state.pic.props,
                loading: state => state.pic.loading,
                pagination: state => state.pic.pagination,
                op: state => state.pic.op,
                upload: state => state.pic.upload,
                sel: state => state.pic.sel,
            })
        },
        mounted() {
            this.getDirs()
            this.getAtts()
        },
        methods: {
            ...mapMutations(['setCurrentDir', 'setUploadInfo', 'uploadPreview', 'checkAllChange', 'checkedAttsChange']),
            ...mapActions(['getDirs', 'getAtts', 'createFolder', 'uploadRemove', 'uploadProgress', 'deleteSelect', 'updateFolder', 'deleteFolder']),
            searchInput(value) {
                this.$refs.tree.filter(value)
            },
            searchDir(value, data) {
                if (!value) return true;
                return data.title.indexOf(value) !== -1
            },
            dirClick(data) {
                if (this.op.current_dir !== data) {
                    this.setCurrentDir(data)
                    this.getAtts()
                }
            },
            showFolderDialog() {
                let parent_id = this.op.current_dir !== null ? this.op.current_dir.id : 0
                let msg = parent_id ? `【${this.op.current_dir.title}】正在建立子文件夹` : '建立一级文件夹'
                this.$prompt(msg, '新建文件夹', {
                    confirmButtonText: '建立',
                    inputPattern: /.{2,20}/,
                    inputErrorMessage: '输入2-20个字符。'
                }).then(({value}) => {
                    this.createFolder({parent_id, title: value})
                }).catch(() => {
                })
            },
            toggleUpload() {
                if (this.op.current_dir === null) {
                    return this.$message('选择图片目录！')
                }
                this.setUploadInfo({dir_id: this.op.current_dir.id, is_image: 'T'})
                this.showUploadDiv = !this.showUploadDiv
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
            append(store, data) {
                store.append(
                    {id: Math.random(), label: 'testtest', children: []}, data
                );
            },
            remove(store, data) {
                store.remove(data);
            },
            renderContent(h, {node, data, store}) {
                return h('span', {
                    attrs: {
                        style: 'white-space: normal'
                    }
                }, [
                    h('span', node.label + `(${data.attachments_count})`),
                    h('span', {
                        attrs: {
                            style: 'float: right; margin-right: 10px;'
                        }
                    }, [
                        h('el-button', {
                            attrs: {
                                size: 'mini',
                                icon: 'edit',
                                plain: true,
                                type: 'success'
                            }, on: {
                                click: (e) => {
                                    e.stopPropagation()
                                    this.editDir(data)
                                }
                            }
                        }),
                        h('el-button', {
                            attrs: {
                                size: 'mini',
                                icon: 'delete',
                                plain: true,
                                type: 'danger'
                            }, on: {
                                click: (e) => {
                                    e.stopPropagation()
                                    this.deleteDir(data)
                                }
                            }
                        }),
                    ]),
                ])
            },
            editDir(data) {
                this.$prompt('正在修改文件夹名', {
                    inputValue: data.title,
                    inputPattern: /.{2,20}/,
                    inputErrorMessage: '输入2-20个字符。'
                }).then(({value}) => {
                    if (data.title !== value) {
                        let params = Object.assign({}, data, {title: value})
                        this.updateFolder(params).then(rs => {
                            Object.assign(data, rs.data)
                            this.$message.success('修改成功!')
                        })
                    }
                }).catch(() => {
                })
            },
            deleteDir(data) {
                this.$confirm('此操作将永久删除该目录下的所有文件, 是否继续?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.deleteFolder(data).then(() => {
                        this.$message.success('删除成功!')
                        this.setCurrentDir(null)
                        this.getAtts()
                        this.getDirs()
                    }).catch(() => {
                    })
                }).catch(() => {
                })
            }
        }
    }
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