<template>
	<section>
		<div class="grid-content bg-g">
			<el-form inline style="padding-top: 20px; padding-left: 20px;">
				<el-form-item>
					<el-input v-model="keyword" placeholder="请输入关键词"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="getPermissions">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="addUserForm">新建</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div>
			<el-form inline style="padding-top: 20px; padding-left: 20px;" label-position="top">
				<el-form-item label="选择目的地">
					<el-cascader :options="options" v-model="selectedOptions"></el-cascader>
				</el-form-item>
				<el-form-item style=" vertical-align: bottom">
					<el-button type="primary">确定</el-button>
				</el-form-item>
			</el-form>
		</div>
		<el-table :data="psList" border style="width: 100%; margin-top: 20px;">
			<el-table-column prop="state" label="状态" width="150"></el-table-column>
			<el-table-column prop="region" label="地区" width="150"></el-table-column>
			<el-table-column prop="destination" label="目的地" width="200"></el-table-column>
			<el-table-column prop="amount" label="活动数" width="150"></el-table-column>
			<el-table-column prop="raider" label="攻略数" width="150"></el-table-column>
			<el-table-column prop="food" label="美食数" width="150"></el-table-column>
			<el-table-column prop="minsu" label="民宿数" width="150"></el-table-column>
			<el-table-column prop="created_at" label="创建时间" width="150"></el-table-column>
			<el-table-column prop="created_person" label="创建人" width="150"></el-table-column>
			<el-table-column fixed="right" label="操作" width="200">
				<template scope="scope">
					<el-button-group>
						<el-button style="margin-left: 10px;" type="primary" size="small">
							修改
						</el-button>
						<el-button type="danger" size="small">
							删除
						</el-button>
					</el-button-group>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination class="fenye" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
		</el-pagination>
		<!--新增界面-->
		<el-dialog title="新增主题" v-model="showAddUser" :close-on-click-modal="false" size="tiny">
			<el-form label-position="top" :model="addUser" ref="addUser">
				<el-form-item label="选择国内外">
					<el-select placeholder="请选择">
						<el-option>
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="选择地区">
					<el-select placeholder="请选择">
						<el-option>
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="状态" prop="disable" :rules="[{ required: true, message: '状态不能为空'}]">
					<el-select v-model="addUser.disable" placeholder="请选择状态">
						<el-option label="启用" value="F"></el-option>
						<el-option label="禁用" value="T"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="增加新地区">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="增加目的地">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="封面图片">
					<el-upload action="/" list-type="picture-card" >
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog size="tiny">
						<img width="100%" src="dialogImageUrl" alt="">
					</el-dialog>
					<p>建议尺寸：1920*470</p>
				</el-form-item>
				<el-form-item label="目的地描述">
					<el-input type="textarea" placeholder="目的地描述"></el-input>
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
	export default {
		data() {
			return {
				currentPage1: 5,
				psList: [],
				keyword: '',
				showAddUser: false,
				addUser: {},
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
			}
		},
		mounted() {
			this.getPermissions();
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			addUserForm() {
				this.showAddUser = true;
			},
			getPermissions() {
				this.loading = true;
				console.log(this.keyword)
			},
		},
	}
</script>
<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
	}
</style>