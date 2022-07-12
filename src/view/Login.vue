<script>
import LoginForm from '../components/LoginForm.vue'
import NavBar from '../components/NavBar.vue'

export default {
    name: "Login",
    data(){
        return{
            isLoggedIn: false
        }
    },
    components: {LoginForm, NavBar } 
}
</script>

<template>
<NavBar :isLoggedIn="false"></NavBar>

    <div class="container-fluid h-custom">
        <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-6 col-lg-5 col-xl-6 d-none d-md-block ">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid" alt="Sample image">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-xl-6" id="formLogin">
            <h2 class="p-3 text-center">Login</h2>
                <LoginForm></LoginForm>
        </div>
        </div>
    </div>
</template>

<style scoped>
#formLogin{
    background-color: #f5f5f5;
}

</style>