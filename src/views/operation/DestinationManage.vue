<template>
    <section>
        <div class="grid-content bg-g">
            <el-form inline style="padding-top: 20px; padding-left: 20px;">
                <el-form-item>
                    <el-input placeholder="请输入关键词"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="mddForm">新建</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <el-form inline style="padding-top: 20px; padding-left: 20px;" label-position="top">
                <el-form-item label="选择归属">
                    <el-select placeholder="请选择" v-model="op.select">
                        <el-option v-for="item in locs" :key="item.value" :label="item.label"
                                   :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style=" vertical-align: bottom">
                    <el-button type="primary">确定</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="ms" border style="width: 100%; margin-top: 20px;">
            <el-table-column prop="state" label="状态" width="150"></el-table-column>
            <el-table-column prop="region" label="地区" width="150"></el-table-column>
            <el-table-column prop="destination" label="目的地" width="200"></el-table-column>
            <el-table-column prop="amount" label="活动数" width="150"></el-table-column>
            <el-table-column prop="raider" label="攻略数" width="150"></el-table-column>
            <el-table-column prop="food" label="美食数" width="150"></el-table-column>
            <el-table-column prop="minsu" label="民宿数" width="150"></el-table-column>
            <el-table-column prop="created_at" label="创建时间" width="150"></el-table-column>
            <el-table-column prop="created_person" label="创建人" width="150"></el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
                <template scope="scope">
                    <el-button-group>
                        <el-button style="margin-left: 10px;" type="primary" size="small">
                            修改
                        </el-button>
                        <el-button type="danger" size="small">
                            删除
                        </el-button>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="fenye" :current-page.sync="pagination.current_page" :page-size="pagination.per_page"
                       :total="pagination.total" layout="total, prev, pager, next">
        </el-pagination>

        <!--新增界面-->
        <el-dialog title="新增" v-model="op.showAdd" :close-on-click-modal="false" size="tiny">
            <el-form label-position="top" :model="op.add" ref="mdd">
                <el-form-item label="归属">
                    <el-cascader expand-trigger="hover" :options="locs" v-model="op.loc" :props="op.props" filterable></el-cascader>
                </el-form-item>
                <el-form-item label="增加目的地">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="封面图片">
                    <el-upload action="/" list-type="picture-card">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog size="tiny">
                        <img width="100%" src="dialogImageUrl" alt="">
                    </el-dialog>
                    <p>建议尺寸：1920*470</p>
                </el-form-item>
                <el-form-item label="目的地描述">
                    <el-input type="textarea" placeholder="目的地描述"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button>取消</el-button>
                <el-button type="primary">提交</el-button>
            </div>
        </el-dialog>
    </section>
</template>
<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        computed: mapState({
            locs: state => state.loc.locs,
            ms: state => state.loc.ms,
            op: state => state.loc.op,
            pagination: state => state.loc.pagination,
        }),
        mounted() {
            if (this.locs.length === 0) {
                this.getLocs()
            }
        },
        methods: {
            ...mapActions(['getLocs']),
            mddForm() {
                this.op.showAdd = true;
            }
        }
    }
</script>
<style scoped>
    .bg-g {
        background: #eeeeee;
        border-radius: .2em;
    }
</style>