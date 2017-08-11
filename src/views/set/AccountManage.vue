<template>
	<section>
		<div class="grid-content bg-g">
			<el-form :inline="true" :model="filters" style="padding-top: 20px; padding-left: 20px;">
				<el-form-item>
					<el-input placeholder="请输入姓名或邮箱"></el-input>
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
			<el-table-column type="selection" label="勾选" width="55"></el-table-column>
			<el-table-column prop="headimg" label="头像" width="80"> </el-table-column>
			<el-table-column prop="user_name" label="姓名" width="200"> </el-table-column>
			<el-table-column prop="email" label="邮箱" width="150"> </el-table-column>
			<el-table-column prop="rolegroup" label="角色组"> </el-table-column>
			<el-table-column prop="date" label="创建日期" width="150"> </el-table-column>
			<el-table-column prop="state" label="状态" width="150"> </el-table-column>
			<el-table-column fixed="right" label="操作" width="180">
				<template scope="scope">

					<el-button type="primary" size="small">重置密码</el-button>
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
		<el-dialog title="新增账户" v-model="addFormVisible" :close-on-click-modal="false">
			<el-form :label-position="labelPosition" :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="姓名" prop="user_name">
					<el-input v-model="addForm.user_name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="邮箱">
					<el-input v-model="addForm.email"></el-input>
				</el-form-item>
				<el-form-item label="角色组" prop="rolegroup">
					<el-dropdown>
						<el-button>
							请选择角色<i class="el-icon-caret-bottom el-icon--right"></i>
						</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>超级管理员</el-dropdown-item>
							<el-dropdown-item>网站编辑</el-dropdown-item>
							<el-dropdown-item>测试</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-form-item>
				<el-form-item label="状态" prop="state">
					<el-dropdown>
						<el-button>
							请选择状态<i class="el-icon-caret-bottom el-icon--right"></i>
						</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>启用</el-dropdown-item>
							<el-dropdown-item>禁用</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
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
					headimg: '',
					user_name: 'hamei',
					email: '78978@qq.com',
					rolegroup: '超级管理员',
					state: '启用',
					date: '2016-05-03',
				},

				tableData4: [{
						headimg: '',
						user_name: 'hamei',
						email: '432435@qq.com',
						rolegroup: '超级管理员',
						state: '启用',
						date: '2016-05-03',
					},
					{
						headimg: '',
						user_name: 'hamei',
						email: '432435@qq.com',
						rolegroup: '超级管理员',
						state: '禁用',
						date: '2016-05-03',
					}
				],

			}
		},
		methods: {
			handleAdd: function() {
				this.addFormVisible = true;
				this.addForm = {
					user_name: 'hamei',

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