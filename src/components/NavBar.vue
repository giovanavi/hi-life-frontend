<script>
export default{
  name: "Navbar",
}

</script>


<template>
<nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="" alt="" width="30" height="24" class="d-inline-block align-text-top">
        </a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
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
                <li class="nav-item">
                    <router-link to="/login">
                        <a href="#" class="nav-link">Login</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/signup">
                        <a href="#" class="nav-link">Cadastre-se</a>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<style scoped>
.nav-bg{
    height: 70px;
}
.nav-item{
    font-size: large;
}
a {
    color: aliceblue;
    text-decoration: none;
}
</style>