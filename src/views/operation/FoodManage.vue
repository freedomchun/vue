<template>
	<section>
		<div class="grid-content bg-g">
			<el-form inline style="padding-top: 20px; padding-left: 20px;">
				<el-form-item>
					<el-input v-model="keyword" placeholder="请输入关键词"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>
				<el-form-item>
					<router-link to="/foodManageAdd" class="addmain">新建美食</router-link>
				</el-form-item>
			</el-form>
		</div>
		<div>
			<el-form inline style="padding-top: 20px; padding-left: 20px;" label-position="top">
				<el-form-item label="选择目的地">
					<el-cascader :options="options" v-model="selectedOptions"></el-cascader>
				</el-form-item>
				<el-form-item label="选择发布时间范围">
					<el-date-picker v-model="value3" type="datetimerange" placeholder="选择时间范围">
					</el-date-picker>
				</el-form-item>
				<el-form-item style=" vertical-align: bottom">
					<el-button type="primary">确定</el-button>
				</el-form-item>
			</el-form>
		</div>
		<el-table :data="psList" border style="width: 100%; margin-top: 20px;">
			<el-table-column prop="cover" label="美食封面" width="150"></el-table-column>
			<el-table-column prop="foodname" label="美食名称"></el-table-column>
			<el-table-column prop="amount" label="点击数" width="150"></el-table-column>
			<el-table-column prop="created_at" label="创建时间" width="150"></el-table-column>
			<el-table-column prop="created_person" label="创建人" width="150"></el-table-column>
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
	</section>
</template>
<script>
	export default {
		data() {
			return {
				currentPage1: 5,
				value3: [new Date(2017, 10, 10, 10, 10), new Date(2020, 10, 11, 10, 10)],
				psList: [],
				keyword: '',
				options: [{
					value: 'zhinan',
					label: '国内',
					children: [{
						value: 'shejiyuanze',
						label: '西藏',
						children: [{
							value: 'yizhi',
							label: '珠穆拉玛峰'
						}, {
							value: 'fankui',
							label: '拉萨'
						}]
					}, {
						value: 'daohang',
						label: '四川',
						children: [{
							value: 'cexiangdaohang',
							label: '成都'
						}, {
							value: 'dingbudaohang',
							label: '广元'
						}]
					}]
				}],
				selectedOptions: [],
			}
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
		},
	}
</script>
<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
	}
	.addmain {
		background: #4db3ff;
		color: white;
		margin: 0;
		padding: 10px 15px;
		border-radius: 4px;
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		font-size: 14px;
		box-sizing: border-box;
		outline: 0;
		text-align: center;
		text-decoration: none;
		border: 1px solid #c4c4c4;
	}
</style>