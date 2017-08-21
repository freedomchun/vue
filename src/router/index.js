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

import WebInfo from '@/views/web/WebInfo'
import ColumnList from '@/views/web/ColumnList'
import ArticleList from '@/views/web/ArticleList'
import Message from '@/views/web/Message'
import ActivityManage from '@/views/operation/ActivityManage'
import TopicManage from '@/views/operation/TopicManage'
import DestinationManage from '@/views/operation/DestinationManage'
import LeaderManage from '@/views/operation/LeaderManage'
import RaiderManage from '@/views/operation/RaiderManage'
import FoodManage from '@/views/operation/FoodManage'

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
    },{
        path: '/web',
        name: '网站内容',
        icon: 'iconfont icon-shezhi',
        component: Admin,
        children: [{
            path: 'webInfo',
            name: '网站信息',
            icon: 'iconfont icon-jiaose',
            component: WebInfo
        },{
            path: 'columnList',
            name: '栏目设置',
            icon: 'iconfont icon-jiaose',
            component: ColumnList
        },{
            path: 'articleList',
            name: '文章发布',
            icon: 'iconfont icon-jiaose',
            component: ArticleList
        },{
            path: 'message',
            name: '短信管理',
            icon: 'iconfont icon-jiaose',
            component: Message
        }]
    },{
        path: '/operation',
        name: '运营管理',
        icon: 'iconfont icon-shezhi',
        component: Admin,
        children: [{
            path: 'activityManage',
            name: '活动管理',
            icon: 'iconfont icon-jiaose',
            component: ActivityManage
        },{
            path: 'topicManage',
            icon: 'iconfont icon-jiaose',
            name: '主题管理',
            component: TopicManage
        },{
            path: 'destinationManage',
            icon: 'iconfont icon-jiaose',
            name: '目的地管理',
            component: DestinationManage
        },{
            path: 'leaderManage',
            icon: 'iconfont icon-jiaose',
            name: '领队管理',
            component: LeaderManage
        },{
            path: 'raiderManage',
            icon: 'iconfont icon-jiaose',
            name: '攻略管理',
            component: RaiderManage
        },{
            path: 'foodManage',
            icon: 'iconfont icon-jiaose',
            name: '美食管理',
            component: FoodManage
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