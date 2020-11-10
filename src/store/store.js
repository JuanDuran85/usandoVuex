import Vue from 'vue';
import Vuex from 'vuex';
import Swal from 'sweetalert2';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activado: false,
    activado2: true,
    contador: 0,
    numero: 0
  },
  getters: {

  },
  mutations: {
    cambiandoActivado(state){
      console.log("entramos en la mutations de vuex");
      state.activado = !state.activado;
      state.contador++;
    },
    decreContador(state){
      state.contador--;
    },
    increNum(state){
      state.numero += 2;
    },
    decreNum(state){
      if (!state.numero <= 0) {
        state.numero -= 2;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se puede decrementar',
          footer: 'Intenta con incrementar'
        });
      }
    },
    resetNum(state){
      state.numero = 0;
    },
  },
  actions: {
    activandoEstadoAccion(context){
      console.log("entramos en la actions de vuex");
      context.commit('cambiandoActivado');
    },
    decrementarConta(context){
      context.commit('decreContador');
    },
    incrementaNumero(context){
      context.commit("increNum");
    },
    decrementaNumero(context){
      context.commit("decreNum");
    },
    resetNumero(context){
      context.commit("resetNum");
    },
  }
})
