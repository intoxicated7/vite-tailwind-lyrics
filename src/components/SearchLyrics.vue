<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

const store = useStore()

const searchQuery = ref('')
const searched = ref('')

const tracks = computed(() => store.getters.searchedTrack)
const artists = computed(() => store.getters.searchedArtist)
const lyrics = computed(() => store.getters.searchedLyrics)

const searchFunction = () => {
  store.dispatch('SearchTrack', searchQuery.value)
  store.dispatch('SearchArtist', searchQuery.value)
  store.dispatch('SearchLyrics', searchQuery.value)
  searched.value = searchQuery.value
  searchQuery.value = ''
}
</script>

<template>
  <div class="mt-10">
    <div class="text-center">
      <h2 class="text-4xl font-semibold text-zinc-900">Search for a song</h2>
      <span class="text-zinc-800">Get the lyrics for any song</span>
    </div>
    <div class="mt-3">
      <input 
        class="bg-slate-100 rounded-md px-1 w-full py-1"
        v-model="searchQuery"
        @keydown.enter="searchFunction"
        placeholder="Type song title, artist or lyrics"
        type="text"
      />
    </div>
    <!-- searched -->
    <div v-if="searched" class="text-center mt-8">
      <h3 class="text-3xl font-semibold">“{{ searched }}”</h3>
      <span class="">all results</span>
    </div>
    <!-- tracks -->
    <ul class="mt-8 space-y-4">
      <li v-for="track in tracks" :key="track"   class="bg-zinc-100 rounded-md p-2">
        <router-link class="flex items-center space-x-3" :to="{ name: 'lyrics', params: { trackId: track.track.track_id } }">
          <div class="w-16">
            <img
              class="rounded-sm"
              src="https://m.media-amazon.com/images/I/81KHJhGKBYL._SL1200_.jpg"
            />
          </div>
          <div>
            <h4 class="text-zinc-700 hover:text-orange-600 hover:underline decoration-1 font-semibold">{{ track.track.track_name }} 
            </h4>
            <span class="text-zinc-600 hover:underline decoration-1 text-sm">{{ track.track.artist_name }}</span>
          </div>
        </router-link>
      </li>
    </ul>
    <!-- artists -->
    <ul class="mt-8 space-y-4">
      <li v-for="artist in artists" :key="artist"   class="bg-zinc-100 rounded-md p-2">
        <router-link class="flex items-center space-x-3" :to="{ name: 'lyrics', params: { trackId: artist.track.track_id } }">
          <div class="w-16">
            <img
              class="rounded-sm"
              src="https://m.media-amazon.com/images/I/81KHJhGKBYL._SL1200_.jpg"
            />
          </div>
          <div>
            <h4 class="text-zinc-700 hover:text-orange-600 hover:underline decoration-1 font-semibold">{{ artist.track.track_name }} 
            </h4>
            <span class="text-zinc-600 hover:underline decoration-1 text-sm">{{ artist.track.artist_name }}</span>
          </div>
        </router-link>
      </li>
    </ul>
    <!-- lyrics -->
    <ul class="mt-8 space-y-4">
      <li v-for="lyric in lyrics" :key="lyric"   class="bg-zinc-100 rounded-md p-2">
        <router-link class="flex items-center space-x-3" :to="{ name: 'lyrics', params: { trackId: lyric.track.track_id } }">
          <div class="w-16">
            <img
              class="rounded-sm"
              src="https://m.media-amazon.com/images/I/81KHJhGKBYL._SL1200_.jpg"
            />
          </div>
          <div>
            <h4 class="text-zinc-700 hover:text-orange-600 hover:underline decoration-1 font-semibold">{{ lyric.track.track_name }} 
            </h4>
            <span class="text-zinc-600 hover:underline decoration-1 text-sm">{{ lyric.track.artist_name }}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
