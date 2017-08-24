<template>
	<div>
		<el-form label-position="top" :model="activityform">
			<div class="bg-g">
				<el-form-item label="美食标题">
					<el-input placeholder="请输入标题"></el-input>
				</el-form-item>
				<el-form-item label="美食描述">
					<el-input type="textarea" placeholder="请输入描述"></el-input>
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
				<el-form-item label="地图定位">
					<div class="amap-wrapper">
						<el-amap :vid="'amap-vue'"></el-amap>
					</div>
				</el-form-item>
				<el-form-item label="输入地点">
					<el-form inline>
						<el-form-item>
							<el-input placeholder="请输入地点"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary">查询</el-button>
						</el-form-item>
						<el-form-item>
							<el-button type="danger">标记</el-button>
						</el-form-item>
					</el-form>
				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="展示图片（3张最佳）">
					<el-upload action="/" list-type="picture-card">
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog size="tiny">
						<img width="100%" src="dialogImageUrl" alt="">
					</el-dialog>

				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="上传图片">
					<el-upload action="/" list-type="picture-card">
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog size="tiny">
						<img width="100%" src="dialogImageUrl" alt="">
					</el-dialog>
					<p>建议尺寸：900*500，建议格式png，不超过500kb</p>
				</el-form-item>
			</div>
			<div class="bg-g">
				<el-form-item label="美食摘要（（选填，如果未填写会默认取游玩攻略前200个字））">
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
				options: [{
					value: '选项1',
					label: '黄金糕'
				}],
				value: '',
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
	
	.amap-wrapper {
		width: 100%;
		height: 200px;
	}
</style>