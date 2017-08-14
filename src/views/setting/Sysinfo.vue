<template>
    <div class="grid-content bg-g">
    	<el-row>
			<el-col :span="14">
				<img src="../../assets/fuwu.jpg"/>
			</el-col>
		<el-col :span="10">
        <ul>
            <li><h3>服务器信息</h3></li>
            <li v-for="(info, key) in infos">{{ key }}：{{ info }}</li>
        </ul>
        </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                infos: []
            }
        },
        mounted() {
            api.requestSysInfo().then(rs => {
                this.infos = rs.data
            }).catch(err => {
                utils.fns.err(err)
            })
        }
    }
</script>

<style scoped>
    .bg-g {
        background: #eeeeee;
        border-radius: .2em;
    }

    .bg-g ul {
        padding: 0 20px;
    }

    .bg-g ul li {
        border-bottom: 1px solid #ddd;
        line-height: 24px;
        font-size: 16px;
        padding: 12px 0;
    }
    .bg-g ul li:last-child {
        border-bottom:  none !important;
        
    }
</style>