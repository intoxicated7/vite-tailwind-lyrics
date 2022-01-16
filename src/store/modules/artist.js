import axios from 'axios'

const API_URL = 'https://api.musixmatch.com/ws/1.1'
const API_KEY = 'f07b9ee93030804ac7daa32f787789e7'

const state = { 
  artist: [],
  artists: [],
  searchedArtist: []
}

const actions = {
  getChartArtists({ commit }) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${API_URL}/chart.artists.get?chart_name=top&page=1&page_size=10&country=it&f_has_lyrics=1&apikey=${API_KEY}`
      )
      .then(res => {
        commit('SET_ARTISTS', res.data.message.body.artist_list)
        console.log(res.data.message.body.artist_list)
      })
      .catch(err => console.log(err))
  },
  SearchArtist({ commit }, artist) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${API_URL}/track.search?q_artist=${artist}&page_size=10&page=1&s_track_rating=desc&apikey=${API_KEY}`
      )
      .then(res => {
        commit('SEARCH_ARTIST', res.data.message.body.track_list)
        console.log('artist', res.data.message.body.track_list)
      })    
      .catch(err => console.log(err))
  }
}

const mutations = {
  SEARCH_ARTIST(state, searchedArtist) {
    state.searchedArtist = searchedArtist
  },
  SET_ARTISTS(state, artists) {
    state.artists = artists
  }
}

const getters = {
  searchedArtist: (state) => state.searchedArtist,
  artists: (state) => state.artists
}

export default {
  state,
  actions,
  mutations,
  getters
}