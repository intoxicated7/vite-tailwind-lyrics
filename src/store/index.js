import { createStore } from 'vuex'
import lyrics from './modules/lyrics'
import tracks from './modules/tracks'
import artist from './modules/artist'

const store = createStore({ 
  state: {},
  actions: {},
  mutations: {},
  modules: {
    lyrics,
    tracks,
    artist
  }
}) 

export default store