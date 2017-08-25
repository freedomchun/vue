<template>
	<el-form class="contain">
		<el-row class="bg-g" :gutter="10">
			
		  <el-col :span="2">
		  	<div class="headpic"><img src="../../assets/fuwu.jpg" /></div>
		  </el-col>
		  <el-col :span="22">
		  	<div class="yufu">
             <h4>渔夫拍世界</h4>
             <p><span>发布时间：2019-09-09</span><span>最后更新：2019-09-09</span><span>点击量：3243</span></p>
		    </div>
		  </el-col>
<hr>
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
	.headbg{ border-bottom: 1px solid #aaa; clear: both;}
	
	.headpic{ text-align: center; }
	.headpic img{width: 100px; height: 100px; border-radius: 50%;}
	.yufu{ float: left;  margin:10px;}
	.yufu p{ }
</style>
