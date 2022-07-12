<script>
import SignupForm from '../components/SignupForm.vue'
import NavBar from '../components/NavBar.vue'

export default {
    name: "Signup",
    components: { SignupForm, NavBar },
    data() {
        return {
            isLoggedIn: false,
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                cep: '',
                address: {
                    city: '',
                    road: '',
                    state: '',
                    district: ''
                }
            }
        }
    },
    methods: {
        
    }

}
</script>

<template>
<NavBar :isLoggedIn="isLoggedIn"></NavBar>

    <div class="container-fluid h-custom">
        <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-5 col-lg-5 col-xl-6 d-md-block d-none">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid" alt="Sample image">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-6">
            <h2 class="p-3 text-center">Cadastre-se</h2> 
            <SignupForm/>
        </div>
        </div>
    </div>

<Footer></Footer>
</template>

<style scoped>
img{
    background-size:cover;
}
</style>