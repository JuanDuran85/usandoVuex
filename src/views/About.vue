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
    <hr>
    <div class="container" v-if="infoCardUser.data">
      <div class="card">
        <img :src="infoCardUser.data.avatar" class="card-img-top" :alt="infoCardUser.data.id">
        <div class="card-body">
          <h5 class="card-title">{{infoCardUser.data.first_name}} {{infoCardUser.data.last_name}}</h5>
          <p class="card-text">{{infoCardUser.ad.text}}</p>
          <a :href="infoCardUser.ad.url" class="btn btn-primary">Visitar la Web</a>
        </div>
      </div>
    </div>
    <div class="spinner-border" role="status" v-else>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    infoCardUser(){
      return this.$store.getters.mostrarDataUser;
    }
  },
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