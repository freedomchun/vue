import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login/Login'
import Admin from '@/views/common/Admin'
import Sysinfo from '@/views/set/Sysinfo'
import Menu from '@/views/set/Menu'
import Role from '@/views/set/Role'

Vue.use(Router)
import utils from '../utils'
let routes = [
    {
        path: '/',
        redirect: '/set/sysinfo',
        slug: 'view.index',
        name: '首页',
        component: Admin
    }, {
        path: '/login',
        component: Login
    },
    {
        path: '/set',
        icon: 'el-icon-setting',
        slug: 'view.set',
        name: '全局配置',
        component: Admin,
        children: [
            {
                path: 'menu',
                slug: 'view.menu',
                name: '菜单管理',
                component: Menu
            },
            {
                path: 'sysinfo',
                slug: 'sysinfo',
                name: '系统概况',
                component: Sysinfo
            },
            {
                path: 'role',
                name: '角色组',
                component: Role
            }]
    }
];

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        sessionStorage.removeItem('loginUser');
    }
    let loginUser = JSON.parse(sessionStorage.getItem('loginUser'));
    if (!loginUser && to.path != '/login') {
        next({
            path: '/login'
        })
    } else {
        next()
    }
})

export default router