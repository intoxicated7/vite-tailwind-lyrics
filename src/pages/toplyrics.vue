<script setup>
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity';

const store = useStore()

const tracks = computed(() => store.getters.tracks)

store.dispatch('getTracks')
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="font-semibold mt-16">
      <h2 class="text-2xl text-zinc-700">Top lyrics</h2>
      <span class="text-zinc-500">Find the lyrics of the most searched songs on Musixmatch</span>
    </div>
    <ul class="mt-4 space-y-4">
      <li v-for="track in tracks" :key="track">
          <router-link class="flex items-center space-x-3" :to="{ name: 'lyrics', params: { trackId: track.track.track_id } }">
            <div class="w-16"><img class="rounded-sm" src="https://m.media-amazon.com/images/I/81KHJhGKBYL._SL1200_.jpg"></div>
            <div>
              <h4 class="text-zinc-700 hover:text-orange-600 hover:underline decoration-1 font-semibold">{{ track.track.track_name }}</h4>
              <span class="text-zinc-600 hover:underline decoration-1 text-sm">{{ track.track.artist_name }}</span>
            </div>
          </router-link>
      </li>
    </ul>
  </div>
</template>