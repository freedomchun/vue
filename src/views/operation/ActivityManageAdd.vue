<template>
	<div>
		<el-form label-position="top" :model="activityform">
			<div class="bg-g">
				<el-form-item label="活动标题">
					<el-input placeholder="请输入活动标题"></el-input>
				</el-form-item>
				<el-form-item label="活动描述">
					<el-input type="textarea" placeholder="请输入活动描述"></el-input>
				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="选择关联目的地">
					<el-select placeholder="请选择" v-model="value">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
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
				<el-form-item label="选择关联主题">
					<el-tag :key="tag.name" v-for="tag in dynamicTags" :type="tag.type" :closable="true" :close-transition="false" @close="handleClose(tag)">
						{{tag.name}}
					</el-tag>
					<el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="mini" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
					</el-input>
					<el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新标签</el-button>
				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="出发地">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="定金">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="页面显示金额">
					<el-input></el-input>
				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="批次设置">
					<div class="set">
						<div class="set_one">
							<p>批次编号-001</p>
							<el-form label-position="left" :model="activityform">
								<el-form-item label="报名截止时间">
									<el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
									</el-date-picker>
								</el-form-item>
								<el-form-item label="活动开始时间">
									<el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
									</el-date-picker>
								</el-form-item>
								<el-form-item label="活动结束时间">
									<el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
									</el-date-picker>
								</el-form-item>

								<el-form-item label="状态">
									<el-select placeholder="请选择" v-model="value">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="是否成团">
									<el-select placeholder="请选择" v-model="value">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="金额">
									<el-input placeholder="请填写金额数字"></el-input>
								</el-form-item>
								<el-form-item label="人数设置">
									<el-input placeholder="请填写人数"></el-input>
								</el-form-item>
							</el-form>
						</div>
						<div class="set_one">
							<p>批次编号-002</p>
							<el-form label-position="left" :model="activityform">
								<el-form-item label="报名截止时间">
									<el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
									</el-date-picker>
								</el-form-item>
								<el-form-item label="活动开始时间">
									<el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
									</el-date-picker>
								</el-form-item>
								<el-form-item label="活动结束时间">
									<el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
									</el-date-picker>
								</el-form-item>
								<el-form-item label="状态">
									<el-select placeholder="请选择" v-model="value">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="是否成团">
									<el-select placeholder="请选择" v-model="value">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="金额">
									<el-input placeholder="请填写金额数字"></el-input>
								</el-form-item>
								<el-form-item label="人数设置">
									<el-input placeholder="请填写人数"></el-input>
								</el-form-item>
							</el-form>
						</div>
					</div>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" icon="plus">增加批次</el-button>
					<el-button type="gray" icon="minus">删除批次</el-button> <span>当前共计 <em style="font-style: normal; color: #4db3ff;">15条</em> 批次</span>
				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="图片设置">
					<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog v-model="dialogVisible" size="tiny">
						<img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>
				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="产品简介">
					<el-input type="textarea" placeholder="请输入内容"></el-input>
				</el-form-item>
				<el-form-item label="产品特色">
					<el-row :gutter="10">
						<el-col :md="24" :lg="8" style="text-align: center;">
							<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
								<i class="el-icon-plus"></i>
							</el-upload>
							<el-dialog v-model="dialogVisible">
								<img width="100%" :src="dialogImageUrl" alt="">
							</el-dialog>
							<el-input type="textarea" placeholder="请输入特色描述" style="margin-top: 20px;"></el-input>
						</el-col>
						<el-col :md="24" :lg="8" style="text-align: center;">
							<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
								<i class="el-icon-plus"></i>
							</el-upload>
							<el-dialog v-model="dialogVisible">
								<img width="100%" :src="dialogImageUrl" alt="">
							</el-dialog>
							<el-input type="textarea" placeholder="请输入特色描述" style="margin-top: 20px;"></el-input>
						</el-col>
						<el-col :md="24" :lg="8" style="text-align: center;">
							<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
								<i class="el-icon-plus"></i>
							</el-upload>
							<el-dialog v-model="dialogVisible">
								<img width="100%" :src="dialogImageUrl" alt="">
							</el-dialog>
							<el-input type="textarea" placeholder="请输入特色描述" style="margin-top: 20px;"></el-input>
						</el-col>
					</el-row>
				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="行程设置">
					<el-tabs v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="02天" name="first">
							<el-form-item class="marginTop">
								<el-input placeholder="请输入城市/地点"></el-input>
							</el-form-item>
							<el-form-item class="marginTop">
								<el-input type="textarea" placeholder="请输入行程内容"></el-input>
							</el-form-item>
							<el-row :gutter="10" class="marginTop">
								<el-col :md="12" :lg="6">
									<el-form-item label="住宿">
										<el-input></el-input>
									</el-form-item>
								</el-col>
								<el-col :md="12" :lg="6">
									<el-form-item label="早餐">
										<el-input></el-input>
									</el-form-item>
								</el-col>
								<el-col :md="12" :lg="6">
									<el-form-item label="午餐">
										<el-input></el-input>
									</el-form-item>
								</el-col>
								<el-col :md="12" :lg="6">
									<el-form-item label="晚餐">
										<el-input></el-input>
									</el-form-item>
								</el-col>
							</el-row>
							<el-form-item class="marginTop">
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
						<el-button type="gray" icon="minus">增加一天</el-button>
					</el-form-item>
				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="费用包含">
					<el-input type="textarea" placeholder="请输入内容"></el-input>
				</el-form-item>
				<el-form-item label="费用不含">
					<el-input type="textarea" placeholder="请输入内容"></el-input>
				</el-form-item>
				<el-form-item label="预订须知">
					<el-input type="textarea" placeholder="请输入内容"></el-input>
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
				<el-form-item label="带团领队（可多选）">
					<el-tabs v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="西藏" name="first">
							<el-checkbox-group>
								<el-checkbox label="name A"></el-checkbox>
								<el-checkbox label="name B"></el-checkbox>
								<el-checkbox label="name C"></el-checkbox>
							</el-checkbox-group>
						</el-tab-pane>
						<el-tab-pane label="新疆" name="second">新疆</el-tab-pane>
						<el-tab-pane label="四川" name="third">四川</el-tab-pane>
						<el-tab-pane label="泰国" name="fourth">泰国</el-tab-pane>
					</el-tabs>
				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="主推活动设置">
					<p>是否设置为首页主推活动？</p>
					<el-switch v-model="value3" on-color="#13ce66" off-color="#ff4949" on-text="是" off-text="否">
					</el-switch>
					<p>选择首页放置位置</p>
					<el-checkbox-group>
						<el-checkbox label="位置1"></el-checkbox>
						<el-checkbox label="位置2"></el-checkbox>
						<el-checkbox label="位置3"></el-checkbox>
					</el-checkbox-group>
					<p>描述</p>
					<el-input type="textarea" placeholder="首页文字描述（40字以内）"></el-input>
					<p style=" color: #f00;">注：设置主推活动后，自动替换对应原位置的活动</p>
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
				options: [{
					value: '选项1',
					label: '黄金糕'
				}],
				value: '',
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
				dynamicTags: [{
						name: '特惠游',
						type: 'danger'
					},
					{
						name: '亲子游',
						type: 'warning'
					},
					{
						name: '暑期游',
						type: 'success'
					}
				],
				inputVisible: false,
				inputValue: '',
				checkAll: true,
				checkedCities: ['上海', '北京'],
				cities: cityOptions,
				isIndeterminate: true,
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
			handleClose(tag) {
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
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
</style>