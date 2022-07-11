<script>
import ChangePassword from '../components/ChangePassword.vue'
import SearchBar from '../components/SearchBar.vue'
import DoctorCard from '../components/DoctorCard.vue'
import NavBar from '../components/NavBar.vue'
import axios from 'axios';

export default {

    name:"Patient",
    data(){
        return{
            patient: null,
            doctors: [],
            isLoggedIn: true
        }
    },
    mounted() {
        this.getPatient();
        this.GetAllDoctors();
    },
    methods: {
        async getPatient() {
            try {
                const {data} = await axios.get('http://hilifeapi4-env.eba-9z5dxudh.us-east-1.elasticbeanstalk.com/api/v1/Patient/' + localStorage.getItem('id'));
                this.patient = data;
            } catch (error) {
                console.log(error);
            }
        },
        async GetAllDoctors() {
            try {
                const {data} = await axios.get('http://hilifeapi4-env.eba-9z5dxudh.us-east-1.elasticbeanstalk.com/api/Doctor');
                this.doctors = data;
            } catch (error) {
                console.log(error);
            }
        },
    },
    components:{
    ChangePassword,
    SearchBar,
    DoctorCard,
    NavBar
    }
}

</script>
<template>
<NavBar :isLoggedIn="isLoggedIn"></NavBar>
    <body>
        <div class="container">
        <SearchBar class="p-5"></SearchBar>
            <div class="row row-cols-2">
                <div v-for="doctor in doctors" v-bind:key="doctor.id">
                    <DoctorCard class="col mb-3" :doctor="doctor"></DoctorCard>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </body>  

</template>

<style scoped>
</style>