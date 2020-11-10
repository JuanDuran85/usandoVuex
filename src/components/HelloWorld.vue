<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg mx-2" @click.prevent="cambiaEstado" role="button">Modificar</a>
      <a class="btn btn-success btn-lg mx-2" @click.prevent="incrementa" role="button">Incrementar</a>
      <a class="btn btn-danger btn-lg mx-2" @click.prevent="decrementa" role="button">Decrementar</a>
      <a class="btn btn-info btn-lg mx-2" @click.prevent="resetea" role="button">Reset</a>
    </div>
    <div class="my-5">
      <div class="alert alert-primary" role="alert">
        {{traerNumero}}
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
  computed: {
    traerNumero(){
      return this.$store.getters.mostrandoNumero;
    }
  },
  methods: {
    cambiaEstado(){
      this.$store.dispatch('activandoEstadoAccion');
    },
    incrementa(){
      this.$store.dispatch('incrementaNumero');
    },
    decrementa(){
      this.$store.dispatch('decrementaNumero');
    },
    resetea(){
      this.$store.dispatch('resetNumero');
    }
  },
}
</script>

<style scoped>

</style>
