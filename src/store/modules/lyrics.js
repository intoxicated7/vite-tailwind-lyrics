import axios from 'axios'

const API_URL = 'https://api.musixmatch.com/ws/1.1'
const API_KEY = 'f07b9ee93030804ac7daa32f787789e7'

const state = {
  lyrics: [],
  searchedLyrics: [],
  // chartLyrics: []
}


const actions = {
  getLyrics({ commit }, trackId) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${API_URL}/track.lyrics.get?track_id=${trackId}&apikey=${API_KEY}`
      )
      .then(res => {
        commit('SET_LYRICS', res.data.message.body.lyrics)
        console.log('lyrics', res.data.message.body.lyrics)
      })
      .catch(err => console.log(err))
  },
  // getChartLyrics({ commit }) {
  //   axios
  //     .get(
  //       `https://cors-anywhere.herokuapp.com/${API_URL}/chart.lyrics.get?chart_name=top&page=1&page_size=10&country=it&f_has_lyrics=1&apikey=${API_KEY}`
  //     )
  //     .then(res => {
  //       commit('SET_CHART_LYRICS', res.data.message.body)
  //       console.log(res.data.message.body)
  //     })
  //     .catch(err => console.log(err))
  // },
  SearchLyrics({ commit }, lyrics) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${API_URL}/track.search?q_lyrics=${lyrics}&page_size=10&page=1&s_track_rating=desc&apikey=${API_KEY}`
      )
      .then(res => {
        commit('SEARCH_LYRICS', res.data.message.body.track_list)
        console.log('lyrics', res.data.message.body.track_list)
      })    
      .catch(err => console.log(err))
  }
}

const mutations = {
  SET_LYRICS(state, lyrics) {
    state.lyrics = lyrics
  },
  // SET_CHART_LYRICS(state, chartLyrics) {
  //   state.chartLyrics = chartLyrics
  // },
  SEARCH_LYRICS(state, searchedLyrics) {
    state.searchedLyrics = searchedLyrics
  }
}

const getters = {
  lyrics: (state) => state.lyrics,
  searchedLyrics: (state) => state.searchedLyrics,
  // chartLyrics: (state) => state.chartLyrics
}

export default {
  state,
  actions,
  mutations,
  getters
}