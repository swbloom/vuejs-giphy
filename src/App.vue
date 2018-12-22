<template>
  <div id="app">
    <h1>Giphy App</h1>
    <input
      v-model="keyword"
      @input="search"
    />
    <div>
      <img
        v-for="gif in gifs"
        :src="gif.images.fixed_height.url"
        :key="gif.slug"
      />
    </div>
  </div>
</template>

<script>
import client from './client'

export default {
  name: 'app',
  components: {},
  data () {
    return {
      gifs: [],
      keyword: ''
    }
  },
  methods: {
    async search () {
      console.log('search')
      try {
        const res = await client.search(this.keyword)
        this.gifs = res.data
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
