<template>
	 <section>
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
				<el-button type="primary" @click="addFileForm">新建文件夹</el-button>
			</el-form-item>
		</el-form>
		<el-row :gutter="5">
			<el-col :span="4">
				<div class="pic_title">
					<h3 class="pic_h3">图片目录</h3>
				</div>
				<el-tree :data="data" :props="defaultProps" highlight-current accordion @node-click="handleNodeClick"></el-tree>
			</el-col>
			<el-col :span="20">
				<div class="pic_title">
					<el-checkbox style="margin-right: 20px;">全选</el-checkbox>
					<el-button type="danger" style="margin-right: 20px; ">删除</el-button>
					<span style="height: 36px; margin-top: 7px; line-height: 36px;">移动到：
					<el-cascader :options="options" v-model="selectedOptions"></el-cascader></span>
				</div>
				<div class="bg-white">
					<el-row>
						<el-col :lg="6" :md="8">
							<el-card :body-style="{ padding: '0px' }">
								<img src="../../assets/fuwu.jpg" class="image">
								<div class="hao_title">
									<span>图片名图片名称图片名图片名称图片名称称.jpg</span>
								</div>
								<div class="bottom clearfix">
									<el-checkbox class="check"></el-checkbox>
								</div>
							</el-card>
						</el-col>
						<el-col :lg="6" :md="8">
							<el-card :body-style="{ padding: '0px' }">
								<img src="../../assets/fuwu.jpg" class="image">
								<div class="hao_title">
									<span>图片名图片名称图片名图片名称图片名称称.jpg</span>
								</div>
								<div class="bottom clearfix">
									<el-checkbox class="check"></el-checkbox>
								</div>
							</el-card>
						</el-col>
						<el-col :lg="6" :md="8">
							<el-card :body-style="{ padding: '0px' }">
								<img src="../../assets/fuwu.jpg" class="image">
								<div class="hao_title">
									<span>图片名图片名称图片名图片名称图片名称称.jpg</span>
								</div>
								<div class="bottom clearfix">
									<el-checkbox class="check"></el-checkbox>
								</div>
							</el-card>
						</el-col>
						<el-col :lg="6" :md="8">
							<el-card :body-style="{ padding: '0px' }">
								<img src="../../assets/fuwu.jpg" class="image">
								<div class="hao_title">
									<span>图片名图片名称图片名图片名称图片名称称.jpg</span>
								</div>
								<div class="bottom clearfix">
									<el-checkbox class="check"></el-checkbox>
								</div>
							</el-card>
						</el-col>
						<el-col :lg="6" :md="8">
							<el-card :body-style="{ padding: '0px' }">
								<img src="../../assets/fuwu.jpg" class="image">
								<div class="hao_title">
									<span>图片名图片名称图片名图片名称图片名称称.jpg</span>
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
		<!--新建文件夹-->
		 <el-dialog title="新建文件夹" v-model="showFile" :close-on-click-modal="false">
            <el-form label-position="top">
                <el-form-item label="输入文件夹名称" prop="name" :rules="[{ required: true, message: '名称不能为空'}]">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button>取消</el-button>
                <el-button type="primary">提交</el-button>
            </div>
        </el-dialog>
	</div>
 </section>
</template>

<script>
	export default {
		data() {
			return {
				showFile: false,

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
					}],
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				options: [{
					value: 'zhinan',
					label: '指南',
					children: [{
						value: 'shejiyuanze',
						label: '设计原则',
						children: [{
							value: 'yizhi',
							label: '一致'
						}, {
							value: 'fankui',
							label: '反馈'
						}, {
							value: 'xiaolv',
							label: '效率'
						}, {
							value: 'kekong',
							label: '可控'
						}]
					}, {
						value: 'daohang',
						label: '导航',
						children: [{
							value: 'cexiangdaohang',
							label: '侧向导航'
						}, {
							value: 'dingbudaohang',
							label: '顶部导航'
						}]
					}]
				}],
				selectedOptions: [],
			};
		},
		methods: {
			addFileForm() {
                this.showFile = true;
            },
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
		box-sizing: border-box;
	}
	
	.time {
		font-size: 14px;
		color: #999;
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
		top: 0px;
		left: 0px;
	}
	
	.fenye {
		text-align: center;
		margin: 20px 0;
	}
</style>