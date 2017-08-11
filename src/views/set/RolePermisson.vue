<template>
	<section>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="关联菜单" name="first">
				关联目标：超级管理员
				<el-table :data="tableData3" border style="width: 100%; margin-top: 20px;">
					<el-table-column type="selection" label="勾选" width="55"></el-table-column>
					<el-table-column prop="state" label="状态" width="200"></el-table-column>
					<el-table-column prop="role_name" label="名称" width="200"></el-table-column>
					<el-table-column prop="rute" label="路由"></el-table-column>
					<el-table-column prop="date" label="创建日期" width="150"></el-table-column>
				</el-table>
				<!--分页-->
				<el-col :span="24" class="toolbar" style="margin-top: 20px;">
					<el-pagination layout="prev, pager, next" :total="1000" style="float:right;">
					</el-pagination>
				</el-col>
			</el-tab-pane>

			<el-tab-pane label="关联权限" name="second">
				关联目标：超级管理员
				<el-table :data="tableData4" border style="width: 100%; margin-top: 20px;">
					<el-table-column type="selection" label="勾选" width="55"></el-table-column>
					<el-table-column prop="role_name" label="名称" width="200"></el-table-column>
					<el-table-column prop="terms" label="检测词" width="150"></el-table-column>
					<el-table-column prop="intro" label="简介"></el-table-column>
					<el-table-column prop="date" label="创建日期" width="150"></el-table-column>
				</el-table>
				<!--分页-->
				<el-col :span="24" class="toolbar" style="margin-top: 20px;">
					<el-pagination layout="prev, pager, next" :total="1000" style="float:right;">
					</el-pagination>
				</el-col>
			</el-tab-pane>
		</el-tabs>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'first',
				tableData3: [{
					state: '开启'

				}, 
				{
					state: '开启'

				}],
				tableData4: [{

					role_name: '超级管理员',
					terms: 'admin',
					intro: '超级管理员组',
					date: '2016-05-03',
				}, 
				{

					role_name: '网站编辑',
					terms: 'edit',
					intro: '网站编辑',
					date: '2016-05-03',
				}]
			};
		},
		methods: {

			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	};
</script>

<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
	}
</style>