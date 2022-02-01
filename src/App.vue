<template>
  <div id="app">
    <header-top></header-top>
    <presentation></presentation>
    <projets></projets>
    
  </div>
</template>

<script>
import headerTop from './components/headerTop/headerTop.vue'
import projets from './components/mesProjets/mesProjets.vue'
import presentation from './components/presentation/presentation.vue'

export default {
  name: 'App',
  components: {
    "headerTop": headerTop,
    "projets": projets,
    "presentation": presentation
    
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
