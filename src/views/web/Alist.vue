<template>
	<div>
		<el-table ref="multipleTable" :data="articles" border tooltip-effect="dark" style="width: 100%" v-loading="loading.article">
			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column prop="id" label="ID" width="55"></el-table-column>
			<el-table-column prop="title" label="标题" show-overflow-tooltip></el-table-column>
			<el-table-column prop="click" label="点击量" sortable></el-table-column>
			<el-table-column prop="created_at" label="创建日期" sortable show-overflow-tooltip></el-table-column>
			<el-table-column prop="user.name" label="发布人" show-overflow-tooltip></el-table-column>
			<el-table-column prop="created_at" label="最后更新" sortable show-overflow-tooltip></el-table-column>
			<el-table-column fixed="right" label="操作" width="130">
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
		<el-pagination class="fenye" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
		</el-pagination>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'

	export default {
		data() {
			return {
				currentPage1: 5,
			};
		},
		computed: mapState({
			articles: state => state.article.articles,
			loading: state => state.article.loading,
		}),
		mounted() {
			this.get_articles()
		},
		methods: mapActions(['get_articles']),
	}
</script>
<style>
	.fenye {
		float: right;
		margin: 20px 0;
	}
</style>