<template>
    <header class="top-header">
        <h1 class="h1">David Rotolo</h1>
        <p>Intégrateur/développeur web junior</p>
        <p>{{introduction}}</p>
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