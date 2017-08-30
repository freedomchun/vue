<template>
	<section>
		<div class="grid-content bg-g">
			<el-form inline style="padding-top: 20px; padding-left: 20px;">
				<el-form-item>
					<el-input placeholder="请输入关键词"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="addUserForm">新建</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div>
			<el-form inline style="padding-top: 20px; padding-left: 20px;" label-position="top">
				<el-form-item label="选择目的地">
					<el-select placeholder="请选择" v-model="value">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item style=" vertical-align: bottom">
					<el-button type="primary">确定</el-button>
				</el-form-item>
			</el-form>
		</div>
		<el-table :data="psList" border style="width: 100%; margin-top: 20px;">
			<el-table-column prop="state" label="状态" width="150"></el-table-column>
			<el-table-column prop="head" label="头像"></el-table-column>
			<el-table-column prop="leadername" label="领队姓名" width="200"></el-table-column>
			<el-table-column prop="amount" label="活动数" width="150"></el-table-column>
			<el-table-column prop="created_at" label="创建时间" width="150"></el-table-column>
			<el-table-column fixed="right" label="操作" width="200">
				<template scope="scope">
					<el-button-group>
						<el-button style="margin-left: 10px;" type="primary" size="small">
							修改
						</el-button>
						<el-button type="danger" size="small" @click="deleteMdd(scope.row)">
							删除
						</el-button>
					</el-button-group>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination class="fenye" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
		</el-pagination>
		<!--新增界面-->
		<el-dialog title="新增领队" v-model="showAddUser" :close-on-click-modal="false" size="tiny">
			<el-form label-position="top" :model="addUser" ref="addUser">
				<el-form-item>
					<el-upload class="avatar-uploader">
						<img src="http://www.0991you.com/res/bing/img/wanshazt260.jpg" class="avatar">
						<el-button type="primary">上传头像</el-button>
						<span> 支持jpg格式，图片大小1MB以内。</span>
					</el-upload>
				</el-form-item>
				<el-form-item label="领队姓名">
					<el-input placeholder="请输入领队姓名"></el-input>
				</el-form-item>
				<el-form-item label="状态" prop="disable">
					<el-select v-model="addUser.disable" placeholder="请选择状态">
						<el-option label="开启" value="F"></el-option>
						<el-option label="关闭" value="T"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="领队描述">
					<el-input type="textarea" placeholder="请输入内容"></el-input>
				</el-form-item>
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
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button>取消</el-button>
				<el-button type="primary">提交</el-button>
			</div>
		</el-dialog>
	</section>
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
				currentPage1: 5,
				checkAll: true,
				checkedCities: ['上海', '北京'],
				cities: cityOptions,
				isIndeterminate: true,
				psList: [{
					created_at: '2016-05-02',
					amount: 1
					
				}],
				showAddUser: false,
				addUser: {},

			}
		},
		methods: {
			handleCheckAllChange(event) {
				this.checkedCities = event.target.checked ? cityOptions : [];
				this.isIndeterminate = false;
			},
			handleCheckedCitiesChange(value) {
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.cities.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
			},
			addUserForm() {
				this.showAddUser = true;
			},
			deleteMdd(mdd) {
				this.$confirm(`你确定要删除 ${mdd.title} 吗?`, '提示', {
					type: 'warning'
				}).then(() => {
					this.delete_mdd(mdd).then(rs => {
						this.get_mddList()
						this.$message.success('删除成功')
					}).catch(() => {})
				}).catch(() => {})
			}

		},
	}
</script>
<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
	}
	
	.avatar-uploader {
		border-bottom: 1px solid #c6c6c6;
		padding: 20px;
	}
	
	.avatar-uploader .el-upload {
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.avatar-uploader .el-upload:hover {
		border-color: #20a0ff;
	}
	
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	
	.avatar {
		border-radius: 6px;
		width: 160px;
		height: 160px;
		display: block;
		margin-bottom: 20px;
	}
</style>