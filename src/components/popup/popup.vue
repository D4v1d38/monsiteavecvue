<template>

    <div v-if="showModal">
        <div class="layout"></div>
        <div class="modal">
        <div  class="modal-box">
            <div @click='toggleModal' class="close-modale">X</div>
            <div class="content-modal">
                <h2>{{modalTitre}}</h2>
                <p>{{modalText}}</p>
                <button @click="toggleModal">Fermer</button>
            </div>
        </div>
        </div>
    </div>

</template>

<script>
    export default{
        name: "popup",
        props:['showModal','toggleModal',"modalTitre","modalText"]
    }
</script>

<style scoped src='./popup.css'>
</style>