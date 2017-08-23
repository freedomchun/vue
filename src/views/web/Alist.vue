<template>
	<div>
		<el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="id" label="ID" sortable width="100"></el-table-column>
			<el-table-column prop="title" label="标题"></el-table-column>
			<el-table-column prop="amount" label="点击量" width="100"></el-table-column>
			<el-table-column prop="created_at" label="创建日期" width="200"></el-table-column>
			<el-table-column prop="clare" label="发布人" width="150"></el-table-column>
			<el-table-column prop="created_at" label="最后更新" width="200"></el-table-column>
			<el-table-column fixed="right" label="操作" width="170">
				<template scope="scope">
					<el-button-group>
						<el-button type="primary" size="small">
							修改
						</el-button>
						<el-button type="danger" size="small">
							删除
						</el-button>
					</el-button-group>
				</template>
			</el-table-column>
		</el-table>
		<div style="margin-top: 20px; float: left;">
			<el-button>排序</el-button>
			<el-button type="danger">删除</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				multipleSelection: []
			}
		},
		methods: {

		}
	}
</script>