<template>
    <aside>
        <el-menu :default-active="$route.name" unique-opened router>
            <el-submenu v-for="(menu, key) in menus" v-if="!menu.meta.hidden" :index="menu.path" :key="menu.path">
                <template slot="title">
                    <span class="admin-customtext"><i :class="menu.meta.icon"></i>{{ menu.meta.title }}</span>
                </template>
                <el-menu-item-group class="admin-custombg">
                    <el-menu-item v-for="(item, index) in menu.children" :index="getIndex(item)" :key="item.path"
                                  :route="{name: getIndex(item)}">
                        <span class="admin-customtext"><i :class="item.meta.icon"></i>{{ item.meta.title }}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </aside>
</template>

<script>
    import {setLoginUserRouter} from '@/utils/auth'

    export default {
        computed: {
            menus() {
                return setLoginUserRouter(this.$router.options.routes);
            }
        },
        methods: {
            getIndex(item) {
                if (typeof item.name !== 'undefined') {
                    return item.name
                }
                if (typeof item.children !== 'undefined' && 0 !== item.children.length) {
                    let k = item.path
                    item.children.every((value, index) => {
                        if (typeof value.name !== 'undefined' && value.path === '') {
                            k = value.name
                            return false
                        }
                    })
                    return k
                }
                return item.path
            }
        }
    }
</script>