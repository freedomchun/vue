<template>
	<div class="grid-content bg-g">
		<el-form inline style="padding-top: 20px; padding-left: 20px;">
			<el-form-item>
				<el-input placeholder="按文件夹名或图片名搜索"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary">查询</el-button>
			</el-form-item>
			<el-form-item>
				<el-button type="warning">上传图片</el-button>
			</el-form-item>
			<el-form-item>
				<el-button type="primary">新建文件夹</el-button>
			</el-form-item>
		</el-form>
		<el-row>
			<el-col :span="6">
				<el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
						label: '我的图片 1',
						children: [{
							label: '二级 1-1',

						}]
					},
					{
						label: '我的图片 1',
						children: [{
							label: '二级 1-1',
							children: [{
								label: '三级 1-1-1'
							}]
						}]
					}, {
						label: '一级 2',
						children: [{
							label: '二级 2-1',
							children: [{
								label: '三级 2-1-1'
							}]
						}, {
							label: '二级 2-2',
							children: [{
								label: '三级 2-2-1'
							}]
						}]
					}
				],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			}
		}
	};
</script>

<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
	}
</style>