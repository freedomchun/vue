<template>
	<div class="cont">
		<el-form :model="addPermission" ref="addPermission" label-position="top">
			<el-form-item label="所属栏目" prop="topLevel">
				<el-select v-model="value" placeholder="请选择" style="width: 100%;">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="文章标题" prop="title">
				<el-input v-model="addPermission.name" placeholder="请输入文章名称"></el-input>
			</el-form-item>
			<el-form-item label="关键词">
				<el-input v-model="addPermission.seoKeyword" placeholder="请输入关键词 用空格或逗号隔开"></el-input>
			</el-form-item>
			<el-form-item label="简介">
				<el-input type="textarea" v-model="addPermission.seoDescription" placeholder="请输入简介内容"></el-input>
			</el-form-item>
			<el-form-item label="文章内容">
				<div id="editor">
					<mavon-editor style="height: 100%"></mavon-editor>
				</div>
			</el-form-item>
			<el-form-item>
				<el-button>取消</el-button>
				<el-button type="primary">提交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	import { mavonEditor } from 'mavon-editor'
	import 'mavon-editor/dist/css/index.css'
	export default {
		components: {
			mavonEditor
		},
		data() {
			return {
				options: [{
					value: '选项1',
					label: '关于遇途记'
				}, {
					value: '选项2',
					label: '活动报名'
				}],
				value: '',
				makd: '',
				addPermission: {
					title: '',
					amount: '',
				},
			}
		},
	}
</script>
<style>
	.cont {
		background-color: #fff;
		border: 1px solid #c9c8c8;
		box-sizing: border-box;
		padding: 20px;
	}
</style>