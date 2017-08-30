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
					<el-button type="primary">新建</el-button>
				</el-form-item>
			</el-form>
		</div>
		<el-table :data="list" border style="width: 100%; margin-top: 20px;">
			<el-table-column prop="disable_at" label="状态" width="100" sortable></el-table-column>
			<el-table-column prop="chain_tab" label="外链标签" width="200" show-overflow-tooltip></el-table-column>
			<el-table-column prop="web_name" label="网站名称" show-overflow-tooltip></el-table-column>
			<el-table-column prop="chain_at" label="创建时间" width="150" show-overflow-tooltip></el-table-column>
			<el-table-column fixed="right" label="操作" width="150">
				<template scope="scope">
					<el-button-group>
						<el-button type="primary" size="small">修改</el-button>
						<el-button type="danger" size="small"  @click="deleteMdd(scope.row)">删除</el-button>
					</el-button-group>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination class="fenye" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
		</el-pagination>
		<!--新增外链页面-->
		<el-dialog title="新增页面" size="tiny" style="display: none;">
			<el-form label-position="top">
				<el-form-item label="网站名称" prop="name">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="网站地址" prop="name">
					<el-input placeholder="www.baidu.com"></el-input>
				</el-form-item>
				<el-form-item label="所属外链标签">
					<el-select placeholder="请选择" v-model="value">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="状态">
					<el-select placeholder="请选择" v-model="value">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button>取消</el-button>
				<el-button type="primary">提交</el-button>
			</div>
		</el-dialog>

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
				list: [{
					chain_at: '2016-05-02',
					chain_tab: '王gfdg'
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
			},
		}
	}
</script>
<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
	}
</style>