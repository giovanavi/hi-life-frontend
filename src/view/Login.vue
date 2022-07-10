<script>
import LoginForm from '../components/LoginForm.vue'
import NavBar from '../components/NavBar.vue'

export default {
    name: "Login",
    data(){
        return{
            
        }
    },
    components: {LoginForm, NavBar } 
}
</script>

<template>
<NavBar></NavBar>
    <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-6 col-lg-5 col-xl-6 bg-light d-md-block d-none">
            IMAGEM
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-xl-6">
            <h2 class="p-3 text-center">Login</h2>
            <LoginForm></LoginForm>
        </div>
    </div>
</template>

<style scoped>


</style>

<!--<div class="card" style="width: 18rem;">
    <div class="card-body">
        <form class="row g-3 needs-validation" novalidate>
                        
            <div class="form-floating mb-3" >
                <input type="email" class="form-control" id="email" placeholder="email@email.com" required>
                    <label for="email">Email</label>
                    <div class="invalid-feedback">
                        Informe um e-mail válido!
                    </div>
            </div>

            <div class="form-floating">
                <input type="password" class="form-control" id="password" placeholder="Senha" required>
                    <label for="password">Senha</label>
                    <div class="invalid-feedback">
                        Informe sua senha
                    </div>
            </div>

            <p> <a href="#" style="margin-left: 5px;">Esqueceu a senha?</a> </p>
            <button id="btn-login" type="submit" class="btn btn-primary col-md-12" disabled> Entrar </button>
                        
            <p class="card-text">Não tem uma conta? <a href="signup.html" class="card-link">Inscreva-se</a></p>
                            
        </form>
    </div>
</div>
-->