import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = () => import('@/views/user/Login')
const Admin = () => import('@/views/common/Admin')
const Sysinfo = () => import('@/views/common/Sysinfo')
const Role = () => import('@/views/setting/Role')
const NoPermissions = () => import('@/views/permissions/NoPermissions')
const NotFind = () => import('@/views/error/404')
const AccountManage = () => import('@/views/setting/AccountManage')
const Permisson = () => import('@/views/setting/Permisson')
const MyInfo = () => import('@/views/user/MyInfo')
const Pic = () => import('@/views/picture/Pic')
const WebInfo = () => import('@/views/web/WebInfo')
const ColumnList = () => import('@/views/web/ColumnList')
const ArticleList = () => import('@/views/web/ArticleList')
const Alist = () => import('@/views/web/Alist')
const Article = () => import('@/views/web/Article')
const Message = () => import('@/views/web/Message')
const ActivityManage = () => import('@/views/operation/ActivityManage')
const ActivityManageAdd = () => import('@/views/operation/ActivityManageAdd')
const TopicManage = () => import('@/views/operation/TopicManage')
const DestinationManage = () => import('@/views/operation/DestinationManage')
const LeaderManage = () => import('@/views/operation/LeaderManage')
const RaiderManage = () => import('@/views/operation/RaiderManage')
const RaiderManageAdd = () => import('@/views/operation/RaiderManageAdd')
const FoodManage = () => import('@/views/operation/FoodManage')
const FoodManageAdd = () => import('@/views/operation/FoodManageAdd')
const MinsuManage = () => import('@/views/operation/MinsuManage')
const MinsuManageAdd = () => import('@/views/operation/MinsuManageAdd')
const ScenicManage = () => import('@/views/operation/ScenicManage')
const ScenicManageAdd = () => import('@/views/operation/ScenicManageAdd')

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
                    title: '文章列表',
                    icon: 'iconfont icon-shezhi',
                }
            }, {
                path: 'add',
                name: 'articleAdd',
                component: Article,
                meta: {
                    title: '文章添加',
                    icon: 'iconfont icon-shezhi',
                }
            }, {
                path: 'edit/:id',
                name: 'articleEdit',
                component: Article,
                meta: {
                    title: '文章编辑',
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