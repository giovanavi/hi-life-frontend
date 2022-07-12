<script>
import axios from 'axios';

export default {
    
    data(){
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },

    methods:{
        async Login(e){
            e.preventDefault();
            console.log(this.form);
            try{
                
                const {data} = await axios.post('http://hilifeapi4-env.eba-9z5dxudh.us-east-1.elasticbeanstalk.com/api/v1/Auth/Patient/signin', this.form);
                console.log(data.acessToken);
                
                localStorage.setItem('token', data.acessToken);
                localStorage.setItem('id', JSON.stringify(data.idUser));
                this.$router.push('/patient');
            } catch(error){
                if (error.response.status === 401){
                    alert('Usuário ou senha incorretos');
                }
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
<form class="row needs-validation" id="formLogin" novalidate>
    <div class="mb-3 offset-sm-1 col-sm-10 col-md-10 col-lg-11 col-xl-10">
        <input type="email" class="form-control form-control-lg" v-model= "form.email" :id="email" placeholder="E-mail">
        <div class="invalid-feedback">
            Informe um e-mail válido!
        </div>
    </div>
    <div class="mb-3 offset-sm-1 col-sm-10 col-md-10 col-lg-11 col-xl-10">
        <input type="password" class="form-control form-control-lg" :id="password" v-model= "form.password" placeholder="Senha">
            <div class="invalid-feedback">
                Informe sua senha
            </div>
    </div>
    <div class="mb-3 offset-sm-1 col-sm-10 col-md-10 col-lg-11 col-xl-10">
        <p> <a href="#" >Esqueceu a senha?</a> </p>
        <button class="col-12 btn btn-primary btn-lg " type="submit" @click="Login($event)" :disabled="VerifyInput()">Entrar</button>
        <p class="mb-3 pt-2 card-text">Não tem uma conta?
            <router-link to="/signup">
                <a href="#" class="card-link">Inscreva-se</a>
            </router-link>
        </p>
    </div>
</form>

</template>

<style scoped>
a{
    text-decoration:none;
    font-size:100%;
}
</style>