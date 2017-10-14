import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Cadastro from '@/components/Cadastro';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        props: route => ({
            accessToken: route.query.accessToken,
        }),
    },
    {
        path: '/cadastro',
        name: 'Cadastro',
        component: Cadastro,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
    ],
});
