<template>
  <div>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    let numeroUsuario = 2;
    setTimeout(()=>{
      this.$store.dispatch("infoApiLlama",numeroUsuario);
    },3000);
  },
}
</script>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
