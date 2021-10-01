import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/chat',
        name: 'chat',
        component: () => import('@/views/auth-app/chat/index.vue'),
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/views/home-page/test/index.vue'),
        meta: {
            title: "测试页面"
        }
    },
    {
        path: '/home',
        name: 'home',
        // component: () => import('@/views/home-page/index.vue'),
        component: () => import('@/views/home-page/components/navigation-bar/index.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/',
        redirect: {
            name: "home"
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
