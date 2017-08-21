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
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="关于遇途记" name="first">
				<el-table :data="psList" border style="width: 100%; margin-top: 20px;">
					<el-table-column prop="id" label="ID" sortable width="100"></el-table-column>
					<el-table-column prop="title" label="标题"></el-table-column>
					<el-table-column prop="amount" label="点击量" width="100"></el-table-column>
					<el-table-column prop="created_at" label="创建日期" width="200"></el-table-column>
					<el-table-column prop="created_at" label="最后更新" width="200"></el-table-column>
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
				<el-dialog title="发布文章" v-model="showAddPermission" :close-on-click-modal="false" size="tiny">
					<el-form :model="addPermission" ref="addPermission" label-position="top">
						<el-form-item label="所属栏目" prop="topLevel">
							<el-select v-model="value" placeholder="请选择" style="width: 100%;">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="文章标题" prop="title">
							<el-input v-model="addPermission.name" placeholder="请输入文章名称"></el-input>
						</el-form-item>
						<el-form-item label="关键词">
							<el-input v-model="addPermission.seoKeyword" placeholder="请输入关键词 用空格或逗号隔开"></el-input>
						</el-form-item>
						<el-form-item label="简介">
							<el-input type="textarea" v-model="addPermission.seoDescription" placeholder="请输入简介内容"></el-input>
						</el-form-item>
						<el-form-item label="文章内容">
							<Tinymce :height=200 ref="editor"></Tinymce>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="showAddPermission = false">取消</el-button>
						<el-button type="primary" @click.native.prevent="submitAddPermission" :loading="addLoading">提交</el-button>
					</div>
				</el-dialog>
			</el-tab-pane>
			<el-tab-pane label="活动报名" name="second">活动报名</el-tab-pane>
			<el-tab-pane label="预订须知" name="third">预订须知</el-tab-pane>
		</el-tabs>
	</section>
</template>
<script>
	import Tinymce from '../../components/Tinymce';
	export default {
		components: {
			Tinymce
		},
		data() {
			return {
				activeName: 'first',
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
					title: '',
					amount: '',
				},
			}
		},
		mounted() {
			this.getPermissions();
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},

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