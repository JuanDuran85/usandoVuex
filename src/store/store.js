import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activado: false,
    activado2: true,
    contador: 0
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
    }
  },
  actions: {
    activandoEstadoAccion(context){
      console.log("entramos en la actions de vuex");
      context.commit('cambiandoActivado');
    },
    decrementarConta(context){
      context.commit('decreContador');
    }
  }
})
