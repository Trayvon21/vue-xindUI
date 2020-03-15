import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home,
        children: [{
            path: '',
            name: 'index',
            component: () =>
                import('../pages/index/Index.vue')
        }]
    },
    //basic基本
    {
        path: '/xButton',
        component: Home,
        children: [{
            path: '',
            name: 'xButton',
            component: () =>
                import('../pages/basic/XButton.vue')
        }]
    },
    {
        path: '/xIcon',
        component: Home,
        children: [{
            path: '',
            name: 'xIcon',
            component: () =>
                import('../pages/basic/XIcon.vue')
        }]
    },
    //导航
    {
        path: '/xTags',
        component: Home,
        children: [{
            path: '',
            name: 'xButton',
            component: () =>
                import('../pages/navigation/TagsView.vue')
        }]
    },
    {
        path: '/xBackTop',
        component: Home,
        children: [{
            path: '',
            name: 'xBackTop',
            component: () =>
                import('../pages/navigation/BackTopView.vue')
        }]
    },
    //表单

    //图表
    {
        path: '/xTrend',
        component: Home,
        children: [{
            path: '',
            name: 'xTrend',
            component: () =>
                import('../pages/chart/TrendView.vue')
        }]
    },
    {
        path: '/xProgress',
        component: Home,
        children: [{
            path: '',
            name: 'xProgress',
            component: () =>
                import('../pages/chart/ProgressView.vue')
        }]
    },
    {
        path: '/xImagePreview',
        component: Home,
        children: [{
            path: '',
            name: 'xImagePreview',
            component: () =>
                import('../pages/chart/XImagePreview.vue')
        }]
    },
    {
        path: '/xNoticeIcon',
        component: Home,
        children: [{
            path: '',
            name: 'xNoticeIcon',
            component: () =>
                import('../pages/chart/XNoticeIcon.vue')
        }]
    },
    //功能
    {
        path: '/xLock',
        component: Home,
        children: [{
            path: '',
            name: 'xLock',
            component: () =>
                import('../pages/career/XLock.vue')
        }]
    },
    {
        path: '/xLockView',
        name: 'xLockView',
        component: () =>
            import('../pages/career/XLockView.vue')
    },
    {
        path: '/xFullScreen',
        component: Home,
        children: [{
            path: '',
            name: 'xFullScreen',
            component: () =>
                import('../pages/career/XFullScreen.vue')
        }]
    },
    {
        path: '/xDialog',
        component: Home,
        children: [{
            path: '',
            name: 'xDialog',
            component: () =>
                import('../pages/career/XDialog.vue')
        }]
    },
    {
        path: '/403',
        component: Home,
        children: [{
            path: '',
            name: 'x403',
            component: () =>
                import('../pages/career/X403.vue')
        }]
    },
    {
        path: '/404',
        component: Home,
        children: [{
            path: '',
            name: 'x404',
            component: () =>
                import('../pages/career/X404.vue')
        }]
    },
    {
        path: '/500',
        component: Home,
        children: [{
            path: '',
            name: 'x500',
            component: () =>
                import('../pages/career/X500.vue')
        }]
    },
    //复合
    {
        path: '/xLogin',
        component: Home,
        children: [{
            path: '',
            name: 'xLogin',
            component: () =>
                import('../pages/complex/LoginView.vue')
        }]
    },
    {
        path: '*',
        component: Home,
        children: [{
            path: '',
            name: 'err',
            component: () =>
                import('../pages/err/Err.vue')
        }]
    },

]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})
export default router