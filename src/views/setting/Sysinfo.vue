<template>
    <div class="grid-content bg-g">
        <el-row>
            <el-col :lg="14" :md="24">
                <img :src="fuwu" width="100%">
            </el-col>
            <el-col :lg="10" :md="24">
                <ul>
                    <li><h3>服务器信息</h3></li>
                    <li v-for="(info, key) in infos">{{ key }}：{{ info }}</li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import fuwu from '@/assets/fuwu.jpg'
    export default {
        data() {
            return {
                infos: [],
                fuwu
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
        border-bottom: none !important;

    }
</style>