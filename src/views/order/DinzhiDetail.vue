<template>
	<el-form class="contain">
		<h3 class="order_title">定制详情</h3>
		<div class="panel-body">
			<div class="bg-g">
				定制信息
			</div>
			<ul class="panel-menu">
				<li>定制编号：<span>htrfhygthj</span></li>
				<li>提交时间：<span>2019-09-09 12:12:12</span></li>
				<li>目的地：<span>犯得上反对广泛反对反对广泛发发广告费打广告梵蒂冈反对反对</span></li>
			</ul>
			<div class="bg-g">
				咨询用户信息
			</div>
			<ul class="panel-menu">
				<li>咨询用户：<span>周先生</span></li>
				<li>手机号码：<span>1345567234</span></li>
			</ul>
		</div>
		<el-form-item style="padding-left: 20px; margin-top: 20px;">
			<el-button type="primary">导出</el-button>
			<el-button>返回</el-button>
		</el-form-item>
	</el-form>

</template>

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
		padding: 0 20px;
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