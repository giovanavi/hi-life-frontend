<script>
import NavBar from '../components/NavBar.vue'
import SearchBar from '../components/SearchBar.vue'
import DoctorCard from '../components/DoctorCard.vue'

export default {
    name:"Doctor",
    data(){
        return{

        }
    },
    components:{
        NavBar,
        SearchBar,
        DoctorCard
    }
}

</script>
<template>
<NavBar></NavBar>
    <body>
        <div class="container">
            <div class="row ">
                <div class="col mb-4">
                    <SearchBar></SearchBar>
                    <DoctorCard></DoctorCard>
                </div>
            </div>
        </div>
    </body>   
</template>

<style scoped>
.row{
    padding-top: 40px;

}
</style>