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
		<el-table border style="width: 100%; margin-top: 20px;">
			<el-table-column prop="chain_name" label="名称" show-overflow-tooltip></el-table-column>
			<el-table-column prop="chain_at" label="创建时间" width="150" show-overflow-tooltip></el-table-column>
			<el-table-column fixed="right" label="操作" width="150">
				<template scope="scope">
					<el-button-group>
						<el-button type="primary" size="small">修改</el-button>
						<el-button type="danger" size="small">删除</el-button>
					</el-button-group>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination class="fenye" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
		</el-pagination>
		<!--新增标签-->
		<el-dialog title="新增标签" size="tiny" style="display: none;">
			<el-form label-position="top">
				<el-form-item label="标签名称" prop="name">
					<el-input></el-input>
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