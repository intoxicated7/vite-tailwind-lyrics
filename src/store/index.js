import { createStore } from 'vuex'
import lyrics from './modules/lyrics'
import tracks from './modules/tracks'

const store = createStore({ 
  state: {},
  actions: {},
  mutations: {},
  modules: {
    lyrics,
    tracks
  }
}) 

export default store