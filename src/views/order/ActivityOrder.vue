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
		<div>
			<el-form inline style="padding-top: 20px; padding-left: 20px;" label-position="top">
				<el-form-item label="选择下单时间范围">
					<el-date-picker v-model="value3" type="datetimerange" placeholder="选择时间范围">
					</el-date-picker>
				</el-form-item>
				<el-form-item style=" vertical-align: bottom">
					<el-button type="primary">确定</el-button>
				</el-form-item>
			</el-form>
		</div>
		<el-table border style="width: 100%; margin-top: 20px;">
			<el-table-column prop="num" label="订单编号" width="150"></el-table-column>
			<el-table-column prop="raidername" label="活动名称" show-overflow-tooltip></el-table-column>
			<el-table-column prop="times" label="批次" width="150"></el-table-column>
			<el-table-column prop="suser" label="下单用户" width="150" show-overflow-tooltip></el-table-column>
			<el-table-column prop="numof" label="人数" width="100"></el-table-column>
			<el-table-column prop="created_at" label="下单时间" width="150" show-overflow-tooltip></el-table-column>
			<el-table-column prop="pay_status" label="支付状态" width="150"></el-table-column>
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
				value3: [new Date(2017, 10, 10, 10, 10), new Date(2020, 10, 11, 10, 10)],
			}
		},
	}
</script>
<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
	}
</style>