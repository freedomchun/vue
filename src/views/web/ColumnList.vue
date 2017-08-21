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
		<el-table :data="psList" border style="width: 100%; margin-top: 20px;">
			<el-table-column prop="id" label="ID" sortable width="100"></el-table-column>
			<el-table-column prop="disable_at" label="状态" width="100" sortable>
				<template scope="scope">
					<el-tag type="success" v-if="scope.row.disable_at === null">激活</el-tag>
					<div slot="reference" class="name-wrapper">
						<el-tag type="danger">禁用</el-tag>
					</div>
				</template>
			</el-table-column>
			<el-table-column prop="name" label="名称"></el-table-column>
			<el-table-column prop="quantity" label="文章数量" width="200"></el-table-column>
			<el-table-column prop="created_at" label="创建日期" width="200"></el-table-column>
			<el-table-column fixed="right" label="操作" width="170">
				<template scope="scope">
					<el-button-group>
						<el-button type="primary" size="small">
							修改
						</el-button>
						<el-button type="danger" size="small">
							删除
						</el-button>
					</el-button-group>
				</template>
			</el-table-column>
		</el-table>
		<!--新增界面-->
		<el-dialog title="新建栏目" v-model="showAddPermission" :close-on-click-modal="false" size="tiny">
			<el-form :model="addPermission" ref="addPermission" label-position="top">
				<el-form-item label="栏目名称" prop="name" :rules="[{ required: true, message: '名称不能为空'}]">
					<el-input v-model="addPermission.name" placeholder="请输入栏目名称"></el-input>
				</el-form-item>
				<el-form-item label="顶级栏目" prop="topLevel">
					<el-select v-model="value" placeholder="请选择" style="width: 100%;">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="SEO 标题" placeholder="请输入SEO 标题">
					<el-input v-model="addPermission.seoTitle"></el-input>
				</el-form-item>
				<el-form-item label="SEO 关键词">
					<el-input v-model="addPermission.seoKeyword" placeholder="请输入SEO 关键词"></el-input>
				</el-form-item>
				<el-form-item label="SEO 网页描述">
					<el-input v-model="addPermission.seoDescription" placeholder="请输入SEO 网页描述"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="showAddPermission = false">取消</el-button>
				<el-button type="primary" @click.native.prevent="submitAddPermission" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>
<script>
	export default {
		data() {
			return {
				options: [{
					value: '选项1',
					label: '关于遇途记'
				}, {
					value: '选项2',
					label: '活动报名'
				}],
				value: '',
				psList: [],
				keyword: '',
				showEditPermission: false,
				showAddPermission: false,
				addLoading: false,
				addPermission: {
					name: '',
					quantity: '',
					seoTitle: '',
					seoKeyword: '',
					seoDescription: '',
				},
			}
		},
		mounted() {
			this.getPermissions();
		},
		methods: {
			getPermissions() {
				this.loading = true;
				console.log(this.keyword)
			},
			submitAddPermission() {
				this.$refs.addPermission.validate((valid) => {
					if(valid) {
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