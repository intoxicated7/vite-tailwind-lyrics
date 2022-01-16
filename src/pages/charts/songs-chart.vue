<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

const store = useStore() 

const tracks = computed(() => store.getters.tracks)

store.dispatch('getChartTracks')
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div class="text-center font-semibold mt-16 space-y-2">
      <h2 class="text-4xl text-zinc-800">Charts</h2>
      <div class="space-x-4 text-zinc-700">
        <router-link class="text-orange-600" to="/charts/songs"
          >Songs</router-link
        >
        <router-link class="hover:text-orange-600" to="/charts/artists"
          >Artists</router-link
        >
        <router-link class="hover:text-orange-600" to="/charts/lyrics"
          >Lyrics</router-link
        >
      </div>
    </div>
    <ul class="mt-4 space-y-4">
      <li v-for="(track, index) in tracks" :key="index" class="flex items-center space-x-5 bg-zinc-100 rounded-md p-2 px-3">
        <div class="text-2xl text-zinc-800">{{ index + 1 }}</div>
        <div class="flex items-center space-x-3">
          <div class="w-16">
          <img
            class="rounded-sm"
            src="https://m.media-amazon.com/images/I/81KHJhGKBYL._SL1200_.jpg"
          />
          </div>
          <div>
            <h4
              class="text-zinc-700 hover:text-orange-600 hover:underline decoration-1 font-semibold"
            >
              {{ track.track.track_name }}
            </h4>
            <span class="text-zinc-600 hover:underline decoration-1 text-sm"
              >{{ track.track.artist_name }}</span
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
