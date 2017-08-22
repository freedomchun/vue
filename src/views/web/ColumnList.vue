<template>
	<section>
		<div class="grid-content bg-g">
			<el-form inline style="padding-top: 20px; padding-left: 20px;">
				<el-form-item>
					<el-input v-model="keyword" placeholder="请输入检测词"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="getPermissions">查询</el-button>
				</el-form-item>
				<el-form-item>
					<router-link to="/colum/columnListAdd">新建</router-link>
				</el-form-item>
			</el-form>
		</div>
		<el-table :data="psList" border style="width: 100%; margin-top: 20px;">
			<el-table-column prop="id" label="ID" sortable width="100"></el-table-column>
			<el-table-column prop="disable_at" label="状态" width="100" sortable>
				<template scope="scope">
					<el-tag type="success" v-if="scope.row.disable_at === null">激活</el-tag>
					<div slot="reference" class="name-wrapper">
						<el-tag type="danger">禁用</el-tag>
					</div>
				</template>
			</el-table-column>
			<el-table-column prop="name" label="名称"></el-table-column>
			<el-table-column prop="quantity" label="文章数量" width="200"></el-table-column>
			<el-table-column prop="created_at" label="创建日期" width="200"></el-table-column>
			<el-table-column fixed="right" label="操作" width="170">
				<template scope="scope">
					<el-button-group>
						<el-button type="primary" size="small">
							修改
						</el-button>
						<el-button type="danger" size="small">
							删除
						</el-button>
					</el-button-group>
				</template>
			</el-table-column>
		</el-table>
		<transition name="el-fade-in-linear">
            <router-view></router-view>
        </transition>
	</section>
</template>
<script>
	export default {
		data() {
			return { 
				psList: [],
				keyword: '',
			}
		},
	}
</script>
<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
	}
	
	.text-colorred {
		color: #f00;
		font-size: 12px;
	}
</style>