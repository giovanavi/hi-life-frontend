<script>
import axio from 'axios';

export default {
    name: 'Register',
    props: {
        isLoggedIn: {
            type: Boolean
        }
    },
    data() {
        return {
            isLogged: null,
            mypatient: null,
            form: {
                id: '',	
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
                    let address = `${this.form.address.city}, ${this.form.address.road}, ${this.form.address.state}, ${this.form.address.district}`;
                    let form = {
                        name: this.form.name,
                        email: this.form.email,
                        password: this.form.password,
                        cep: this.form.cep,
                        address: address
                    };

                    const { data }  = await axio.post('http://hilifeapi4-env.eba-9z5dxudh.us-east-1.elasticbeanstalk.com/api/v1/Auth/Patient/register', form);
                
                    console.log(data.result.idUser);
                    localStorage.setItem('id', data.result.idUser);
                    localStorage.setItem('token', data.result.acessToken);


                    alert('Usuário cadastrado com sucesso!');
                    this.$router.push('/Patient');
                } catch (error) {
                    alert('Erro ao cadastrar');
                }
            } else {
                alert('Preencha todos os campos');
            }
        },
        async GetPatient() {
            console.log(localStorage.getItem('id'));
            console.log(localStorage.getItem('token'));
            try {
                const {data} = await axio.get('http://hilifeapi4-env.eba-9z5dxudh.us-east-1.elasticbeanstalk.com/api/Patient/' + localStorage.getItem('id'), {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                });
                this.populateForm(data);
                
            } catch {
                alert('Erro ao buscar usuário');
            }
        },
        async UpdatePatient(e) {
            e.preventDefault();
            console.log(e);
            try {
                let address = `${this.form.address.city}, ${this.form.address.road}, ${this.form.address.state}, ${this.form.address.district}`;
                let form = {
                    id: this.form.id,
                    name: this.form.name,
                    email: this.form.email,
                    password: this.form.password,
                    cep: this.form.cep,
                    address: address
                };
                const {data} = await axio.put('http://hilifeapi4-env.eba-9z5dxudh.us-east-1.elasticbeanstalk.com/api/Patient/', form, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                });
                alert('Usuário atualizado com sucesso!');
            } catch (error) {
                alert('Erro ao atualizar');
            }
        },
        async DeletePatient(e) {
            e.preventDefault();
            if(confirm('Deseja realmente excluir o usuário')) {
                try {
                    const {data} = await axio.delete('http://hilifeapi4-env.eba-9z5dxudh.us-east-1.elasticbeanstalk.com/api/Patient/' + this.form.id, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                    });
                    alert('Usuário deletado com sucesso!');
                    this.$router.push('/');
                } catch (error) {
                    alert('Erro ao deletar');
                }
            }
        },
        VerifyInput() {
            if(this.form.name == '' || this.form.email == '' || this.form.password == '' || this.form.password_confirmation == '' || this.form.cep == '' || this.form.address.city == '' || this.form.address.road == '' || this.form.address.state == '' || this.form.address.district == ''){
                return false;
            }
            return true;
        },
        populateForm(data) {
            this.form.id = data.id;
            this.form.name = data.name;
            this.form.email = data.email;
            this.form.password = data.password;
            this.form.cep = data.cep;
            let address = data.address.split(',');
            this.form.address.city = address[0];
            this.form.address.road = address[1];
            this.form.address.state = address[2];
            this.form.address.district = address[3];
        }
    },
    mounted() {
        this.isLogged = this.isLoggedIn;
        if (this.isLogged) {
            this.GetPatient();
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
        <input type="password" class="form-control" v-if="!isLogged" v-model="form.password_confirmation" :id="password_confirmation" placeholder="Confirmação de senha">
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
        <button class="col-12 btn btn-primary btn-lg " v-if="!isLogged" type="submit" @click="Register($event)">Cadastrar</button>
        <div class="d-flex justify-content-between">
            <button class="btn btn-primary btn-lg " v-if="isLogged" type="submit" @click="UpdatePatient($event)">Atualizar Perfil</button>
            <button class="btn btn-danger btn-lg " v-if="isLogged" type="submit" @click="DeletePatient($event)">Excluir Perfil</button>
        </div>
    </div>
        
</form>

</template>

<style scoped>
.invalid-feedback {
    display: none;
}
.invalid-feedback.show {
    display: block;
    color: red;
}
</style>