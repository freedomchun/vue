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
				<el-form-item>
					<router-link :to="{name:'activityManageAdd'}" class="addmain">新建活动</router-link>
				</el-form-item>
			</el-form>
		</div>
		<div>
			<el-form inline style="padding-top: 20px;" label-position="top">
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
		<el-table :data="list" border style="width: 100%; margin-top: 20px;">
			<el-table-column prop="avatar" label="封面">
				<template scope="scope">
					<img :src="scope.row.avatar" width="100">
				</template>
			</el-table-column>
			<el-table-column prop="name" label="活动名称" width="300"></el-table-column>
			<el-table-column prop="amount" label="点击量" width="150"></el-table-column>
			<el-table-column prop="created_at" label="发布时间" width="300"></el-table-column>
			<el-table-column prop="created_at" label="结束时间" width="300"></el-table-column>
			<el-table-column fixed="right" label="操作" width="200">
				<template scope="scope">
					<el-button-group>
						<el-switch v-model="value2" on-color="#13ce66" off-color="#ff4949" on-text="上架" off-text="下架">
						</el-switch>
						<el-button style="margin-right: 10px;" type="primary" size="small">
							修改
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
				list: [{
					created_at: '2016-05-02',
					name: '王小虎',
					amount: 1
				}],
				options: [{
					value: '选项1',
					label: '黄金糕'
				}],
				value: '',
				currentPage1: 5,
				value: '',
				value3: [new Date(2017, 10, 10, 10, 10), new Date(2020, 10, 11, 10, 10)],
				value2: true,
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