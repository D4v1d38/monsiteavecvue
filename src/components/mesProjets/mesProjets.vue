<template>
    <section class="section-projet"> 
        <h2>Mes projets</h2>
        <div class="project-card" v-for="(projectItem, index) in myProjects" v-bind:key="index">
            <h3>{{myProjects[index].title}}</h3>
            <p>{{myProjects[index].introduction}}</p>
            <a class="link" v-bind:href="myProjects[index].lien" target="_blank"> voir le lien </a>
        </div>
    </section>
    
</template>

<script>


export default{

    name:"projets",
    data(){
        return{
            myProjects:[
                {title:"Blog", introduction:"Tp réalisé en formation avec système de layout php", lien:"https://davidrotolo.sites.3wa.io/recruteurs/TP-Blog/index.php"},
                {title:"Restaurant", introduction:"Tp réalisé en formation avec framework maison basé sur architecture MVC php", lien:"https://davidrotolo.sites.3wa.io/recruteurs/tp_restaurant/index.php"},
                {title:"Les irréductibles", introduction:"Projet de fin de formation basé sur framework maison, rersponsive mobile-first",lien:"https://davidrotolo.sites.3wa.io/recruteurs/projet_irreductibles/index.php"}
                ]
        }
    }

}
</script>

<style scoped src="./mesProjets.css">
</style>
