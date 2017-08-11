import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login/Login'
import Admin from '@/views/common/Admin'
import Sysinfo from '@/views/set/Sysinfo'
import Role from '@/views/set/Role'
import NoAllPermissions from '@/views/permissions/NoAllPermissions'
import NoFind from '@/views/error/404'

Vue.use(Router)
import utils from '../utils'

let routes = [
    {
        path: '/',
        redirect: '/set/sysinfo',
        name: '首页',
        component: Admin
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/set',
        icon: 'el-icon-setting',
        name: '全局配置',
        component: Admin,
        children: [
            {
                path: 'sysinfo',
                slug: 'view.sysinfo',
                name: '系统概况',
                component: Sysinfo
            },
            {
                path: 'role',
                slug: 'view.role',
                name: '角色组',
                component: Role
            }]
    }, {
        path: '/noAllPermissions',
        component: NoAllPermissions
    }, {
        path: '/404',
        component: NoFind
    }, {
        path: '*',
        redirect: '/404'
    }
];

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        utils.auth.removeLoginUser();
    }
    let loginUser = utils.auth.getLoginUser();
    let permissions = utils.auth.getUserPermissions();
    if (!loginUser && to.path !== '/login') {
        next({
            path: '/login'
        })
    } else if (!permissions && to.path !== '/login') {
        next({
            path: '/noPermissions'
        })
    } else {
        next()
    }
})

export default router;