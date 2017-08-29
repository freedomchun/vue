<template>
	<div class="contain">
		<el-row class="bg-g" :gutter="10">
		  <el-col :span="4">
		  	<div class="tou bg-white"><img src="../../assets/fuwu.jpg" /><p>chun</p></div>
		  </el-col>
		  <el-col :span="20">
		  	<div class="bg-white det">
		  	<ul>
		  		<li>用户编号编号：<span>htrfhygthj</span></li>
				<li>微信号：<span>发大润发</span></li>
				<li>活动名称：<span>犯得上反对广泛反对反对广泛发发广告费打广告梵蒂冈反对反对</span></li>
				<li>注册时间：<span>2017-09-09 12:12:12</span></li>
				<li>用户名：<span>周生生</span></li>
				<li>QQ：<span>321342443</span></li>
				<li>最后登录：<span>2017-09-09 12:12:12</span></li>
				<li>手机号：<span>1365657767</span></li>
		  	</ul>

		    </div>
		  </el-col>
		</el-row>
		<div class="panel-body">
		<div class="bg-g">
			<p>订单信息</p>
			<el-table style="width: 100%">
				<el-table-column prop="num" width="150" label="订单编号">
				</el-table-column>
				<el-table-column prop="name" label="活动名称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="id_num" label="批次" width="150">
				</el-table-column>
				<el-table-column prop="per_num01" label="人数" width="150">
				</el-table-column>
				<el-table-column prop="at" label="下单时间" show-overflow-tooltip width="150">
				</el-table-column>
				<el-table-column prop="tel_num02" label="支付状态" width="150">
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="150">
				<template scope="scope">
					<el-button-group>
						<el-button style="margin-left: 10px;" type="primary" size="small">
							详情
						</el-button>
					</el-button-group>
				</template>
			</el-table-column>
			</el-table>
			<el-pagination class="fenye" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
			</el-pagination>
		</div>
		</div>
		<div class="panel-body">
		<div class="bg-g">
			<p>游记信息</p>
			<el-table style="width: 100%">
				<el-table-column prop="num" width="150" label="游记封面">
				</el-table-column>
				<el-table-column prop="name" label="游记名称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="at" label="上传时间" show-overflow-tooltip width="150">
				</el-table-column>
				<el-table-column prop="at" label="最后更新" show-overflow-tooltip width="150">
				</el-table-column>
				<el-table-column prop="amount" label="点击数" width="150">
				</el-table-column>
				<el-table-column prop="tel_num02" label="状态" width="150">
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="150">
				<template scope="scope">
					<el-button-group>
						<el-button style="margin-left: 10px;" type="primary" size="small">
							详情
						</el-button>
					</el-button-group>
				</template>
			</el-table-column>
			</el-table>
			<el-pagination class="fenye" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
			</el-pagination>
		</div>
	</div>
</div>
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
	
	.bg-white{ background: #fff;border-radius: .2em; padding: 30px; height: 210px;}
	.tou{ text-align: center; }
	.tou img{width: 150px; height: 150px; border-radius: 50%;}
	.det ul li{ float: left;  margin:10px;}
</style>
