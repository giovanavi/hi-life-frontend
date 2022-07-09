<script>
import DatePicker from './DatePicker.vue'

export default {
    name:"DoctorCard",
    data(){
      return{
        isVisible: false
      }
    },
    methods: {
      toogleModal(){
        this.isVisible = !this.isVisible
      }
    },
    components:{
      DatePicker
    }    
}
</script>

<template>

<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <DatePicker></DatePicker>
            <button @click.prevent="toogleModal" class="bg-blue-500  p-2 text-sm rounded">
              Open Modal
            </button>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <DatePicker></DatePicker>
            <button @click.prevent="toogleModal" class="bg-blue-500  p-2 text-sm rounded">
              Open Modal
            </button>
      </div>
    </div>
  </div>
</div>


</template>