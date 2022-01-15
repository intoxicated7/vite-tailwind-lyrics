<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity'

const store = useStore()
const route = useRoute()

const track = computed(() => store.getters.track)
const lyrics = computed(() => store.getters.lyrics)

store.dispatch('getLyrics', ([route.params.itemId]))
store.dispatch('getTrack', ([route.params.itemId]))
</script>

<template>
  <div class="max-w-4xl mx-auto mt-10">
    <div class="flex items-center">
      <div class="w-56"><img class="rounded-sm" src="https://m.media-amazon.com/images/I/81KHJhGKBYL._SL1200_.jpg"></div>
      <div>
        <h1 class=""></h1>
      </div>
    </div>
  </div>
</template>