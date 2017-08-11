<template>
	<section>
		<div class="grid-content bg-g">
			<el-form :inline="true" :model="filters" style="padding-top: 20px; padding-left: 20px;">
				<el-form-item>
					<el-input placeholder="请输入关键词"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新建</el-button>
				</el-form-item>
			</el-form>
		</div>
		<el-table :data="tableData4" border style="width: 100%; margin-top: 20px;">
			<el-table-column prop="per_name" label="名称" width="200"> </el-table-column>
			<el-table-column prop="terms" label="检测词" width="150"> </el-table-column>
			<el-table-column prop="intro" label="简介"> </el-table-column>
			<el-table-column prop="date" label="创建日期" width="150"> </el-table-column>
			<el-table-column fixed="right" label="操作" width="250">
				<template scope="scope">
					<el-button type="primary" size="small">修改</el-button>
					<el-button type="danger" @click.native.prevent="deleteRow(scope.$index, tableData4)" size="small"> 删除 </el-button>
				</template>
			</el-table-column>
		</el-table>
		<!--分页-->
		<el-col :span="24" class="toolbar" style="margin-top: 20px;">
			<el-pagination layout="prev, pager, next" :total="1000" style="float:right;">
			</el-pagination>
		</el-col>
		<!--新增界面-->
		<el-dialog title="新增权限" v-model="addFormVisible" :close-on-click-modal="false">
			<el-form :label-position="labelPosition" :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="名称" prop="per_name">
					<el-input v-model="addForm.per_name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="检测词">
					<el-input v-model="addForm.terms"></el-input>
					<span class="text-colorred">提示：用于程序判断是否具有此角色的重要标识</span>
				</el-form-item>
				<el-form-item label="简介">
					<el-input type="textarea" v-model="addForm.intro"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button>取消</el-button>
				<el-button type="primary">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				labelPosition: 'top',
				filters: {
					name: ''
				},
				addFormVisible: false, //新增界面是否显示
				addFormRules: {
					name: [{
						required: true,
						message: '请输入名称',
						trigger: 'blur'
					}]
				},
				//新增界面数据
				addForm: {

					per_name: '删除文章',
					terms: 'admin',
					intro: '用于删除文章',
					date: '2016-05-03',
				},

				tableData4: [{

						per_name: '删除文章',
						terms: 'admin',
						intro: '用于删除文章',
						date: '2016-05-03',
					},
					{

						per_name: '删除文章',
						terms: 'test',
						intro: '用于删除文章',
						date: '2016-05-03',
					}
				]
			}
		},
		methods: {
			handleAdd: function() {
				this.addFormVisible = true;
				this.addForm = {
					per_name: '删除文章',

				};
			},

			deleteRow(index, rows) {
				rows.splice(index, 1);
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