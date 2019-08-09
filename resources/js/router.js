
import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Tasks from './views/Tasks'

Vue.use(Router)

const router = new Router({
    base: '/app/',
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: Tasks
        },
    ],
});

export default router