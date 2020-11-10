import Vue from 'vue';
import Vuex from 'vuex';
import Swal from 'sweetalert2';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activado: false,
    activado2: true,
    contador: 0,
    numero: 0,
    dataUser: {}
  },
  getters: {
    mostrandoNumero(state){
      return state.numero;
    },
    mostrarDataUser(state){
      return state.dataUser;
    }
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
    infoApiMutacion(state,dataAPIUser){
      state.dataUser = dataAPIUser;
    }
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
    infoApiLlama(context,parametro){
      console.log(parametro);
      axios.get(`https://reqres.in/api/users/${parametro}`).then(response => {
        console.log(response.data.data);
        let datos = {
          data: response.data.data,
          ad: response.data.ad
        };
        context.commit('infoApiMutacion',datos);
      }).catch(error => console.error(error));
    }
  }
})
