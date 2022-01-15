<script setup>
const searchLyrics = ''

const searchQuery = () => {

}
</script>

<template>
  <div>
    <input 
      class="bg-slate-600 rounded-md px-1 outline-none"
      v-model="searchLyrics"
      @keydown.enter="searchQuery"
      type="text" />
  </div>
</template>