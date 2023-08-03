import { createRouter, createWebHashHistory } from "vue-router";
import TopKek from './components/TopKek.vue';
import SearchPg from './components/SearchPg';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: TopKek},
        {path: '/search', component: SearchPg}
    ]
});

export default router;