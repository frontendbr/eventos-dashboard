<template>
    <div id="app">
        <header>
            <span>Eventos By Front-End Brasil</span>
        </header>
        <main class="container is-fluid">
            <b-loading :active.sync="loading" :canCancel="false"></b-loading>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'app',
    computed: {
        ...mapGetters([
            'loading',
        ]),
    },
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma";
@import "~buefy/src/scss/buefy";

body {
    margin: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

main {
    text-align: center;
    margin-top: 40px;
}

header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: $primary;
    color: $menu-label-color;
}

header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
}
</style>
