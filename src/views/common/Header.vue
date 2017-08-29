<template>
	<el-col :span="24" class="header">
		<el-row style="clear: both;">
		<el-col :span="11" class="logo">
			<img src="../../assets/admin-logo.png" />
		</el-col>
		<el-col :span="10" class="usersearch">
			<span><i class="iconfont icon-jiesuan-xianxing"></i></span>
			<span><i class="iconfont icon-cangkucangchu-xianxing"></i></span>
			<span><el-input style="border-radius: 20px;" placeholder="搜索..." icon="search" v-model="search"></el-input></span>
		</el-col>
		<el-col :span="3" class="userinfo" v-if="loginUser">
			<el-dropdown trigger="hover">
				<span class="el-dropdown-link userinfo-inner">
                    <img :src="imagecut(loginUser.avatar, 35)" id="avatar"> {{ loginUser.name }}
                    <i class="icon-angle-down"></i>
                </span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>
						<router-link :to="{name: 'myInfo'}" style="color: #000; text-decoration: none;">个人中心</router-link>
					</el-dropdown-item>
					<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</el-col>
		</el-row>
	</el-col>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		data() {
			return {
				search: '',
			}
		},
		computed: {
			...mapGetters(['loginUser'])
		},
		methods: {
			logout: function() {
				this.$confirm('你确认退出吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.$store.dispatch('logOut').then(() => {
						this.$router.push('/login');
					}).catch(err => {
						console.info(err);
					})
				}).catch(() => {});
			}
		}
	}
</script>