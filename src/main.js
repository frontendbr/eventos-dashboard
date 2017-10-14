// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Buefy from 'buefy';
import VueResource from 'vue-resource';

import 'buefy/lib/buefy.css';
import 'font-awesome/css/font-awesome.min.css';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(Buefy, {
    defaultIconPack: 'fa',
});

Vue.http.interceptors.push((request, next) => {
    request.headers.set('Authorization', '53d6e9fecfa65db78ac2ad9ab0d236cfe51337ed');
    request.headers.set('Content-Type', 'application/json');
    next();
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App,
    },
});
