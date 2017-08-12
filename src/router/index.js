import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login/Login'
import Admin from '@/views/common/Admin'
import Sysinfo from '@/views/setting/Sysinfo'
import Role from '@/views/setting/Role'
import NoAllPermissions from '@/views/permissions/NoAllPermissions'
import NoFind from '@/views/error/404'

import AccountManage from '@/views/setting/AccountManage'
import Permisson from '@/views/setting/Permisson'
import MyInfo from '@/views/user/MyInfo'

import utils from '../utils'

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        redirect: 'sysinfo',
        name: '首页',
        component: Admin,
        hidden: true,
        children: [{
            path: 'sysinfo',
            name: '系统概况',
            icon: 'el-icon-setting',
            component: Sysinfo
        }, {
            path: 'myInfo',
            name: '个人中心',
            component: MyInfo
        }]
    }, {
        path: '/setting',
        name: '全局配置',
        icon: 'iconfont icon-shezhi',
        component: Admin,
        children: [{
            path: 'role',
            name: '角色组',
            slug: 'all.role',
            icon: 'iconfont icon-jiaose',
            component: Role
        }, {
            path: 'permission',
            name: '权限管理',
            slug: 'all.permission',
            icon: 'iconfont icon-quanxianmiyao',
            component: Permisson
        }, {
            path: 'accountManage',
            name: '账户管理',
            slug: 'all.user',
            icon: 'iconfont icon-zhanghu',
            component: AccountManage
        }]
    }, {
        path: '/login',
        component: Login,
        hidden: true
    }, {
        path: '/noAllPermissions',
        component: NoAllPermissions,
        hidden: true
    }, {
        path: '/404',
        component: NoFind,
        hidden: true
    }, {
        path: '*',
        redirect: '/404',
        hidden: true
    }]
});

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        utils.auth.removeLoginUser();
    }
    let loginUser = utils.auth.getLoginUser();
    if (!loginUser && to.path !== '/login') {
        next({
            path: '/login'
        });
    } else {
        next();
    }
});

export default router;