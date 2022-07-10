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
            <SearchBar class="p-5"></SearchBar>
                <div class="row row-cols-2">
                    <div v-for="doctor in doctors" v-bind:key="doctor.id">
                        <DoctorCard class="col mb-3" :doctor="doctor"></DoctorCard>
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