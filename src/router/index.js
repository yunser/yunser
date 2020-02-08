/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

router.beforeEach((to, from, next) => {
    // if (_hmt) {
    //     console.log('正确统计')
    //     if (to.path) {
    //         _hmt.push(['_trackPageview', '' + to.fullPath]);
    //     }
    // } else {
    //     console.log('无法正确统计')
    // }
    next();
});

export default router
