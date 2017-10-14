<template>
    <div>
        <div class="column" v-for="item in menu" v-bind:key="item.id">
            <div class="card" @click="go(item)">
                <div class="card-content">
                    <div class="content">
                        <div class="columns is-centered">
                            <div class="column">
                                <svg viewBox="0 0 100 100" class="card-interaction">
                                    <use  v-bind="{'xlink:href': svg(item) }" ></use>
                                </svg>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <span v-html="item.label"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'home',
    methods: {
        svg: item => `/static/icon/si-sprite.svg#${item.id}`,
        go({ url }) {
            this.$router.push(url);
        },
    },
    computed: {
        ...mapGetters([
            'menu',
        ]),
    },
};
</script>

<style>
.card-interaction {
    max-width: 100px;
}
.card {
    transition: transform 0.3s ease-in;
}

.card:hover {
    transform: scale(1.05, 1.05);
}
</style>
