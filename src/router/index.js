import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/user/Login'
import Admin from '@/views/common/Admin'
import Sysinfo from '@/views/common/Sysinfo'
import Role from '@/views/setting/Role'
import NoPermissions from '@/views/permissions/NoPermissions'
import NotFind from '@/views/error/404'
import AccountManage from '@/views/setting/AccountManage'
import Permisson from '@/views/setting/Permisson'
import MyInfo from '@/views/user/MyInfo'
import Pic from '@/views/picture/Pic'

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
        }, {
            path: 'noPermissions',
            name: '无权限',
            component: NoPermissions,
            hidden: true
        }, {
            path: '404',
            name: '404',
            component: NotFind,
            hidden: true
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
        path: '/picture',
        name: '附件管理',
        icon: 'iconfont icon-shezhi',
        component: Admin,
        children: [{
            path: 'pic',
            name: '图片管理',
            icon: 'iconfont icon-jiaose',
            component: Pic
        }]
    }, {
        path: '/login',
        component: Login,
        hidden: true
    }, {
        path: '*',
        redirect: '/404',
        hidden: true
    }]
});

export default router;