import axios from 'axios'

const API_URL = 'https://api.musixmatch.com/ws/1.1'
const API_KEY = 'f07b9ee93030804ac7daa32f787789e7'

const state = {
  tracks: [],
  track: [],
  searchedTrack: []
}

const actions = {
  getChartTracks({ commit }) {
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
        commit('SET_TRACK', res.data.message.body.track)
        console.log('track', res.data.message.body.track)
      })
      .catch(err => console.log(err))
  },
  SearchTrack({ commit }, LyricsTitle) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${API_URL}/track.search?q_track=${LyricsTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${API_KEY}`
      )
      .then(res => {
        commit('SEARCH_TRACK', res.data.message.body.track_list)
        console.log('track', res.data.message.body.track_list)
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
  },
  SEARCH_TRACK(sate, searchedTrack) {
    state.searchedTrack = searchedTrack
  }
}

const getters = {
  tracks: (state) => state.tracks,
  track: (state) => state.track,
  searchedTrack: (state) => state.searchedTrack
}

export default {
  state,
  actions,
  mutations,
  getters
}