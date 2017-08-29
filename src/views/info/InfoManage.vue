<template>
	<section>
		<div class="grid-content bg-g">
			<el-form inline style="padding-top: 20px; padding-left: 20px;">
				<el-form-item>
					<el-input placeholder="请输入关键词"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>
			</el-form>
		</div>

		<el-table border style="width: 100%; margin-top: 20px;">
			<el-table-column prop="info_num" label="用户编号" width="150" show-overflow-tooltip></el-table-column>
			<el-table-column prop="info_head" label="头像" width="150"></el-table-column>
			<el-table-column prop="info_name" label="用户名" show-overflow-tooltip></el-table-column>
			<el-table-column prop="info_tel" label="手机号" show-overflow-tooltip></el-table-column>
			<el-table-column prop="info_third" label="第三方" show-overflow-tooltip></el-table-column>
			<el-table-column prop="amount" label="订单" width="150"></el-table-column>
			<el-table-column prop="amount" label="游记" width="150"></el-table-column>
			<el-table-column prop="info_at" label="注册时间" width="150" show-overflow-tooltip></el-table-column>
			<el-table-column prop="info_end" label="最后登录" width="150" show-overflow-tooltip></el-table-column>
			<el-table-column fixed="right" label="操作" width="150">
				<template scope="scope">
					<el-button-group>
						<el-button style="margin-left: 10px;" type="primary" size="small">
							详情
						</el-button>
					</el-button-group>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination class="fenye" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
		</el-pagination>
	</section>
</template>
<script>
	export default {
		data() {
			return {
				currentPage1: 5,
			}
		}
	}
</script>
<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
	}
</style>