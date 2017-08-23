<template>
	<div>
		<el-form label-position="top" :model="activityform">
			<div class="bg-g">
				<el-form-item label="攻略标题">
					<el-input placeholder="请输入攻略标题"></el-input>
				</el-form-item>
				<el-form-item label="攻略描述">
					<el-input type="textarea" placeholder="请输入攻略描述"></el-input>
				</el-form-item>
				<el-form-item label="攻略视频">
					<el-input placeholder="请输入视频连接"></el-input>
				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="选择关联目的地">
					<el-cascader :options="options" v-model="selectedOptions"></el-cascader>
					<div class="mudi">
						<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
						<div style="margin: 15px 0;"></div>
						<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
							<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
						</el-checkbox-group>
					</div>
				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="选择关联类别">
					<div class="mudi">
						<el-checkbox-group>
							<el-checkbox label="周边游"></el-checkbox>
							<el-checkbox label="省内游"></el-checkbox>
							<el-checkbox label="国内游"></el-checkbox>
							<el-checkbox label="处境游"></el-checkbox>
						</el-checkbox-group>
					</div>
				</el-form-item>
				<el-form-item label="选择出行月份">
					<div class="mudi">
						<el-checkbox-group>
							<el-checkbox label="1月"></el-checkbox>
							<el-checkbox label="2月"></el-checkbox>
							<el-checkbox label="3月"></el-checkbox>
							<el-checkbox label="4月"></el-checkbox>
						</el-checkbox-group>
					</div>
				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="行程设置">
					<el-tabs v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="01天" name="first">
							<el-form-item label="D1-行程概况" class="marginTop">
								<el-input type="textarea" placeholder="请输入行程内容"></el-input>
							</el-form-item>
							<el-form-item label="D1-游玩攻略" class="marginTop">
								<el-input type="textarea" placeholder="请输入行程内容"></el-input>
							</el-form-item>
							<el-form-item label="D1-游玩照片（三张最佳）" class="marginTop">
								<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
									<i class="el-icon-plus"></i>
								</el-upload>
								<el-dialog v-model="dialogVisible">
									<img width="100%" :src="dialogImageUrl" alt="">
								</el-dialog>
							</el-form-item>
							<el-form-item label="D1-交通攻略" class="marginTop">
								<el-input type="textarea" placeholder="请输入内容"></el-input>
							</el-form-item>
							<el-form-item label="D1-门票攻略" class="marginTop">
								<el-input type="textarea" placeholder="请输入内容"></el-input>
							</el-form-item>
							<el-form-item label="D1-餐饮攻略" class="marginTop">
								<el-input type="textarea" placeholder="请输入内容"></el-input>
							</el-form-item>
							<el-form-item label="D1-餐饮照片（三张最佳）" class="marginTop">
								<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
									<i class="el-icon-plus"></i>
								</el-upload>
								<el-dialog v-model="dialogVisible">
									<img width="100%" :src="dialogImageUrl" alt="">
								</el-dialog>
							</el-form-item>

						</el-tab-pane>
						<el-tab-pane label="02天" name="second">02天</el-tab-pane>
						<el-tab-pane label="03天" name="third">03天</el-tab-pane>
						<el-tab-pane label="04天" name="fourth">04天</el-tab-pane>
					</el-tabs>
					<el-form-item class="marginTop">
						<el-button type="primary" icon="plus">增加一天</el-button>
						<el-button type="gray" icon="minus">删除一天</el-button>
					</el-form-item>
				</el-form-item>
			</div>

			<div class="bg-g">
				<el-form-item label="封面图片">
					<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog v-model="dialogVisible" size="tiny">
						<img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>
					<p>建议尺寸：900*500，建议格式png，不超过500kb</p>
				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="攻略摘要（（选填，如果未填写会默认取游玩攻略前200个字））">
					<el-input type="textarea" placeholder="请输入内容"></el-input>
				</el-form-item>
			</div>
			<el-form-item>
				<el-button type="primary">提交</el-button>
				<el-button>返回</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	const cityOptions = ['上海', '北京', '广州', '深圳', '上海', '北京', '广州', '深圳'];
	export default {
		data() {
			return {
				activeName: 'first',
				dialogImageUrl: '',
				dialogVisible: false,
				pickerOptions0: {
					disabledDate(time) {
						return time.getTime() < Date.now() - 8.64e7;
					}
				},
				value1: '',
				value3: true,

				inputVisible: false,
				inputValue: '',
				checkAll: true,
				checkedCities: ['上海', '北京'],
				cities: cityOptions,
				isIndeterminate: true,
				options: [{
					value: 'zhinan',
					label: '国内',
					children: [{
						value: 'shejiyuanze',
						label: '四川',
						children: [{
							value: 'yizhi',
							label: '成都'
						}, {
							value: 'fankui',
							label: '绵阳'
						}, {
							value: 'xiaolv',
							label: '资阳'
						}, {
							value: 'kekong',
							label: '广元'
						}]
					}, {
						value: 'daohang',
						label: '西藏',
						children: [{
							value: 'cexiangdaohang',
							label: '拉萨'
						}, {
							value: 'dingbudaohang',
							label: '林芝'
						}]
					}]
				}],
				selectedOptions: [],
				activityform: {
					name: '',
					word: '',
					intro: '',
					copy: '',
					code1: '',

				}
			};

		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},

			showInput() {
				this.inputVisible = true;
				this.$nextTick(_ => {
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},

			handleInputConfirm() {
				let inputValue = this.inputValue;
				if(inputValue) {
					this.dynamicTags.push(inputValue);
				}
				this.inputVisible = false;
				this.inputValue = '';
			},
			handleCheckAllChange(event) {
				this.checkedCities = event.target.checked ? cityOptions : [];
				this.isIndeterminate = false;
			},
			handleCheckedCitiesChange(value) {
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.cities.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
			},
			//图片设置
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			}

		}
	}
</script>
<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
		padding: 20px;
		margin-bottom: 20px;
	}
	
	.marginTop {
		margin-top: 20px;
	}
	
	.mudi {
		background: #fff;
		border: 1px solid #ccc;
		padding: 20px;
		margin-top: 20px;
	}
	
	.set {
		background: #fff;
		border: 1px solid #ccc;
		margin-top: 20px;
		height: 600px;
		overflow-y: scroll;
	}
	
	.set_one {
		background: #fff;
		border-bottom: 1px solid #ccc;
		padding: 20px 20px 30px 20px;
	}
	.addmain {
		background: #4db3ff;
		color: white;
		margin: 0;
		padding: 10px 15px;
		border-radius: 4px;
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		font-size: 14px;
		box-sizing: border-box;
		outline: 0;
		text-align: center;
		text-decoration: none;
		border: 1px solid #c4c4c4;
	}
</style>