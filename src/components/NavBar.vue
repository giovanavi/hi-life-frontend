<script>
export default{
  name: "Navbar",
  props: {
    isLoggedIn: {
      type: Boolean
    }
  },
  data(){
    return{
        isLogged: null
    }
  }, mounted() {
    this.isLogged = this.isLoggedIn;
  },
    methods: {
        logout() {
            localStorage.removeItem('id');
            localStorage.removeItem('token');
            this.$router.push('/');
        }
    }
}

</script>


<template>
<nav class="navbar navbar-expand-sm ">
    <div class="container-fluid">
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item" v-if="!isLogged">
                    <router-link to="/">
                        <a href="#" class="nav-link" aria-current="page">
                            Home
                            <img src="../assets/home.svg" title="Home" width="30" height="30">
                        </a>
                    </router-link>
                </li>
                <li class="nav-item" v-if="!isLogged">
                    <router-link to="/doctor">
                        <a href="#" class="nav-link" >
                            Médicos
                            <img src="../assets/icon.svg" title="Médico" width="30" height="30">
                        </a>
                    </router-link>
                </li>
                <li class="nav-item" v-if="!isLogged">
                    <router-link to="/login">
                        <a href="#" class="nav-link">
                            Login
                            <img src="../assets/login.svg" title="Entrar" width="30" height="30">   
                        </a>
                    </router-link>
                </li>
                <li class="nav-item" v-if="isLogged">
                    <router-link to="/profile">
                        <a href="#" class="nav-link">
                            Perfil
                            <img src="../assets/profile.svg" title="Perfil" width="30" height="30">
                        </a>
                    </router-link>
                </li>
                <li class="nav-item" v-if="isLogged">
                    <router-link to="/patient">
                        <a href="#" class="nav-link">
                            Paciente
                            <img src="../assets/icon.svg" title="Paciente" width="30" height="30">
                        </a>
                    </router-link>
                        
                </li>
                <li class="nav-item" v-if="isLogged">
                    <a href="#" class="nav-link" @click="logout">
                        Logout
                        <img src="../assets/logout.svg" title="Sair" width="30" height="30">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<style scoped>


.navbar{
    height: 80px;
    background-color: #4C88AD;
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
    color: #87CEFA;
}
</style>