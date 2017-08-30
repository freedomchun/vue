<template>
	<section>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="首页访问" name="first">首页访问</el-tab-pane>
			<el-tab-pane label="目的地" name="second">
				<div>
					<el-form inline style="padding-top: 20px; padding-left: 20px;" label-position="top">
						<el-form-item>
							<el-date-picker v-model="value3" type="datetimerange" placeholder="选择时间范围">
							</el-date-picker>
						</el-form-item>
					</el-form>
				</div>
				<div id="chartLine" style="width:100%; height:400px;padding-left: 20px;"></div>
			</el-tab-pane>
			<el-tab-pane label="周边游" name="third">周边游</el-tab-pane>
			<el-tab-pane label="省内游" name="fourth">省内游</el-tab-pane>
			<el-tab-pane label="国内游" name="fifth">国内游</el-tab-pane>
			<el-tab-pane label="境外游" name="sixth">境外游</el-tab-pane>
		</el-tabs>
	</section>
</template>
<script>
	import echarts from 'echarts'
	export default {

		data() {
			return {
				activeName: 'second',
				chartLine: null,
				value3: [new Date(2017, 10, 10, 10, 10), new Date(2020, 10, 11, 10, 10)],
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			drawLineChart() {
				this.chartLine = echarts.init(document.getElementById('chartLine'));
				this.chartLine.setOption({
					title: {
						text: '目的地'
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['邮件营销', '联盟广告', '搜索引擎']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: '邮件营销',
							type: 'line',
							stack: '总量',
							data: [120, 132, 101, 134, 90, 230, 210, 57, 76, 67, 767, 767]
						},
						{
							name: '联盟广告',
							type: 'line',
							stack: '总量',
							data: [220, 182, 191, 234, 290, 330, 310, 132, 101, 134, 90, 230]
						},
						{
							name: '搜索引擎',
							type: 'line',
							stack: '总量',
							data: [820, 932, 901, 934, 1290, 1330, 1320, 1362, 101, 1364, 970, 2360]
						}
					]
				});
			},
			drawCharts() {
				this.drawLineChart()
			},
		},
		mounted: function() {
			this.drawCharts()
		},
		updated: function() {
			this.drawCharts()
		}
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