import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login/Login'
import Admin from '@/views/common/Admin'
import Sysinfo from '@/views/set/Sysinfo'
import Role from '@/views/set/Role'
import NoAllPermissions from '@/views/permissions/NoAllPermissions'
import NoFind from '@/views/error/404'

import AccountManage from '@/views/set/AccountManage'
import Permisson from '@/views/set/Permisson'
import RolePermisson from '@/views/set/RolePermisson'
import MyInfo from '@/views/user/MyInfo'

Vue.use(Router)
import utils from '../utils'

let allRoutes = [
    {
        path: '/',
        redirect: 'sysinfo',
        name: '首页',
        component: Admin,
        children: [
            {
                path: 'sysinfo',
                name: '系统概况',
                component: Sysinfo
            }, {
                path: 'myInfo',
                name: '个人中心',
                component: MyInfo
            }
        ]
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/set',
        icon: 'el-icon-setting',
        name: '全局配置',
        component: Admin,
        children: [{
            path: 'role',
            name: '角色组',
            component: Role
        }, {
            path: 'permisson',
            name: '权限管理',
            component: Permisson
        }, {
            path: 'accountManage',
            name: '账户管理',
            component: AccountManage
        }, {
            path: 'rolePermisson',
            name: '角色权限',
            component: RolePermisson
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

let routes = utils.auth.setLoginUserRouter(allRoutes);
console.log(routes);

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        utils.auth.removeLoginUser();
    }
    let loginUser = utils.auth.getLoginUser();
    if (!loginUser && to.path !== '/login') {
        next({
            path: '/login'
        })
    } else {
        next()
    }
})

export default router;