<template>
	<div class="bg-g">
		<el-form label-position="top">
			<el-form-item label="栏目名称" prop="name">
				<el-input placeholder="请输入栏目名称"></el-input>
			</el-form-item>
			<el-form-item label="顶级栏目" prop="topLevel">
				<el-select v-model="value" placeholder="请选择" style="width: 100%;">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="SEO 标题" placeholder="请输入SEO 标题">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="SEO 关键词">
				<el-input placeholder="请输入SEO 关键词"></el-input>
			</el-form-item>
			<el-form-item label="SEO 网页描述">
				<el-input placeholder="请输入SEO 网页描述"></el-input>
			</el-form-item>
			<el-form-item label="类型">
				<el-radio class="radio" v-model="radio" label="1">列表页</el-radio>
                <el-radio class="radio" v-model="radio" label="2">单网页</el-radio>
			</el-form-item>
			<el-form-item label="是否在栏目列表处显示">
				<el-switch v-model="value1" on-text="是" off-text="否">
				</el-switch>
			</el-form-item>
			<el-form-item>
				<el-button>取消</el-button>
				<el-button type="primary">提交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	 export default {
    data() {
      return {
        value1: true,
        radio: '1'
      }
    }
  };
</script>

<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
		padding: 20px
	}
</style>