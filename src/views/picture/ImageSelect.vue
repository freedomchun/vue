<template>
	<div>
		<el-dialog title="图片选择器" :visible.sync="show" :size="size">
			<el-row :gutter="10">
				<el-col :span="6">
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-col>
				<el-col :span="6">
					<el-input placeholder="请输入关键字"></el-input>
				</el-col>
				<el-col :span="10">
					<el-date-picker v-model="value3" type="datetimerange" format="yyyy-MM-dd HH-mm-ss" placeholder="选择时间范围">
					</el-date-picker>
				</el-col>
				<el-col :span="2">
					<el-button type="primary">搜索</el-button>
				</el-col>
			</el-row>
			<el-row :gutter="10">
				<el-col :lg="24" :md="24">
					<div class="pic_title">
						<el-checkbox>全选</el-checkbox>
					</div>
					<div class="bg-white">
						<el-checkbox-group>
							<el-row>
								<el-col :lg="6" :md="8">
									<el-card :body-style="{ padding: '0px' }">
										<img src="imagecut(att.url, 300)" class="image">
										<div class="hao_title">
											<span>hgf</span>
										</div>
										<div class="bottom clearfix">
											<el-checkbox class="check"></el-checkbox>
										</div>
									</el-card>
								</el-col>
								<el-col :lg="6" :md="8">
									<el-card :body-style="{ padding: '0px' }">
										<img src="imagecut(att.url, 300)" class="image">
										<div class="hao_title">
											<span>hgf</span>
										</div>
										<div class="bottom clearfix">
											<el-checkbox class="check"></el-checkbox>
										</div>
									</el-card>
								</el-col>
								<el-col :lg="6" :md="8">
									<el-card :body-style="{ padding: '0px' }">
										<img src="imagecut(att.url, 300)" class="image">
										<div class="hao_title">
											<span>hgf</span>
										</div>
										<div class="bottom clearfix">
											<el-checkbox class="check"></el-checkbox>
										</div>
									</el-card>
								</el-col>
								<el-col :lg="6" :md="8">
									<el-card :body-style="{ padding: '0px' }">
										<img src="imagecut(att.url, 300)" class="image">
										<div class="hao_title">
											<span>hgf</span>
										</div>
										<div class="bottom clearfix">
											<el-checkbox class="check"></el-checkbox>
										</div>
									</el-card>
								</el-col>
								<el-col :lg="6" :md="8">
									<el-card :body-style="{ padding: '0px' }">
										<img src="imagecut(att.url, 300)" class="image">
										<div class="hao_title">
											<span>hgf</span>
										</div>
										<div class="bottom clearfix">
											<el-checkbox class="check"></el-checkbox>
										</div>
									</el-card>
								</el-col>
							</el-row>
						</el-checkbox-group>
						<el-pagination class="fenye" layout="total, prev, pager, next"></el-pagination>

					</div>
				</el-col>
			</el-row>

			<div slot="footer" class="dialog-footer">
				<el-button @click="show = false">取 消</el-button>
				<el-button type="primary">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		props: ['size'],
		data() {
			return {
				options: [{
					value: '选项1',
					label: '文件夹'
				}],
				value: '',
				value3: [new Date(2000, 10, 10, 0, 0, 0), new Date(2000, 10, 11, 23, 59, 59)],
				show: true
			}
		},
	}
</script>

<style scoped>
	.pic_title {
		margin-top: 20px;
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
		box-sizing: border-box;
	}
	
	.hao_title {
		padding: 10px;
		line-height: 22px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
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
		position: relative;
	}
	
	.bottom {
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.fenye {
		text-align: center;
		margin: 20px 0;
	}
</style>