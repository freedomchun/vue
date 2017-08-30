<template>
	<section>
		<div class="grid-content bg-g">
			<el-form inline style="padding-top: 20px; padding-left: 20px;">
				<el-form-item>
					<el-input placeholder="请输入订单"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>

			</el-form>
		</div>
		<div>
			<el-form inline style="padding-top: 20px; padding-left: 20px;" label-position="top">
				<el-form-item label="选择目的地">
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
		<el-table :data="list" border style="width: 100%; margin-top: 20px;">
			<el-table-column prop="cover" label="活动封面" width="150"></el-table-column>
			<el-table-column prop="raidername" label="活动名称" show-overflow-tooltip></el-table-column>
			<el-table-column prop="amount" label="订单数" width="150"></el-table-column>
			<el-table-column prop="created_at" label="发布时间" width="150" show-overflow-tooltip></el-table-column>
			<el-table-column prop="created_person" label="创建人" width="150"></el-table-column>
			<el-table-column prop="sum" label="订单总额" width="150"></el-table-column>
			<el-table-column fixed="right" label="操作" width="150">
				<template scope="scope">
						<router-link :to="{name:'orderDetail'}" class="addmain">详情</router-link>
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
				options: [{
					value: '选项1',
					label: '黄金糕'
				}],
				value: '',
				currentPage1: 5,
				value3: [new Date(2017, 10, 10, 10, 10), new Date(2020, 10, 11, 10, 10)],
				list: [{
					mudi: 'dfgfdg',
					created_at: '2016-05-02',
					tel: '1389909789'
					
				}],
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