<template>
	<el-form class="contain" label-position="top">
		<div class="bg-g">
			<el-row :gutter="10" style="border-bottom: 1px solid #d2d2d2; padding-bottom: 20px;">
				<el-col :span="2">
					<div class="headpic"><img src="../../assets/fuwu.jpg" /></div>
				</el-col>
				<el-col :span="22">
					<div class="yufu">
						<h4>渔夫拍世界</h4>
						<p><span>发布时间：2019-09-09</span><span>最后更新：2019-09-09</span><span>点击量：3243</span></p>
					</div>
				</el-col>
			</el-row>
			<div class="small-box">
				<h4>标题： 左眼欧洲右眼亚洲的伊斯坦布尔五日游</h4>
				<p>内容：</p>
				<div class="small-content">
					<p>
						土耳其最大的城市伊斯坦布尔，记得以前叫君士坦丁堡。地中海的一条海峡把城市分成二部分，一部分在欧洲，一部分在亚洲，所以你站在海峡的大桥中央往东望去，就有了“左眼看欧洲右眼看亚洲”一说。</p>

					<p>特殊地理位置决定了土耳其既有欧洲人的文明和直率又具备亚洲人的细腻和优雅，在这个城市酒巴和清真寺同时充满在大街，既可看到包着严严实实的穆斯林女人，也可看到穿着暴露的妙龄少女，让人目不暇接。</p>

					<p>在土耳其的餐馆你可以享受到穿着得体举姿优越的帅哥给你端上一盘西餐，但里面会扣着一小碗白白的米饭，倍受亲切。所以说土耳其是我旅行体验里给我感觉最好的国家之一。</p>
					<img src="../../assets/fuwu.jpg" />
					<p>
						土耳其最大的城市伊斯坦布尔，记得以前叫君士坦丁堡。地中海的一条海峡把城市分成二部分，一部分在欧洲，一部分在亚洲，所以你站在海峡的大桥中央往东望去，就有了“左眼看欧洲右眼看亚洲”一说。</p>

					<p>特殊地理位置决定了土耳其既有欧洲人的文明和直率又具备亚洲人的细腻和优雅，在这个城市酒巴和清真寺同时充满在大街，既可看到包着严严实实的穆斯林女人，也可看到穿着暴露的妙龄少女，让人目不暇接。</p>

					<p>在土耳其的餐馆你可以享受到穿着得体举姿优越的帅哥给你端上一盘西餐，但里面会扣着一小碗白白的米饭，倍受亲切。所以说土耳其是我旅行体验里给我感觉最好的国家之一。</p>
					<img src="../../assets/fuwu.jpg" />
				</div>
			</div>
		</div>
		<el-form-item label="游记状态" style="margin-top: 30px;">
			<el-select placeholder="请选择状态" v-model="value">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item>
			<el-button type="primary">提交</el-button>
			<el-button>返回</el-button>
		</el-form-item>
	</el-form>
</template>
<script>
	export default {
		data() {
			return {
				options: [{
					value: '选项1',
					label: '未通过'
				}],
				value: '',
				currentPage1: 5,
			}
		}
	}
</script>

<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
		padding: 20px
	}
	
	.panel-body {
		margin-top: 20px;
	}
	
	.headbg {
		border-bottom: 1px solid #aaa;
		clear: both;
	}
	
	.headpic {
		text-align: center;
	}
	
	.headpic img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	
	.yufu {
		float: left;
		margin: 10px;
	}
	
	.yufu h4 {
		margin-top: 15px;
	}
	
	.yufu p span {
		padding-right: 10px;
	}
	
	.small-box {
		padding: 20px;
	}
	
	.small-content {
		background: #fff;
		padding: 20px;
		overflow-y: scroll;
		max-height: 500px;
	}
	
	.small-content p {
		font-size: 16px;
		line-height: 28px;
		color: #555;
		margin-bottom: 20px;
	}
	
	.small-content img {
		width: 100%;
		height: auto;
		margin-bottom: 20px;
	}
</style>