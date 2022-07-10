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
  }
}

</script>


<template>
<nav class="navbar navbar-expand-sm bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="" alt="" width="30" height="24" class="d-inline-block align-text-top">
        </a>
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item" v-if="!isLogged">
                    <router-link to="/">
                        <a href="#" class="nav-link" aria-current="page">Home</a>
                    </router-link>
                </li>
                <li class="nav-item" v-if="!isLogged">
                    <router-link to="/doctor">
                        <a href="#" class="nav-link" >Médicos</a>
                    </router-link>
                </li>
                <li class="nav-item" v-if="!isLogged">
                    <router-link to="/login">
                        <a href="#" class="nav-link">Login</a>
                    </router-link>
                </li>
                <li class="nav-item" v-if="isLogged">
                    <router-link to="/profile">
                        <a href="#" class="nav-link">Profile</a>
                    </router-link>
                </li>
                <li class="nav-item" v-if="isLogged">
                    <router-link to="/patient">
                        <a href="#" class="nav-link">Paciente</a>
                    </router-link>
                        
                </li>
                <li class="nav-item" v-if="isLogged">
                    <router-link to="/">
                        <a href="#" class="nav-link">Logout</a>
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
}
.nav-item{
    font-size: large;
}
a {
    color: aliceblue;
    text-decoration: none;
}
</style>