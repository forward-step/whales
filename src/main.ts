import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { antd } from '@/js';
import "ant-design-vue/dist/antd.css";

router.beforeEach((to, from, next) => {
    next();
    // @ts-ignore
    document.title = to.meta.title;
})

createApp(App)
    .use(antd)
    .use(store)
    .use(router)
    .mount('#app');
