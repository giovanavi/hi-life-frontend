<script>
export default {
    name: "DatePicker",
    data(){
        return{
            myTime: null,
            myDate: null,
        }
    }
}
</script>

<template>

<div>
    <div class="overlay">
        <div class="modal">
            <div class="flex items-center justify-bettween p-3">
                <span> Modal Title </span>
                
                <button>X</button>
            </div>
        </div>
        <div class="p-3 bg-dark">
            <div class="mb-4"> 
                <p>Marcar a Consulta</p> 
            </div>
                <form class="">
                    <div id="date-picker" inline="true">
                        <label for="example">Escolha a data para a consulta</label>
                        <input v-model="myDate" placeholder="Select date" type="date" id="example" class="form-control">
                    </div>
                    <div class="row">
                        <div id="time-picker" class="col-mb-2" inline="true">
                            <label for="example">Escolha o horário consulta</label>
                            <input v-model="myDate" placeholder="Select date" type="time" id="example" class="form-control">
                        </div>
                    </div>
                </form>
            <button class="p-2 text-sm rounded">
                Confirm
            </button>
            <button class="p-2 text-sm rounded">
                Exit
            </button>
        </div>
    </div>

</div>

</template>

<style scoped>
label{
    color: white;
}
p{
    color: white;
}
.overlay{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal{
    width: 500px;
    box-shadow: 1px 2px 4px rgba(153, 155, 168, .12);
    border-radius: 4px;
}

</style>

    <!--
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
                        <label for="example">Escolha o horário consulta</label>
                        <input v-model="myDate" placeholder="Select date" type="time" id="example" class="form-control">
                        <h1>{{myTime}}</h1>
                    </div>
                </div>
            </form>
        </div>  
    </div>
    -->

