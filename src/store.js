import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    massageType: 'Lõõgastavad massaažid',
    massageName: 'Klassikaline üldmassaaž',
    massageDate: new Date(Date.now()),
    clientName: null,
    clientPhone: null,
    clientEmail: null,
    clientNotes: null
  },
  mutations: {

  },
  actions: {

  }
})
