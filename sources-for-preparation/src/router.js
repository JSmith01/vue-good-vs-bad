import Vue from 'vue';
import Router from 'vue-router';
import Home from './problems/Home.vue';
import Problem1 from './problems/01-reactivity/Problem1.vue';
import Problem2 from './problems/02-vue-features/Problem2.vue';
import Problem4 from './problems/04-timers-n-event-listeners/Problem4.vue';
import Problem8 from './problems/08-parent-child/Problem8.vue';
import Problem8step1 from './problems/08-parent-child/Problem8-step1.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './problems/About.vue')
    },
    {
        path: '/problem1',
        component: Problem1,
    },
    {
        path: '/problem2',
        component: Problem2,
    },
    {
        path: '/problem4',
        component: Problem4,
    },
    {
        path: '/problem8',
        component: Problem8,
    },
    {
        path: '/problem8-s',
        component: Problem8step1,
    },
];

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
