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
					<router-link :to="{name:'raiderManageAdd'}" class="addmain">新建攻略</router-link>
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
		<el-table :data="psList" border style="width: 100%; margin-top: 20px;">
			<el-table-column prop="cover" label="攻略封面" width="150"></el-table-column>
			<el-table-column prop="raidername" label="攻略名称"></el-table-column>
			<el-table-column prop="amount" label="活动数" width="150"></el-table-column>
			<el-table-column prop="created_at" label="创建时间" width="150"></el-table-column>
			<el-table-column prop="created_person" label="创建人" width="150"></el-table-column>
			<el-table-column fixed="right" label="操作" width="200">
				<template scope="scope">
					<el-button-group>
						<el-button style="margin-left: 10px;" type="primary" size="small">
							修改
						</el-button>
						<el-button type="danger" size="small" @click="deleteMdd(scope.row)">
							删除
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
				options: [{
					value: '选项1',
					label: '黄金糕'
				}],
				value: '',
				currentPage1: 5,
				value3: [new Date(2017, 10, 10, 10, 10), new Date(2020, 10, 11, 10, 10)],
				psList: [{
					raidername: 'fdsdfd',
					created_at: '2016-05-02',
					amount: 1
				}],
			}
		},
		methods: {
			deleteMdd(mdd) {
				this.$confirm(`你确定要删除 ${mdd.title} 吗?`, '提示', {
					type: 'warning'
				}).then(() => {
					this.delete_mdd(mdd).then(rs => {
						this.get_mddList()
						this.$message.success('删除成功')
					}).catch(() => {})
				}).catch(() => {})
			}
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