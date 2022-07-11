<script>
import NavBar from '../components/NavBar.vue'
import SearchBar from '../components/SearchBar.vue'
import DoctorCard from '../components/DoctorCard.vue'
import axios from 'axios';

export default {
    name:"Doctor",
    data(){
        return{
            isLoggedIn: false,
            doctors: []
        }
    },
    methods: {
        async GetAllDoctors() {
            try {
                const {data} = await axios.get('http://hilifeapi4-env.eba-9z5dxudh.us-east-1.elasticbeanstalk.com/api/Doctor');
                this.doctors = data;
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.GetAllDoctors();
    },
    components:{
        NavBar,
        SearchBar,
        DoctorCard
    }
}

</script>
<template>
<NavBar :isLoggedIn="isLoggedIn"></NavBar>
    <body>
        <div class="container">
            <SearchBar class="p-2"></SearchBar>
            <div class="row row-cols-2">
                <div v-for="doctor in doctors" v-bind:key="doctor.id">
                    <DoctorCard class="col mb-2" :doctor="doctor" :isLoggedIn="isLoggedIn"></DoctorCard>
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