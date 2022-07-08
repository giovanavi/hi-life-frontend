<script>
import axios from 'axios';

export default {
    data(){
        return {
            form: {
                email: 'vitor@gmail',
                password: '123'
            }
        }
    },

    methods:{
        async Login(e){
            e.preventDefault();
            try{
                const {data} = await axios.post('http://hilifeapi4-env.eba-9z5dxudh.us-east-1.elasticbeanstalk.com/api/v1/Auth/Patient/signin', this.form);
                console.log(data.acessToken);
                
                localStorage.setItem('token', data.acessToken);
                localStorage.setItem('id', JSON.stringify(data.idUser));
                this.$router.push('/');
            } catch(error){
                console.log(error);
            }
        },
        VerifyInput() {
            if(this.form.email == '' || this.form.password == ''){
                return true;
            }
            return false;
        }
    }
}
</script>

<template>
<form class="row g-3 needs-validation" novalidate>
    <div class="bg-secondary g-5 px-4 py-5 rounded">
       <h2 class="text-center g-5 mb-5">Login</h2>
        <div class="mb-3 col-md-11">
            <label for="" class="form-label">Enter email or username*</label>
            <input type="email" class="form-control" v-model= "form.email" :id="email" placeholder="jonedoe001@email.com">
            <div class="invalid-feedback">
                Informe um e-mail válido!
            </div>
        </div>
        <div class="mb-3 col-md-11">
            <label for="" class="form-label">Enter password*</label>
            <input type="password" class="form-control" :id="password" v-model= "form.password" placeholder="Enter your number">
                <div class="invalid-feedback">
                    Informe sua senha
                </div>
        </div>
        <div class="mb-3 col-md-11">
            <p> <a href="#" style="margin-left: 5px;">Esqueceu a senha?</a> </p>
            <button id="btn-signup" class="btn btn-primary col-md-12" type="submit" @click="Login($event)" :disabled="VerifyInput()" >Se inscrever</button>
            <p class="card-text">Não tem uma conta?
                <router-link to="/signup">
                    <a href="#" class="card-link">Inscreva-se</a>
                </router-link>
            </p>
        </div>
    </div>
</form>

</template>

<style scoped>

</style>