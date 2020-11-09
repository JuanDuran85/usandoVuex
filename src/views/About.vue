<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button type="button" class="btn btn-danger" @click="decreCon">Decrementar</button>
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
  name: 'About',
  methods: {
    decreCon(){
      this.$store.dispatch('decrementarConta');
    }
  },
}
</script>