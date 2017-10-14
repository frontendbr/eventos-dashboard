import { OPEN_LOADING, CLOSE_LOADING } from '../mutation-types';

const showLoading = ({ commit }) => commit(OPEN_LOADING);
const closeLoading = ({ commit }) => commit(CLOSE_LOADING);

const actions = {
    showLoading,
    closeLoading,
};

const getters = {
    loading: state => state.loading,
};


const mutations = {
    [OPEN_LOADING](state) {
        state.loading = true; // eslint-disable-line
    },
    [CLOSE_LOADING](state) {
        state.loading = false; // eslint-disable-line
    },
};

const initialState = {
    loading: false,
};

export default {
    state: initialState,
    getters,
    actions,
    mutations,
};
