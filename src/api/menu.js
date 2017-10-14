import Request from './request';

export default {
    list() {
        return Request.get({
            url: 'menu',
        });
    },
};
