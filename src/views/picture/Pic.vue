<template>
	<div class="grid-content bg-g">
		<el-form inline>
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
		<el-row :gutter="5">
			<el-col :span="4">
				<div class="pic_title">
					<h3 class="pic_h3">图片目录</h3>
				</div>
				<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
			</el-col>
			<el-col :span="20">
				<div class="pic_title">
					<el-checkbox style="margin-right: 20px;">全选</el-checkbox>
					</el-form-item>
					<el-button type="danger">删除</el-button>
				</div>
				<div class="bg-white">
					<el-row>
						<el-col :lg="6" :md="8">
							<el-card>
								<img src="../../assets/fuwu.jpg" class="image">
								<div class="hao_title">
									<span>好吃好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡的汉堡</span>
								</div>
								<div class="bottom clearfix">
									<el-checkbox class="check"></el-checkbox>
								</div>
							</el-card>
						</el-col>
						<el-col :lg="6" :md="8">
							<el-card>
								<img src="../../assets/fuwu.jpg" class="image">
								<div class="hao_title">
									<span>好吃好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡的汉堡</span>
								</div>
								<div class="bottom clearfix">
									<el-checkbox class="check"></el-checkbox>
								</div>
							</el-card>
						</el-col>
						<el-col :lg="6" :md="8">
							<el-card>
								<img src="../../assets/fuwu.jpg" class="image">
								<div class="hao_title">
									<span>好吃好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡的汉堡</span>
								</div>
								<div class="bottom clearfix">
									<el-checkbox class="check"></el-checkbox>
								</div>
							</el-card>
						</el-col>
						<el-col :lg="6" :md="8">
							<el-card>
								<img src="../../assets/fuwu.jpg" class="image">
								<div class="hao_title">
									<span>好吃好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡的汉堡</span>
								</div>
								<div class="bottom clearfix">
									<el-checkbox class="check"></el-checkbox>
								</div>
							</el-card>
						</el-col>
						<el-col :lg="6" :md="8">
							<el-card>
								<img src="../../assets/fuwu.jpg" class="image">
								<div class="hao_title">
									<span>好吃好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡的汉堡</span>
								</div>
								<div class="bottom clearfix">
									<el-checkbox class="check"></el-checkbox>
								</div>
							</el-card>
						</el-col>
					</el-row>
					<el-pagination class="fenye" layout="prev, pager, next" :total="50"></el-pagination>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
					label: '我的图片',
					children: [{
						label: '四川',
						children: [{
							label: '稻城亚丁',
							children: [{
								label: 'PC'
							}, {
								label: '无线'
							}, {
								label: '橱窗'
							}]
						}]
					}, {
						label: '川藏线',
						children: [{
							label: '新潮排橱窗图',
							children: [{
								label: '三级 2-1-hggggggggggggggggggjh55555555551'
							}]
						}]
					}]
				}],
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
		padding: 20px;
		background: #eeeeee;
		border-radius: .2em;
	}
	
	.pic_title {
		padding: 0 20px;
		background: #f6f6f6;
		line-height: 50px;
		border: 1px solid #d1dbe5;
		border-bottom: none !important;
	}
	
	.pic_h3 {
		text-align: center;
	}
	
	.bg-white {
		background: #fff;
		width: 100%;
		border: 1px solid #d1dbe5;
		padding: 10px 0;
	}
	
	.time {
		font-size: 14px;
		color: #999;
	}
	
	.bottom {
		line-height: 14px;
	}
	
	.hao_title {
		padding: 10px;
	}
	
	.check {
		float: right;
	}
	
	.image {
		width: 100%;
		display: block;
	}
	
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	
	.clearfix:after {
		clear: both
	}
	
	.el-card {
		margin: 10px 20px;
	}
	
	.fenye {
		text-align: center;
		margin: 20px 0;
	}
</style>