<template>
	<el-form inline style="padding-top: 20px;">
		<el-form-item>
			<el-input placeholder="请输入关键字"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary">查询</el-button>
		</el-form-item>
		<el-form-item>
			<router-link to="articleEdit">添加内容</router-link>
		</el-form-item>
	</el-form>
</template>
<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style scoped>
	.artmain {
		background-color: #fff;
		border: 1px solid #c9c8c8;
		box-sizing: border-box;
		height: auto;
		min-height: 200px;
	}
</style>