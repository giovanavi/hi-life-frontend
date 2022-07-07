<script>
import Update from '../components/Update.vue'
import ChangePassword from '../components/ChangePassword.vue'
import SearchBar from '../components/SearchBar.vue'
import DoctorCard from '../components/DoctorCard.vue'

export default {
    name:"Patient",
    data(){
        return{

        }
    },
    mounted() {
        this.getPatient();
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
        }
    }
    components:{
        Update,
        ChangePassword,
        SearchBar,
        DoctorCard
    }
}

</script>
<template>
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