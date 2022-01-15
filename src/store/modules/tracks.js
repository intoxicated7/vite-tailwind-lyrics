import axios from 'axios'

const API_URL = 'https://api.musixmatch.com/ws/1.1'
const API_KEY = 'f07b9ee93030804ac7daa32f787789e7'

const state = {
  tracks: [],
  // track: []
}

const actions = {
  getTracks({ commit }) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${API_URL}/chart.tracks.get?chart_name=top&page=1&page_size=10&country=it&f_has_lyrics=1&apikey=${API_KEY}`
      )
      .then(res => {
        commit('SET_TRACKS', res.data.message.body.track_list)
        console.log(res.data.message.body.track_list)
      })
      .catch(err => console.log(err))
  },
  getTrack({ commit }, trackId) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${API_URL}/track.get?track_id=${trackId}&apikey=${API_KEY}`
      )
      .then(res => {
        commit('SET_TRACK', res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }
}

const mutations = {
  SET_TRACKS(state, tracks) {
    state.tracks = tracks
  },
  SET_TRACK(state, track) {
    state.track = track
  }
}

const getters = {
  tracks: (state) => state.tracks,
  track: (state) => state.track
}

export default {
  state,
  actions,
  mutations,
  getters
}