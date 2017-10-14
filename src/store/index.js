import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import user from './modules/user';
import common from './modules/common';


Vue.use(Vuex);

const storage = new VuexPersist({
    key: 'frontendbreventos',
    storage: window.sessionStorage,
});


export default new Vuex.Store({
    modules: {
        user,
        common,
    },
    plugins: [storage.plugin],
});
