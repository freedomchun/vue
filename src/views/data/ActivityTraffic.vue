<template>
	<section>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="访问量" name="first">
				<div>
					<el-form inline style="padding-top: 20px; padding-left: 20px;" label-position="top">
						<el-form-item label="选择目的地">
							<el-select placeholder="请选择" v-model="value">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="选择出行天数">
							<el-select placeholder="请选择" v-model="value">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="选择活动发布时间范围">
							<el-date-picker v-model="value3" type="datetimerange" placeholder="选择时间范围">
							</el-date-picker>
						</el-form-item>
						<el-form-item style=" vertical-align: bottom">
							<el-button type="primary">确定</el-button>
						</el-form-item>
					</el-form>
				</div>
				<el-table border style="width: 100%; margin-top: 20px;">
					<el-table-column prop="cover" label="活动封面" width="150"></el-table-column>
					<el-table-column prop="raidername" label="活动名称" show-overflow-tooltip></el-table-column>
					<el-table-column prop="amount" label="访问量" width="150"></el-table-column>
					<el-table-column prop="amount" label="订单量" width="150"></el-table-column>
					<el-table-column prop="created_at" label="发布时间" width="150" show-overflow-tooltip></el-table-column>
					<el-table-column prop="created_person" label="创建人" width="150"></el-table-column>
				</el-table>
				<el-pagination class="fenye" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
				</el-pagination>

			</el-tab-pane>
			<el-tab-pane label="订单量" name="second">订单量</el-tab-pane>
		</el-tabs>
	</section>
</template>
<script>
	export default {

		data() {
			return {
				activeName: 'first',
				options: [{
					value: '选项1',
					label: '黄金糕'
				}],
				value: '',
				currentPage1: 5,
				value3: [new Date(2017, 10, 10, 10, 10), new Date(2020, 10, 11, 10, 10)],
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
		},
	}
</script>
<style scoped>
	.chart-container {
		position: relative;
		width: 100%;
		height: 90%;
		padding-bottom: 40px;
	}
</style>