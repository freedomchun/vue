<template>
	<section>
		<el-row>
			<el-col :span="24" class="bg-g">
				<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<el-button type="primary">上传头像</el-button><span> 支持jpg格式，图片大小500kb以内。</span>
				</el-upload>
				<ul>
						<li>
							姓名：寒梅
						</li>
						<li>
							在职情况：在职
						</li>
						<li>
							电子邮箱：dehwhde@qq.com
						</li>
						<li>
							角色组：超级管理员
						</li>
					</ul>
			</el-col>
			<el-col :span="24" class="bg-g" style="margin-top: 20px;" >
				<el-form ref="ruleForm2" label-width="100px" class="demo-ruleForm">
					<p style="padding:12px 20px; border-bottom: 1px solid #c6c6c6; line-height: 24px;">更改密码</p>
					<el-form-item label="原密码" prop="pass">
						<el-input type="password" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="新密码" prop="checkPass">
						<el-input type="password" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="checkPass">
						<el-input type="password" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary">提交</el-button>
						<el-button>重置</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				imageUrl: 'http://xizangyinxiang.com/res/bing/images/a-jd01.jpg'
			};
		},
		methods: {
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if(!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			}
		}
	}
</script>

<style scoped>
	.bg-g {
		background: #eeeeee;
		border-radius: .2em;
	}

	
	.bg-g ul li {
		border-bottom: 1px solid #c6c6c6;
		line-height: 24px;
		font-size: 16px;
		padding: 12px 20px;
	}
	.avatar-uploader{
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
	
	.avatar {border-radius: 6px;
		width: 160px;
		height: 160px;
		display: block;
		 margin-bottom: 20px;
	}
	.el-form-item{ width: 500px !important;}
</style>