<template>
	<section>
		<div class="grid-content bg-g">
			<el-form inline style="padding-top: 20px; padding-left: 20px;">
				<el-form-item>
					<el-input v-model="keyword" placeholder="请输入检测词"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="getPermissions">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="showAddPermission = true">新建</el-button>
				</el-form-item>
			</el-form>
		</div>

		<el-table :data="psList" border v-loading="loading" style="width: 100%; margin-top: 20px;">
			<el-table-column prop="name" label="名称" width="200"></el-table-column>
			<el-table-column prop="slug" label="检测词" width="150"></el-table-column>
			<el-table-column prop="description" label="摘要"></el-table-column>
			<el-table-column prop="model" label="模型"></el-table-column>
			<el-table-column prop="created_at" label="创建日期" width="200"></el-table-column>
			<el-table-column fixed="right" label="操作" width="170">
				<template scope="scope">
					<el-button-group>
						<el-button type="primary" size="small" @click.native.prevent="editRow(scope.$index, psList)">
							修改
						</el-button>
						<el-button type="danger" size="small" @click.native.prevent="deleteRow(scope.$index, psList)">
							删除
						</el-button>
					</el-button-group>
				</template>
			</el-table-column>
		</el-table>

		<!--新增界面-->
		<el-dialog title="新增权限" v-model="showAddPermission" :close-on-click-modal="false">
			<el-form :model="addPermission" ref="addPermission" label-position="top" label-width="80px">
				<el-form-item label="名称" prop="name" :rules="[{ required: true, message: '名称不能为空'}]">
					<el-input v-model="addPermission.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="检测词" prop="slug" :rules="[{ required: true, message: '检测词不能为空'}]">
					<el-input v-model="addPermission.slug"></el-input>
					<span class="text-colorred">提示：用于程序判断是否具有此权限的重要标识</span>
				</el-form-item>
				<el-form-item label="模型">
					<el-input v-model.number="addPermission.model"></el-input>
				</el-form-item>
				<el-form-item label="摘要">
					<el-input v-model="addPermission.description"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="showAddPermission = false">取消</el-button>
				<el-button type="primary" @click.native.prevent="submitAddPermission" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>

		<!--修改界面-->
		<el-dialog title="修改权限" :visible.sync="showEditPermission" :close-on-click-modal="false">
			<el-form :model="editPermission" ref="editPermission" label-position="top" label-width="80px">
				<el-form-item label="名称" prop="name" :rules="[{ required: true, message: '名称不能为空'}]">
					<el-input v-model="editPermission.name"></el-input>
				</el-form-item>
				<el-form-item label="检测词" prop="slug" :rules="[{ required: true, message: '检测词不能为空'}]">
					<el-input v-model="editPermission.slug"></el-input>
					<span class="text-colorred">提示：用于程序判断是否具有此权限的重要标识</span>
				</el-form-item>
				<el-form-item label="模型">
					<el-input v-model.number="editPermission.model"></el-input>
				</el-form-item>
				<el-form-item label="摘要">
					<el-input v-model="editPermission.description"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="showEditPermission = false">取消</el-button>
				<el-button type="primary" @click.native.prevent="submitEditPermission" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                psList: [],
                keyword: '',
                showEditPermission: false,
                editLoading: false,
                editPermission: {
                    name: '',
                    slug: '',
                    model: '',
                    description: '',
                },
                showAddPermission: false,
                addLoading: false,
                addPermission: {
                    name: '',
                    slug: '',
                    model: '',
                    description: '',
                },
            }
        },
        mounted() {
            this.getPermissions();
        },
        methods: {
            editRow(index, rows) {
                this.editPermission = rows[index];
                this.showEditPermission = true;
            },
            deleteRow(index, rows) {
                this.$confirm(`你确认删除${rows[index].name}吗?`, '提示', {type: 'warning'}).then(() => {
                    api.requestDeletePermission(rows[index].id).then(rs => {
                        rows.splice(index, 1);
                    }).catch(utils.fns.err);
                }).catch(() => {
                });
            },
            getPermissions() {
                this.loading = true;
                console.log(this.keyword)
                api.requestPermissions(this.keyword).then(rs => {
                    this.psList = rs.data;
                    this.loading = false;
                }).catch(err => {
                    this.loading = false;
                    utils.fns.err(err);
                });
            },
            submitAddPermission() {
                this.$refs.addPermission.validate((valid) => {
                    if (valid) {
                        this.addLoading = true;
                        api.requestCreatePermission(this.addPermission).then(rs => {
                            this.addLoading = false;
                            this.showAddPermission = false;
                            this.psList.push(rs.data);
                        }).catch(err => {
                            this.addLoading = false;
                            utils.fns.err(err);
                        });
                    } else {
                        return false;
                    }
                });
            },
            submitEditPermission() {
                this.$refs.editPermission.validate((valid) => {
                    if (valid) {
                        this.editLoading = true;
                        api.requestEditPermission(this.editPermission).then(rs => {
                            this.editLoading = false;
                            this.showEditPermission = false;
                        }).catch(err => {
                            this.editLoading = false;
                            utils.fns.err(err);
                        });
                    } else {
                        return false;
                    }
                });
            },
        },
    }
</script>


<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
	}

	.text-colorred {
		color: #f00;
		font-size: 12px;
	}
</style>