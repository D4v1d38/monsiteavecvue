<template>
    <header class="top-header">
        <div class="my-photo">
            <img src="../../assets/photos/photo.jpg" alt="Ma photo de profil">
        </div>
        <div class="header-intro">
            <h1 >David Rotolo</h1>
            <p>Intégrateur/développeur web junior</p>
            <p>{{introduction}}</p>
            <em>Ce site est en cours de développement autodidacte avec Vue.js/cli</em>
        </div>
    </header>
    
</template>

<script>
    export default{
        name:"top-header",
        data(){
            return{
                introduction : "Bienvenue sur mon premier site autodidacte en Vuejs :)"
            }
        }
    }

</script>


<style scoped src="./headerTop.css">

</style>