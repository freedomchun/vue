<template>
	<el-col :span="4">
		<div class="artaside">
			<el-menu default-active="2" unique-opened router class="artsubmenu" @open="handleOpen" @close="handleClose">
				<el-submenu index="1">
					<template slot="title">公司信息</template>
					<el-menu-item-group class="artbg">
						<el-menu-item index="/web/article/articleEdit">关于遇途记</el-menu-item>
						<el-menu-item index="1-2">活动报名</el-menu-item>
						<el-menu-item index="1-2">预订须知</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">网站说明</template>
					<el-menu-item-group class="artbg">
						<el-menu-item index="2-1">常见问题</el-menu-item>
						<el-menu-item index="2-2">合同签订</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-menu-item index="3">景点</el-menu-item>
			</el-menu>

		</div>
	</el-col>

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
	.artaside {
		min-width: 200px;
		background-color: #fff;
		border: 1px solid #c9c8c8;
		box-sizing: border-box;
		height: auto;
	}
	
	.artsubmenu {
		height: 100%;
		background-color: #fff;
	}
	
	.artaside .el-menu {
		height: 100%;
		background: #fff;
	}
	
	.artbg {
		background-color: #fff;
		border-bottom: 1px solid #f0eeee;
	}
	
	.artaside .el-menu-item.is-active {
		color: #333;
		background-color: #e4e8f1;
	}
	
	.artaside .submenu__title:hover {
		background-color: #e4e8f1;
		color: #333;
	}
	
	.artaside .el-menu-item:hover,
	.artaside .el-submenu__title:hover {
		background-color: #e4e8f1;
		color: #333;
	}
</style>