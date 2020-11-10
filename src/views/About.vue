<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a class="btn btn-success btn-lg mx-2" @click.prevent="incrementa" role="button">Incrementar</a>
    <a class="btn btn-danger btn-lg mx-2" @click.prevent="decrementa" role="button">Decrementar</a>
    <a class="btn btn-info btn-lg mx-2" @click.prevent="resetea" role="button">Reset</a>
    <div class="my-5">
      <div class="alert alert-primary" role="alert">
        {{$store.state.numero}}
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
  name: 'About',
  methods: {
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