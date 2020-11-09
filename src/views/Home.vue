<template>
  <div>
    <HelloWorld/>
    <div class="my-5">
      <div class="alert alert-success" role="alert" v-if="$store.state.activado2">
        A simple success alert—check it out!
      </div>
      <div class="alert alert-danger" role="alert" v-else>
        A simple danger alert—check it out!
      </div>
      <div class="alert alert-primary" role="alert">
        {{$store.state.contador}}
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
