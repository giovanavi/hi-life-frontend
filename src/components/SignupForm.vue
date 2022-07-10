<script>
import axio from 'axios';

export default {
    name: 'Register',
    data() {
        return {
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
        async Register(e) {
            e.preventDefault();

            if (this.VerifyInput()) {
                try {
                    this.form.address = `${this.form.address.city} ${this.form.address.road} ${this.form.address.state} ${this.form.address.district}`;
                    console.log(this.form);
                    const {data} = await axio.post('http://hilifeapi4-env.eba-9z5dxudh.us-east-1.elasticbeanstalk.com/api/v1/Auth/Patient/register', this.form);
                    alert('Usuário cadastrado com sucesso!');
                    this.$router.push('/Patient');
                } catch (error) {
                    alert('Erro ao cadastrar');
                }
            } else {
                alert('Preencha todos os campos');
            }
            
        }, VerifyInput() {
            if(this.form.name == '' || this.form.email == '' || this.form.password == '' || this.form.password_confirmation == '' || this.form.cep == '' || this.form.address.city == '' || this.form.address.road == '' || this.form.address.state == '' || this.form.address.district == ''){
                return false;
            }
            return true;
        }
    }
}
</script>

<template>
<form class="row g-3 p-3">
        <!-- First Name -->
    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <input type="text" class="form-control" v-model="form.name" :id="name" placeholder="Nome">
    </div>
        <!-- Email -->
    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <input type="email" class="form-control" v-model="form.email" :id="email" placeholder="E-mail">
    </div>
    
    <!--Senha-->
    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <input type="password" class="form-control" v-model="form.password" :id="password" placeholder="Senha">
            <div class="invalid-feedback">
                Informe um e-mail válido!
            </div>
    </div>
    <!--Confirmação de senha-->
    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <input type="password" class="form-control" v-model="form.password_confirmation" :id="password_confirmation" placeholder="Confirmação de senha">
            <div class="invalid-feedback">
                Informe um e-mail válido!
            </div>
    </div>
    
    <!--Endereço-->
    <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <input type="text" class="form-control" v-model="form.cep" :id="cep" placeholder="CEP">
            <div class="invalid-feedback">
                Informe um cep válido!
            </div>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <input type="text" class="form-control " v-model="form.address.city" :id="city" placeholder="Cidade">
            <div class="invalid-feedback">
                Informe um cidade válido!
            </div>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <input type="text" class="form-control" v-model="form.address.state" :id="state" placeholder="Estado">
            <div class="invalid-feedback">
                Informe um estado válido!
            </div>
    </div>

    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <input type="text" class="form-control " v-model="form.address.road" :id="road" placeholder="Rua">
            <div class="invalid-feedback">
                Informe um e-mail válido!
            </div>
    </div>
    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <input type="text" class="form-control " v-model="form.address.district" :id="district" placeholder="Bairro">
            <div class="invalid-feedback">
                Informe um e-mail válido!
            </div>
    </div>
    
    <div class="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <button class="col-12 btn btn-primary btn-lg " type="submit" @click="Register($event)">Cadastrar</button>
    </div>
        
</form>

</template>