<template>
    <aside>
        <el-menu :default-active="$route.path" unique-opened router>
            <el-submenu v-for="(menu, key) in menus" v-if="!menu.hidden" :index="menu.path" :key="menu.path">
                <template slot="title">
                    <span class="admin-customtext"><i :class="menu.icon"></i>{{ menu.name }}</span>
                </template>
                <el-menu-item-group class="admin-custombg">
                    <el-menu-item v-for="(item, index) in menu.children" :index="menu.path + '/' + item.path" :key="item.path">
                        <span class="admin-customtext"><i :class="item.icon"></i>{{ item.name }}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </aside>
</template>

<script>
    export default {
        data() {
            return {
                menus: []
            }
        },
        mounted() {
            let rs = this.$router.options.routes;
            this.menus = utils.auth.setLoginUserRouter(rs);
        }
    }
</script>