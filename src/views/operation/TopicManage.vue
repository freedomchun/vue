<template>
	<section>
		<div class="grid-content bg-g">
			<el-form inline style="padding-top: 20px; padding-left: 20px;">
				<el-form-item>
					<el-input v-model="keyword" placeholder="请输入关键词"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="getPermissions">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="addUserForm">新建</el-button>
				</el-form-item>
			</el-form>
		</div>
		<el-table :data="psList" border style="width: 100%; margin-top: 20px;">
			<el-table-column prop="state" label="状态">
			</el-table-column>
			<el-table-column prop="name" label="名称" width="300"></el-table-column>
			<el-table-column prop="amount" label="关联活动数" width="150"></el-table-column>
			<el-table-column prop="created_at" label="创建时间" width="300"></el-table-column>
			<el-table-column prop="created_person" label="创建人" width="300"></el-table-column>
			<el-table-column fixed="right" label="操作" width="200">
				<template scope="scope">
					<el-button-group>
						<el-button style="margin-left: 10px;" type="primary" size="small">
							修改
						</el-button>
						<el-button type="danger" size="small">
							删除
						</el-button>
					</el-button-group>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination class="fenye" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
		</el-pagination>
		<!--新增界面-->
		<el-dialog title="新增主题" v-model="showAddUser" :close-on-click-modal="false" size="tiny">
			<el-form label-position="top" :model="addUser" ref="addUser">
				<el-form-item label="类别名称" prop="name" :rules="[{ required: true, message: '名称不能为空'}]">
					<el-input v-model="addUser.name"></el-input>
				</el-form-item>
				<el-form-item label="状态" prop="disable" :rules="[{ required: true, message: '状态不能为空'}]">
					<el-select v-model="addUser.disable" placeholder="请选择状态">
						<el-option label="启用" value="F"></el-option>
						<el-option label="禁用" value="T"></el-option>
					</el-select>
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
				currentPage1: 5,
				psList: [],
				keyword: '',
				showAddUser: false,
				addUser: {
					name: '',
				},
			}
		},
		mounted() {
			this.getPermissions();
		},
		methods: {
			addUserForm() {
				this.showAddUser = true;
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},

			getPermissions() {
				this.loading = true;
				console.log(this.keyword)
			},
		},
	}
</script>
<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
	}
</style>