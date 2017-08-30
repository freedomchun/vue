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

		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="全部" name="first">
				<div>
					<el-form inline style="padding-top: 20px; padding-left: 20px;" label-position="top">
						<el-form-item label="选择下单时间范围">
							<el-date-picker v-model="value3" type="datetimerange" placeholder="选择时间范围">
							</el-date-picker>
						</el-form-item>
					</el-form>
				</div>
				<el-table :data="list" border style="width: 100%; margin-top: 20px;">
					<el-table-column prop="info_pic" label="游记封面" width="150" show-overflow-tooltip></el-table-column>
					<el-table-column prop="info_title" label="游记标题" show-overflow-tooltip></el-table-column>
					<el-table-column prop="info_name" label="用户名" width="150" show-overflow-tooltip></el-table-column>
					<el-table-column prop="info_am" label="点击数" width="150" show-overflow-tooltip></el-table-column>
					<el-table-column prop="info_at" label="发布时间" width="150" show-overflow-tooltip></el-table-column>
					<el-table-column prop="info_end" label="最后登录" width="150" show-overflow-tooltip></el-table-column>
					<el-table-column prop="info_status" label="状态" width="150" show-overflow-tooltip></el-table-column>
					<el-table-column fixed="right" label="操作" width="150">
						<template scope="scope">
							<router-link :to="{name:'travelDetail'}" class="addmain">详情</router-link>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination class="fenye" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
				</el-pagination>
			</el-tab-pane>
			<el-tab-pane label="已审核" name="second">已审核</el-tab-pane>
			<el-tab-pane label="未审核" name="third">未审核</el-tab-pane>
			<el-tab-pane label="未通过" name="fourth">未通过</el-tab-pane>
		</el-tabs>

	</section>
</template>
<script>
	export default {
		data() {
			return {
				currentPage1: 5,
				activeName: 'first',
				value3: [new Date(2017, 10, 10, 10, 10), new Date(2020, 10, 11, 10, 10)],
				list: [{
					info_title: 'dfgfdg',
					info_name: '佛挡杀佛的个',
					created_at: '2016-05-02'	
				}],
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
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