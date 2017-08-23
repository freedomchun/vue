<template>
	<el-form inline style="padding-top: 20px;">
		<el-form-item>
			<el-input placeholder="请输入关键字"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary">查询</el-button>
		</el-form-item>
		<el-form-item>
			<router-link to="/web/article/articleEdit" class="addmain">添加内容</router-link>
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