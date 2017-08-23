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
					<router-link to="/activityManageAdd" class="addmain">新建活动</router-link>
				</el-form-item>
			</el-form>
		</div>
		<div>
			<el-form inline style="padding-top: 20px;" label-position="top">
				<el-form-item label="选择目的地">
					<el-cascader :options="options" v-model="selectedOptions"></el-cascader>
				</el-form-item>
				<el-form-item label="选择出行天数">
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options5" :key="item.value5" :label="item.label" :value="item.value5">
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
		<el-table :data="psList" border style="width: 100%; margin-top: 20px;">
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
						<el-button style="margin-left: 10px;" type="primary" size="small">
							修改
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
				options5: [{
					value5: '选项1',
					label: '1天'
				}, {
					value5: '选项2',
					label: '2天'
				}],
				value5: '',
				pickerOptions2: {
					shortcuts: [{
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				value3: [new Date(2017, 10, 10, 10, 10), new Date(2020, 10, 11, 10, 10)],
				value4: '',
				value2: true,
				options: [{
					value: 'zhinan',
					label: '指南',
					children: [{
						value: 'shejiyuanze',
						label: '设计原则',
						children: [{
							value: 'yizhi',
							label: '一致'
						}, {
							value: 'fankui',
							label: '反馈'
						}, {
							value: 'xiaolv',
							label: '效率'
						}, {
							value: 'kekong',
							label: '可控'
						}]
					}, {
						value: 'daohang',
						label: '导航',
						children: [{
							value: 'cexiangdaohang',
							label: '侧向导航'
						}, {
							value: 'dingbudaohang',
							label: '顶部导航'
						}]
					}]
				}],
				selectedOptions: [],
				value: '',
				psList: [],
				keyword: '',
			}
		},
		mounted() {
			this.getPermissions();

		},
		methods: {
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