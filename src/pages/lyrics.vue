<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity'

const store = useStore()
const route = useRoute()

const track = computed(() => store.getters.track)
const lyrics = computed(() => store.getters.lyrics)

store.dispatch('getLyrics', ([route.params.trackId]))
store.dispatch('getTrack', ([route.params.trackId]))
</script>

<template>
  <div class="max-w-4xl mx-auto mt-10">
    <div class="flex items-center space-x-8">
      <div class="w-56"><img class="rounded-sm" src="https://m.media-amazon.com/images/I/81KHJhGKBYL._SL1200_.jpg"></div>
      <div>
        <h1 class="text-5xl font-semibold text-zinc-900 mb-3">{{ track.track_name }}</h1>
        <!-- <router-link :to="{ name: 'arist', params: { artistId: track.artist_id}}"> -->
          <span class="text-xl text-orange-500">{{ track.artist_name }}</span>
        <!-- </router-link> -->
      </div>
    </div>
    <!-- lyrics -->
    <div>
      <p class="text-zinc-900 text-lg">{{ lyrics.lyrics_body }}</p>
    </div>
  </div>
</template>