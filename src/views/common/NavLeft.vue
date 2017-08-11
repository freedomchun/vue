<template>
    <aside>
        <el-menu default-active="sysinfo" :unique-opened="true" class="el-menu-vertical-demo" :router="true">
            <el-submenu index="1">
                <template slot="title">
                    <span class="admin-customtext"><i class="iconfont icon-shezhi"></i>全局配置</span>
                </template>
                <el-menu-item-group class="admin-custombg">
                    <el-menu-item index="/sysinfo"><span class="admin-customtext"><i
                            class="el-icon-setting"></i>系统概况</span></el-menu-item>
                    <el-menu-item index="/set/role"><span class="admin-customtext"><i
                            class="iconfont icon-jiaose"></i>角色组</span></el-menu-item>
                    <el-menu-item index="/set/permisson"><span class="admin-customtext"><i
                            class="iconfont icon-quanxianmiyao"></i>权限管理</span>
                    </el-menu-item>
                    <el-menu-item index="/set/accountManage"><span class="admin-customtext"><i
                            class="iconfont icon-zhanghu"></i>账户管理</span></el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <span class="admin-customtext"><i class="el-icon-setting"></i>网站内容</span>
                </template>
                <el-menu-item-group class="admin-custombg">
                    <el-menu-item index="2-1"><span class="admin-customtext"><i class="el-icon-setting"></i>网站信息</span>
                    </el-menu-item>
                    <el-menu-item index="2-2"><span class="admin-customtext"><i class="el-icon-setting"></i>栏目设置</span>
                    </el-menu-item>
                    <el-menu-item index="2-3"><span class="admin-customtext"><i class="el-icon-setting"></i>文章发布</span>
                    </el-menu-item>
                    <el-menu-item index="2-4"><span class="admin-customtext"><i class="el-icon-setting"></i>短信管理</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <span class="admin-customtext"><i class="el-icon-setting"></i>运营管理</span>
                </template>
                <el-menu-item-group class="admin-custombg">
                    <el-menu-item index="3-1"><span class="admin-customtext"><i class="el-icon-setting"></i>活动管理</span>
                    </el-menu-item>
                    <el-menu-item index="3-2"><span class="admin-customtext"><i class="el-icon-setting"></i>主题管理</span>
                    </el-menu-item>
                    <el-menu-item index="3-3"><span class="admin-customtext"><i class="el-icon-setting"></i>目的地管理</span>
                    </el-menu-item>
                    <el-menu-item index="3-4"><span class="admin-customtext"><i class="el-icon-setting"></i>领队管理</span>
                    </el-menu-item>
                    <el-menu-item index="3-5"><span class="admin-customtext"><i class="el-icon-setting"></i>攻略管理</span>
                    </el-menu-item>
                    <el-menu-item index="3-6"><span class="admin-customtext"><i class="el-icon-setting"></i>没事管理</span>
                    </el-menu-item>
                    <el-menu-item index="3-7"><span class="admin-customtext"><i class="el-icon-setting"></i>民宿管理</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <span class="admin-customtext"><i class="el-icon-setting"></i>订单中心</span>
                </template>
                <el-menu-item-group class="admin-custombg">
                    <el-menu-item index="4-1"><span class="admin-customtext"><i class="el-icon-setting"></i>订单管理</span>
                    </el-menu-item>
                    <el-menu-item index="4-2"><span class="admin-customtext"><i class="el-icon-setting"></i>定制管理</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <span class="admin-customtext"><i class="el-icon-setting"></i>用户管理</span>
                </template>
                <el-menu-item-group class="admin-custombg">
                    <el-menu-item index="5-1"><span class="admin-customtext"><i class="el-icon-setting"></i>用户信息</span>
                    </el-menu-item>
                    <el-menu-item index="5-2"><span class="admin-customtext"><i class="el-icon-setting"></i>游记管理</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title">
                    <span class="admin-customtext"><i class="el-icon-setting"></i>数据中心</span>
                </template>
                <el-menu-item-group class="admin-custombg">
                    <el-menu-item index="6-1"><span class="admin-customtext"><i class="el-icon-setting"></i>网站流量</span>
                    </el-menu-item>
                    <el-menu-item index="6-2"><span class="admin-customtext"><i class="el-icon-setting"></i>活动流量</span>
                    </el-menu-item>
                    <el-menu-item index="6-3"><span class="admin-customtext"><i class="el-icon-setting"></i>订单数据</span>
                    </el-menu-item>
                    <el-menu-item index="6-4"><span class="admin-customtext"><i class="el-icon-setting"></i>用户数据</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
                <template slot="title">
                    <span class="admin-customtext"><i class="el-icon-setting"></i>附件管理</span>
                </template>
                <el-menu-item-group class="admin-custombg">
                    <el-menu-item index="7-1"><span class="admin-customtext"><i class="el-icon-setting"></i>图片管理</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="8">
                <template slot="title">
                    <span class="admin-customtext"><i class="el-icon-setting"></i>外链管理</span>
                </template>
                <el-menu-item-group class="admin-custombg">
                    <el-menu-item index="8-1"><span class="admin-customtext"><i class="el-icon-setting"></i>外链标签</span>
                    </el-menu-item>
                    <el-menu-item index="8-2"><span class="admin-customtext"><i class="el-icon-setting"></i>外链页面</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </aside>
</template>

