<script>
import DatePicker from './DatePicker.vue'

export default {
    name:"DoctorCard",
    props: {
        doctor: null,
        isLoggedIn: null
    },
    data(){
      return{
        isLogged: null, 
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
      this.isLogged = this.isLoggedIn;
      console.log(this.isLogged);
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
      splitDate(){
        
      }
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
      <div class="d-flex justify-content-between">
        <form class="row flex-fill">
            <div class="col-auto flex-fill">
              <select class="form-select" >
                <option selected>Selecione o horário da consulta</option>
                <option v-for="time in availableTimes" v-bind:key="time.id">
                  {{time.time}}
                </option>
              </select>
            </div>
            <div class="col">
              <button class="btn btn-primary" type="submit" :disabled="!isLogged">Agendar</button>
            </div>
        </form>
      </div>
  </div>
</div>


</template>