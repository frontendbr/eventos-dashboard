import MenuAPI from '../../api/menu';
import router from '../../router';
import {
    LOGIN_SUCCESS,
    LOGOUT,
    MENU_LOADED,
} from '../mutation-types';

// initial state
const initialState = {
    token: null,
    menu: [],
};

// getters
const getters = {
    token: state => state.token,
    isAuthenticated: state => state.token !== null,
    menu: state => state.menu,
};

// actions
export const login = ({
    commit,
}, {
    accessToken,
}) => {
    if (accessToken) {
        commit(LOGIN_SUCCESS, accessToken);
        return MenuAPI
            .list()
            .then(({ data: menu }) => commit(MENU_LOADED, menu));
    }
    return Promise.reject({
        error: 'Usuário não informado.',
    });
};

export const logout = ({
    commit,
}) => commit(LOGOUT);

const actions = {
    login,
    logout,
};


// mutations
const mutations = {
    [LOGIN_SUCCESS](state, token) {
        state.token = token; // eslint-disable-line
    },
    [MENU_LOADED](state, menu) {
        state.menu = menu; // eslint-disable-line
        router.push('/');
    },
};

export default {
    state: initialState,
    getters,
    actions,
    mutations,
};
