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
    <form class="row g-3 needs-validation" novalidate>
		<div class="row g-3">
			    <!-- First Name -->
			<div class="col-md-6">
				<label class="form-label">Nome completo</label>
				<input type="text" class="form-control" placeholder="" v-model="form.name" :id="name" aria-label="First name" >
			</div>
			    <!-- Email -->
			<div class="col-md-6">
				<label class="form-label">E-mail</label>
				<input type="email" class="form-control" placeholder="" v-model="form.email" :id="email" aria-label="Last name" >
			</div>
            
            <!--Senha-->
            <div class="col-md-6">
                <label for="" class="form-label">Senha</label>
                <input type="password" class="form-control" v-model="form.password" :id="password" placeholder="">
                    <div class="invalid-feedback">
                        Informe um e-mail válido!
                    </div>
            </div>
            <!--Confirmação de senha-->
            <div class="col-md-6">
                <label for="" class="form-label">Confirmação de senha</label>
                <input type="password" class="form-control" v-model="form.password_confirmation" :id="password_confirmation" placeholder="">
                    <div class="invalid-feedback">
                        Informe um e-mail válido!
                    </div>
            </div>
            
            
            <!--Endereço-->
            <div class="d-flex justify-content-around">
                <div class="flex-fill p-2" >
                    <label for="" class="form-label">CEP</label>
                    <input type="text" class="form-control" v-model="form.cep" :id="cep" placeholder="">
                        <div class="invalid-feedback">
                            Informe um cep válido!
                        </div>
                </div>
                <div class="flex-fill p-2">
                    <label for="" class="form-label">Cidade</label>
                    <input type="text" class="form-control" v-model="form.address.city" :id="city" placeholder="">
                        <div class="invalid-feedback">
                            Informe um cidade válido!
                        </div>
                </div>
                <div class="flex-fill p-2">
                    <label for="" class="form-label">Estado</label>
                    <input type="text" class="form-control" v-model="form.address.state" :id="state" placeholder="">
                        <div class="invalid-feedback">
                            Informe um estado válido!
                        </div>
                </div>
            </div>
            <div class="col-md-6">
                <label for="" class="form-label">Rua</label>
                <input type="text" class="form-control" v-model="form.address.road" :id="road" placeholder="">
                    <div class="invalid-feedback">
                        Informe um e-mail válido!
                    </div>
            </div>
            <div class="col-md-6">
                <label for="" class="form-label">Bairro</label>
                <input type="text" class="form-control " v-model="form.address.district" :id="district" placeholder="">
                    <div class="invalid-feedback">
                        Informe um e-mail válido!
                    </div>
            </div>
            
            <div class="col-12">
                <button id="btn-signup" class="btn btn-primary col-md-12" type="submit" @click="Register($event)">Cadastrar</button>
            </div>
        </div>
    </form>

</template>