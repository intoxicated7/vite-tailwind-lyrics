import axios from 'axios'

const API_URL = 'https://api.musixmatch.com/ws/1.1'
const API_KEY = 'f07b9ee93030804ac7daa32f787789e7'

const state = {
  lyrics: []
}


const actions = {
  getLyrics({ commit }, trackId) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${API_URL}/track.lyrics.get?track_id=${trackId}&apikey=${API_KEY}`
      )
      .then(res => {
        commit('SET_LYRICS', res.data.message.body.lyrics)
        console.log(res.data.message.body.lyrics)
      })
      .catch(err => console.log(err))
  }
}

const mutations = {
  SET_LYRICS(state, lyrics) {
    state.lyrics = lyrics
  }
}

const getters = {
  lyrics: (state) => state.lyrics
}

export default {
  state,
  actions,
  mutations,
  getters
}