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
import Alist from '@/views/web/Alist'
import ArticleEdit from '@/views/web/ArticleEdit'
import Message from '@/views/web/Message'
import ActivityManage from '@/views/operation/ActivityManage'
import ActivityManageAdd from '@/views/operation/ActivityManageAdd'
import TopicManage from '@/views/operation/TopicManage'
import DestinationManage from '@/views/operation/DestinationManage'
import LeaderManage from '@/views/operation/LeaderManage'
import RaiderManage from '@/views/operation/RaiderManage'
import RaiderManageAdd from '@/views/operation/RaiderManageAdd'
import FoodManage from '@/views/operation/FoodManage'
import FoodManageAdd from '@/views/operation/FoodManageAdd'
import MinsuManage from '@/views/operation/MinsuManage'
import MinsuManageAdd from '@/views/operation/MinsuManageAdd'
import ScenicManage from '@/views/operation/ScenicManage'
import ScenicManageAdd from '@/views/operation/ScenicManageAdd'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: Admin,
        meta: {
            title: '首页',
            hidden: true,
        },
        children: [{
            path: '',
            name: 'home',
            component: Sysinfo,
            meta: {
                title: '系统概况',
                icon: 'el-icon-setting',
            }
        }, {
            path: 'myInfo',
            name: 'myInfo',
            component: MyInfo,
            meta: {
                title: '个人中心',
                icon: 'el-icon-setting',
            }
        }, {
            path: 'noPermissions',
            name: 'noPermissions',
            component: NoPermissions,
            meta: {
                title: '无权限',
                icon: 'el-icon-setting',
            }
        }, {
            path: 'activityManageAdd',
            name: 'activityManageAdd',
            component: ActivityManageAdd,
            meta: {
                title: '新增活动',
                icon: 'el-icon-setting',
            }
        }, {
            path: 'raiderManageAdd',
            name: 'raiderManageAdd',
            component: RaiderManageAdd,
            meta: {
                title: '新增攻略',
                icon: 'el-icon-setting',
            }
        }, {
            path: 'foodManageAdd',
            name: 'foodManageAdd',
            component: FoodManageAdd,
            meta: {
                title: '新增美食',
                icon: 'el-icon-setting',
            }
        }, {
            path: 'minsuManageAdd',
            name: 'minsuManageAdd',
            component: MinsuManageAdd,
            meta: {
                title: '新增民宿',
                icon: 'el-icon-setting',
            }
        }, {
            path: 'scenicManageAdd',
            name: 'scenicManageAdd',
            component: ScenicManageAdd,
            meta: {
                title: '新增景点',
                icon: 'el-icon-setting',
            }
        }, {
            path: '404',
            name: '404',
            component: NotFind,
            meta: {
                title: '未找到页面',
            }
        }]
    }, {
        path: '/setting',
        name: 'setting',
        component: Admin,
        meta: {
            title: '全局配置',
            icon: 'iconfont icon-shezhi',
        },
        children: [{
            path: 'role',
            name: 'role',
            component: Role,
            meta: {
                slug: 'all.role',
                title: '角色管理',
                icon: 'iconfont icon-jiaose',
            }
        }, {
            path: 'permission',
            name: 'permission',
            component: Permisson,
            meta: {
                slug: 'all.permission',
                title: '权限管理',
                icon: 'iconfont icon-quanxianmiyao',
            }
        }, {
            path: 'accountManage',
            name: 'accountManage',
            component: AccountManage,
            meta: {
                slug: 'all.user',
                title: '账户管理',
                icon: 'iconfont icon-zhanghu',
            }
        }]
    }, {
        path: '/picture',
        name: 'picture',
        component: Admin,
        meta: {
            title: '附件管理',
            icon: 'iconfont icon-zhanghu',
        },
        children: [{
            path: 'pic',
            name: 'pic',
            component: Pic,
            meta: {
                title: '图片管理',
                icon: 'iconfont icon-zhanghu',
            }
        }]
    }, {
        path: '/web',
        name: 'web',
        component: Admin,
        meta: {
            title: '网站内容',
            icon: 'iconfont icon-shezhi',
        },
        children: [{
            path: 'webInfo',
            name: 'webInfo',
            component: WebInfo,
            meta: {
                title: '网站信息',
                icon: 'iconfont icon-shezhi',
            }
        }, {
            path: 'columnList',
            name: 'columnList',
            component: ColumnList,
            meta: {
                title: '栏目设置',
                icon: 'iconfont icon-shezhi',
            }
        }, {
            path: 'article',
            component: ArticleList,
            meta: {
                title: '文章发布',
                icon: 'iconfont icon-shezhi',
            },
            children: [{
                path: '',
                name: 'alist',
                component: Alist,
                meta: {
                    title: '列表页',
                    icon: 'iconfont icon-shezhi',
                }
            }, {
                path: 'articleEdit',
                name: 'articleEdit',
                component: ArticleEdit,
                meta: {
                    title: '编辑页',
                    icon: 'iconfont icon-shezhi',
                }
            }]
        }, {
            path: 'message',
            name: 'message',
            component: Message,
            meta: {
                title: '短信管理',
                icon: 'iconfont icon-shezhi',
            }
        }]
    }, {
        path: '/operation',
        name: 'operation',
        component: Admin,
        meta: {
            title: '运营管理',
            icon: 'iconfont icon-shezhi',
        },
        children: [{
            path: 'destinationManage',
            name: 'destinationManage',
            component: DestinationManage,
            meta: {
                title: '目的地管理',
                icon: 'iconfont icon-shezhi',
            }
        }, {
            path: 'activityManage',
            name: 'activityManage',
            component: ActivityManage,
            meta: {
                title: '活动管理',
                icon: 'iconfont icon-shezhi',
            }
        }, {
            path: 'topicManage',
            name: 'topicManage',
            component: TopicManage,
            meta: {
                title: '主题管理',
                icon: 'iconfont icon-shezhi',
            }
        }, {
            path: 'leaderManage',
            name: 'leaderManage',
            component: LeaderManage,
            meta: {
                title: '领队管理',
                icon: 'iconfont icon-shezhi',
            }
        }, {
            path: 'raiderManage',
            name: 'raiderManage',
            component: RaiderManage,
            meta: {
                title: '攻略管理',
                icon: 'iconfont icon-shezhi',
            }
        }, {
            path: 'foodManage',
            name: 'foodManage',
            component: FoodManage,
            meta: {
                title: '美食管理',
                icon: 'iconfont icon-shezhi',
            }
        }, {
            path: 'minsuManage',
            name: 'minsuManage',
            component: MinsuManage,
            meta: {
                title: '民宿管理',
                icon: 'iconfont icon-shezhi',
            }
        }, {
            path: 'scenicManage',
            name: 'scenicManage',
            component: ScenicManage,
            meta: {
                title: '景点管理',
                icon: 'iconfont icon-shezhi',
            }
        }]
    }, {
        path: '/login',
        component: Login,
        meta: {
            title: '登录',
            hidden: true,
        }
    }, {
        path: '*',
        redirect: {
            name: '404'
        },
        meta: {
            title: '404',
            hidden: true,
        }
    }]
})

export default router