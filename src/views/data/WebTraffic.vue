<template>
	<section>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="首页访问" name="first">首页访问</el-tab-pane>
			<el-tab-pane label="目的地" name="second">
				<div class="components-container" style='height:100vh'>
					<div class='chart-container'>
						<mix-chart id='apple' height='100%' width='100%'></mix-chart>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="周边游" name="third">周边游</el-tab-pane>
			<el-tab-pane label="省内游" name="fourth">省内游</el-tab-pane>
			<el-tab-pane label="国内游" name="fifth">国内游</el-tab-pane>
			<el-tab-pane label="境外游" name="sixth">境外游</el-tab-pane>
		</el-tabs>
	</section>
</template>
<script>
	export default {
		
		data() {
			return {
				activeName: 'second',
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		},
	}
</script>
<style scoped>
	.chart-container {
		position: relative;
		width: 100%;
		height: 90%;
		padding-bottom: 40px;
	}
</style>