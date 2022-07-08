<script>
export default {
    name: "DatePicker",
    data(){
        return{
            myTime: null,
            myDate: null,
        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="card" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">Marcar Consulta</h5>
            <h6 class="card-subtitle mb-12 text-muted">Card subtitle</h6>
            <form class="">
                <div id="date-picker" inline="true">
                    <label for="example">Escolha a data para a consulta</label>
                    <input v-model="myDate" placeholder="Select date" type="date" id="example" class="form-control">
                    <h1>{{myDate}}</h1>
                </div>
                <div class="row">
                    <div id="time-picker" class="col-mb-2" inline="true">
                        <label for="example">Escolha a data para a consulta</label>
                        <input v-model="myDate" placeholder="Select date" type="time" id="example" class="form-control">
                        <h1>{{myDate}}</h1>
                    </div>
                </div>
            </form>
        </div>  
    </div>
</template>



