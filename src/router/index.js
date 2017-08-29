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
import Article from '@/views/web/Article'
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

import OrderManage from '@/views/order/OrderManage'
//import ActivityOrder from '@/views/order/ActivityOrder'
//import OrderDetail from '@/views/order/OrderDetail'
import DinzhiManage from '@/views/order/DinzhiManage'
//import DinzhiDetail from '@/views/order/DinzhiDetail'

import InfoManage from '@/views/info/InfoManage'
import InfoDetail from '@/views/info/InfoDetail'
import TravelManage from '@/views/info/TravelManage'
import TravelDetail from '@/views/info/TravelDetail'
import WebTraffic from '@/views/data/WebTraffic'
import ActivityTraffic from '@/views/data/ActivityTraffic'
import OrderData from '@/views/data/OrderData'
import InfoData from '@/views/data/InfoData'

import ChainTab from '@/views/chain/ChainTab'
import ChainPage from '@/views/chain/ChainPage'



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
            icon: 'iconfont icon-shezhi-xianxing',
        },
        children: [{
            path: 'role',
            name: 'role',
            component: Role,
            meta: {
                slug: 'all.role',
                title: '角色管理',
                icon: 'iconfont icon-jiaosequnti',
            }
        }, {
            path: 'permission',
            name: 'permission',
            component: Permisson,
            meta: {
                slug: 'all.permission',
                title: '权限管理',
                icon: 'iconfont icon-quanxianyuechi-xianxing',
            }
        }, {
            path: 'accountManage',
            name: 'accountManage',
            component: AccountManage,
            meta: {
                slug: 'all.user',
                title: '账户管理',
                icon: 'iconfont icon-yonghu-xianxing',
            }
        }]
    }, {
        path: '/picture',
        name: 'picture',
        component: Admin,
        meta: {
            title: '附件管理',
            icon: 'iconfont icon-fujian',
        },
        children: [{
            path: 'pic',
            name: 'pic',
            component: Pic,
            meta: {
                title: '图片管理',
                icon: 'iconfont icon-tupian-xianxing',
            }
        }]
    }, {
        path: '/web',
        name: 'web',
        component: Admin,
        meta: {
            title: '网站内容',
            icon: 'iconfont icon-wangzhan',
        },
        children: [{
            path: 'webInfo',
            name: 'webInfo',
            component: WebInfo,
            meta: {
                title: '网站信息',
                icon: 'iconfont icon-bf-message',
            }
        }, {
            path: 'columnList',
            name: 'columnList',
            component: ColumnList,
            meta: {
                title: '栏目设置',
                icon: 'iconfont icon-lanmushezhi',
            }
        }, {
            path: 'article',
            component: ArticleList,
            meta: {
                title: '文章发布',
                icon: 'iconfont icon-fabu',
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
                icon: 'iconfont icon-duanxin',
            }
        }]
    }, {
        path: '/operation',
        name: 'operation',
        component: Admin,
        meta: {
            title: '运营管理',
            icon: 'iconfont icon-yunyingguanli',
        },
        children: [{
            path: 'destinationManage',
            name: 'destinationManage',
            component: DestinationManage,
            meta: {
                title: '目的地管理',
                icon: 'iconfont icon-mudedi',
            }
        }, {
            path: 'activityManage',
            name: 'activityManage',
            component: ActivityManage,
            meta: {
                title: '活动管理',
                icon: 'iconfont icon-huodongguanli',
            }
        }, {
            path: 'topicManage',
            name: 'topicManage',
            component: TopicManage,
            meta: {
                title: '主题管理',
                icon: 'iconfont icon-zhuti',
            }
        }, {
            path: 'leaderManage',
            name: 'leaderManage',
            component: LeaderManage,
            meta: {
                title: '领队管理',
                icon: 'iconfont icon-lingduiguanli',
            }
        }, {
            path: 'raiderManage',
            name: 'raiderManage',
            component: RaiderManage,
            meta: {
                title: '攻略管理',
                icon: 'iconfont icon-gonglve',
            }
        }, {
            path: 'foodManage',
            name: 'foodManage',
            component: FoodManage,
            meta: {
                title: '美食管理',
                icon: 'iconfont icon-meishi',
            }
        }, {
            path: 'minsuManage',
            name: 'minsuManage',
            component: MinsuManage,
            meta: {
                title: '民宿管理',
                icon: 'iconfont icon-minsu',
            }
        }, {
            path: 'scenicManage',
            name: 'scenicManage',
            component: ScenicManage,
            meta: {
                title: '景点管理',
                icon: 'iconfont icon-jingdian',
            }
        }]
    }, {
        path: '/order',
        name: 'order',
        component: Admin,
        meta: {
            title: '订单中心',
            icon: 'iconfont icon-dingdanzhongxin',
        },
        children: [{
            path: 'orderManage',
            name: 'orderManage',
            component: OrderManage,
            meta: {
                title: '订单管理',
                icon: 'iconfont icon-dingdanguanli',
            }
        },{
            path: 'dinzhiManage',
            name: 'dinzhiManage',
            component: DinzhiManage,
            meta: {
                title: '定制管理',
                icon: 'iconfont icon-dingzhi',
            }
        }]
    }, {
        path: '/info',
        name: 'info',
        component: Admin,
        meta: {
            title: '用户管理',
            icon: 'iconfont icon-zhanghaoshezhi',
        },
        children: [{
            path: 'infoManage',
            name: 'infoManage',
            component: InfoManage,
            meta: {
                title: '用户信息',
                icon: 'iconfont icon-m0010101',
            }
        },{
            path: 'infoDetail',
            name: 'infoDetail',
            component: InfoDetail,
            meta: {
                title: '用户详情',
                icon: 'iconfont icon-zhanghu',
            }
        },{
            path: 'travelManage',
            name: 'travelManage',
            component: TravelManage,
            meta: {
                title: '游记管理',
                icon: 'iconfont icon-icon',
            }
        },{
            path: 'travelDetail',
            name: 'travelDetail',
            component: TravelDetail,
            meta: {
                title: '游记详情',
                icon: 'iconfont icon-zhanghu',
            }
        }]
    },{
        path: '/data',
        name: 'data',
        component: Admin,
        meta: {
            title: '数据中心',
            icon: 'iconfont icon-shujuzhongxin',
        },
        children: [{
            path: 'WebTraffic',
            name: 'webTraffic',
            component: WebTraffic,
            meta: {
                title: '网站流量',
                icon: 'iconfont icon-shuju1',
            }
        },{
            path: 'activityTraffic',
            name: 'activityTraffic',
            component: ActivityTraffic,
            meta: {
                title: '活动流量',
                icon: 'iconfont icon-dingdanshuju',
            }
        },{
            path: 'orderData',
            name: 'orderData',
            component: OrderData,
            meta: {
                title: '订单数据',
                icon: 'iconfont icon-shuju',
            }
        },{
            path: 'infoData',
            name: 'infoData',
            component: InfoData,
            meta: {
                title: '用户数据',
                icon: 'iconfont icon-yonghushuju',
            }
        }]
    }, {
        path: '/chain',
        name: 'chain',
        component: Admin,
        meta: {
            title: '外链管理',
            icon: 'iconfont icon-wailian',
        },
        children: [{
            path: 'chainTab',
            name: 'chainTab',
            component: ChainTab,
            meta: {
                title: '外链标签',
                icon: 'iconfont icon-wailian2',
            }
        },{
            path: 'chainPage',
            name: 'chainPage',
            component: ChainPage,
            meta: {
                title: '外链页面',
                icon: 'iconfont icon-wailian1',
            }
        }]
    },{
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