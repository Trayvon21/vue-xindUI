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
    //功能

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
            name: '404',
            component: () =>
                import('../pages/career/404.vue')
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