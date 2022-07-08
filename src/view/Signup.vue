<script>
import SignupForm from '../components/SignupForm.vue'
import NavBar from '../components/NavBar.vue'

export default {
    name: "Signup",
    components: { SignupForm, NavBar }
}
</script>

<template>
<NavBar></NavBar>
    <div class="row">
        <div class="col-sm-5 col-md-6 bg-light d-md-block d-none">
            IMAGEM
        </div>
        <div class="col-sm-5 col-md-6 col-xs-12">
            <div class="bg-secondary g-5 px-4 py-5 rounded">
                <div class="bg-secondary g-5 px-4 py-5 rounded">
                    <h2 class="text-center g-5 mb-5">Cadastre-se</h2> 
                    <SignupForm/>
                </div>
            </div>
        </div>
    </div> 
</template>