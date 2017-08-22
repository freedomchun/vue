<template>
	<section>
		<div class="bg-g">
			<article-find></article-find>
			<el-row :span="24" :gutter="10">
				<article-left></article-left>
				<el-col :span="20">
					 <router-view></router-view>
				</el-col>
			</el-row>
		</div>
	</section>
</template>
<script>
	import { ArticleFind, ArticleLeft } from '@/views/web';
	export default {
		components: {
			ArticleFind,
			ArticleLeft
		},
	}
</script>

<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
		padding: 20px;
	}
	
</style>