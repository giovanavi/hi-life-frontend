<script>
import DatePicker from './DatePicker.vue'

export default {
    name:"DoctorCard",
    props: {
        doctor: null,
    },
    data(){
      return{
        id: '',
        hospitalName: '',
        name: '',
        specialty: '',
        crm : '',
        availableTimes: [
          {
            id: '',
            day: '',
            time: '',
          }
        ],
        appointments: [
          {
            id: '',
            patient: '',
            doctor: '',
            date: '',
            time: '',
          }
        ],  
      }
    },
    mounted() {
      this.populateDoctor();
    },
    methods: {
      toogleModal(){
        this.isVisible = !this.isVisible
      },
      populateDoctor() {
        this.id = this.doctor.id;
        this.hospitalName = this.doctor.hospitalName;
        this.name = this.doctor.name;
        this.specialty = this.doctor.specialty;
        this.crm = this.doctor.crm;
        let target = JSON.stringify(this.doctor.availableTimes);
        this.availableTimes = JSON.parse(target);
        console.log(this.availableTimes);
        this.appointments = this.doctor.appointments;
      },
    }
  }
</script>

<template>

<div class="card">
  <div class="card-body">
    <h5 class="card-title">{{name}}</h5>
    <p class="card-text"> Hospital de atendimento : {{hospitalName}}</p>
    <p class="card-text">Especialidade : {{specialty}}</p>
    <p class="card-text">CRM : {{crm}}</p>
      <DatePicker></DatePicker>
      <button @click.prevent="toogleModal" class="bg-blue-500  p-2 text-sm rounded">
        Open Modal
      </button>
  </div>
</div>


</template>