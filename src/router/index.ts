import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/Login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        children: [
            {
                path: '/System',
                name: 'User',
                meta: {
                    name: '系统管理'
                },
                component: () => import('@/views/System.vue'),
                children: [
                    {
                        path: '/System/user',
                        name: 'User',
                        component: () => import('@/views/System/user.vue'),
                        children: [

                        ],
                        meta: {
                            name: '用户管理'
                        }
                    },
                ]
            },
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('use_name')
    if (!role && to.path !== '/login') {
        next('/login');
    } else {
        next();
    }
});
export default router
