<script>
export default{
  name: "Navbar",
  data(){
    return{
        patient : false
    }
  },
  methods:{
    //SE O PACIENTE ESTIVER LOGADO MUDA patient PARA TRUE 
  }
}

</script>


<template>
<nav class="navbar navbar-expand-sm ">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="" alt="" width="30" height="24" class="d-inline-block align-text-top">
        </a>
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/">
                        <a href="#" class="nav-link" aria-current="page">Home</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/doctor">
                        <a href="#" class="nav-link" >Médicos</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/patient">
                        <a href="#" class="nav-link">Pacientes</a>
                    </router-link>
                        
                </li>
                <li class="nav-item" v-show="!patient">
                    <router-link to="/login">
                        <a href="#" class="nav-link">Login</a>
                    </router-link>
                </li>
                <li class="nav-item" v-show="patient">
                    <router-link to="/">
                        <a href="#" class="nav-link">Logout</a>
                    </router-link>
                </li>
                <li class="nav-item" v-show="patient">
                    <router-link to="/">
                        <a href="#" class="nav-link">Editar Perfil</a>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<style scoped>


.navbar{
    height: 80px;
    background-color: #87CEFA;
}
.nav-item{
    font-size:larger; 
    font-weight: bold;
}   

a {
    color: white;
    text-decoration: none;
}
a:hover{
    color: #4C88AD;
}
</style>