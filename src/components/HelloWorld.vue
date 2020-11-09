<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" @click.prevent="cambiaEstado" role="button">Modificar</a>
    </div>
    <div class="my-5">
      <div class="alert alert-primary" role="alert">
        {{$store.state.contador}}
      </div>
      <div class="alert alert-success" role="alert" v-if="$store.state.activado">
        A simple success alert—check it out!
      </div>
      <div class="alert alert-danger" role="alert" v-else>
        A simple danger alert—check it out!
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    cambiaEstado(){
      this.$store.dispatch('activandoEstadoAccion');
    }
  },
}
</script>

<style scoped>

</style>
