<template>
    <div>
        <h1>Bem Vindo!</h1>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
};
</script>

<style>

</style>
