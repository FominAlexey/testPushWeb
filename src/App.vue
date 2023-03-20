<template>
  <div>Token Device: {{ token }}</div>
  <button v-on:click="getToken()">Get TOKEN!</button>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      token: '',
    }
    
  },
  methods: {
    getToken() {
      this.token = this.$store.state.token;
      console.log(this.$store.state.token)
    }
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
