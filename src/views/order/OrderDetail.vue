<template>
	<el-form class="contain">
		<h3 class="order_title">订单详情</h3>
		<div class="panel-body">
			<div class="bg-g">
				订单信息
			</div>
			<ul class="panel-menu">
				<li>订单编号：<span>htrfhygthj</span></li>
				<li>下单时间：<span>2019-09-09 12:12:12</span></li>
				<li>活动名称：<span>犯得上反对广泛反对反对广泛发发广告费打广告梵蒂冈反对反对</span></li>
				<li>活动批次：<span>2017-09-09~2018-09-09</span></li>
				<li>出行天数：<span>8天</span></li>
			</ul>
			<div class="bg-g">
				下单用户信息
			</div>
			<ul class="panel-menu">
				<li>下单用户：<span>周先生</span></li>
				<li>手机号码：<span>1345567234</span></li>
				<li>下单邮箱：<span>3243435@qq.com</span></li>
			</ul>
		</div>
		<div class="bg-g">
			<p>报名人信息</p>
			<el-table style="width: 100%">
				<el-table-column type="index" width="80" label="序号">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="id_num" label="证件号码">
				</el-table-column>
				<el-table-column prop="tel_num01" label="手机号码">
				</el-table-column>
				<el-table-column prop="contacts" label="紧急联系人">
				</el-table-column>
				<el-table-column prop="tel_num02" label="手机号码">
				</el-table-column>
			</el-table>
			<el-pagination class="fenye" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
			</el-pagination>
		</div>
		<div class="panel-body">
			<div class="bg-g">
				价格状态信息
			</div>
			<ul class="panel-menu red">
				<li>单价：<span>￥2000/人</span></li>
				<li>订单总额：<span>￥15*2000=30000</span></li>
				<li>定金状态：<span>￥15000</span><em class="pay">已支付</em></li>
				<li>余额状态：<span>￥15000</span><em class="nopay">未支付</em></li>
			</ul>
		</div>
		<el-form-item style="padding-left: 20px; margin-top: 20px;">
			<el-button type="primary">导出</el-button>
			<el-button>返回</el-button>
		</el-form-item>
	</el-form>

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
		padding: 20px
	}
	
	.panel-body {
		margin-top: 20px;
	}
	
	.order_title {
		padding:0 20px;
	}
	
	.panel-menu {
		display: block;
		padding: 20px;
	}
	
	.panel-menu li {
		padding: 6px 0;
		color: #555;
	}
	
	.red li span {
		color: #f00;
		font-weight: bold;
	}
	
	.pay {
		font-style: normal;
		color: #2bd419;
		padding-left: 10px;
	}
	
	.nopay {
		font-style: normal;
		color: #f00;
		padding-left: 10px;
	}
</style>