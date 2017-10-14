import Vue from 'vue';
import {
    URL_API,
} from '../constants';
import store from '../../store';
import {
    CLOSE_LOADING,
    OPEN_LOADING,
} from '../../store/mutation-types';

const loading = (request) => {
    store.commit(OPEN_LOADING);
    return request;
};

const post = ({
    url,
    params,
}) => loading(Vue
    .http
    .post(`${URL_API}${url}`, params)
    .catch(error => Promise.reject(error))
    .finally(() => store.commit(CLOSE_LOADING)));

const get = ({
    url,
    params,
}) => loading(Vue
    .http
    .get(`${URL_API}${url}`, params)
    .catch(error => Promise.reject(error))
    .finally(() => store.commit(CLOSE_LOADING)));


export default {
    get,
    post,
};
