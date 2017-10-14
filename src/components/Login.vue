<template>
    <div>
        <div v-if="!loading && !isAuthenticated">
            <h1>Bem Vindo!</h1>
            <div class="columns is-centered">
                <div class="column">
                    <span>Este é o Portal de Eventos do Front-End Brasil</span>
                </div>
            </div>
            <div class="columns is-centered">
                <div>
                    <span>Para continuar, realize o Login</span>
                </div>
            </div>
            <div class="columns is-centered">
                <div>
                    <a class="button is-dark is-medium" @click="login()">
                        <span class="icon">
                            <i class="fa fa-github-square"></i>
                        </span>
                        <span>Login via GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'login',
    beforeMount() {
        const params = { accessToken: this.$attrs.accessToken };
        this.$store.dispatch('login', params);
    },
    computed: {
        ...mapGetters([
            'loading',
            'isAuthenticated',
        ]),
    },
    methods: {
        login() {
            // const urlApi = 'https://frontendbreventosapi-eventosapi.wedeploy.io/'
            const urlApi = 'http://localhost:3000/';
            location.href = `${urlApi}auth/github`;
        },
    },
};
</script>

<style>

</style>
