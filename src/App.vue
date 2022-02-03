<template>
  <div id="app">
    <header-top></header-top>
    <presentation></presentation>
    <projets></projets>
    <popup :showModal="showModal" :toggleModal='toggleModal' :modalTitre="modalTitre" :modalText="modalText"></popup> 
    
  </div>
</template>

<script>
import headerTop from './components/headerTop/headerTop.vue'
import projets from './components/mesProjets/mesProjets.vue'
import popup from './components/popup/popup.vue'
import presentation from './components/presentation/presentation.vue'

export default {
  name: 'App',
  components: {
    "headerTop": headerTop,
    "projets": projets,
    "presentation": presentation,
    "popup": popup,
  },
  data(){
    return{
      showModal:false,
      modalTitre:"",
      modalText:""
    }
  },
  methods:{
    toggleModal: function(){
      this.showModal = !this.showModal
      this.modalTitre ="Bienvenue !"
      this.modalText = "Ce site est en cours de développement avec Vue/cli que j'apprends en autodidacte depuis le 26 Janvier 2022 "
    }
  },
  mounted(){
    this.toggleModal()
  }
}
</script>




<style>

</style>
