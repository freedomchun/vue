<template>
	<div class="bg-g">
		<el-form label-position="top" :model="webform">
			<el-form-item label="网站名称">
				<el-input v-model="webform.name"></el-input>
			</el-form-item>
			<el-form-item label="网站关键字">
				<el-input v-model="webform.word"></el-input>
			</el-form-item>
			<el-form-item label="网站简介">
				<el-input v-model="webform.intro"></el-input>
			</el-form-item>
			<el-form-item label="备案号">
				<el-input v-model="webform.copy"></el-input>
			</el-form-item>
			<el-form-item label="公用代码">
				<el-input type="textarea" v-model="webform.code1"></el-input>
			</el-form-item>
			<el-form-item label="PC端代码">
				<el-input type="textarea" v-model="webform.code2"></el-input>
			</el-form-item>
			<el-form-item label="移动端代码">
				<el-input type="textarea" v-model="webform.code3"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary">提交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				webform: {
					name: '遇途记',
					word: '旅游，遇途记',
					intro: '爱上自由，爱上体验式旅游',
					copy: '',
					code1: '',
					code2: '',
					code3: '',
				}
			};
		}
	}
</script>
<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
		padding: 20px
	}
</style>