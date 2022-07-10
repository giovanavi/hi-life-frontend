<script>
import LoginForm from './LoginForm.vue';
import SignupForm from './SignupForm.vue';
export default {
    name: "Update",
    components: { LoginForm, SignupForm },
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
}

</script>


<template>
<div class="container">
	<div class="row">
		<div class="col-12">
			<!-- Page title -->
			<div class="p-3">
				<h3>Meu Perfil</h3>
				<hr>
			</div>
			<!-- Form START -->
			<form class="row g-3">	
				<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
					<input type="text" class="form-control form-control-lg" v-model="form.name" :id="name" placeholder="Nome">
				</div>
					<!-- Email -->
				<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
					<input type="email" class="form-control form-control-lg" v-model="form.email" :id="email" placeholder="E-mail" >
				</div>
				<!--Endereço-->
				<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
					<input type="text" class="form-control form-control-lg" v-model="form.cep" :id="cep" placeholder="CEP">
				</div>
				<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
					<input type="text" class="form-control form-control-lg" v-model="form.address.city" :id="city" placeholder="Cidade">
				</div>
				<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
					<input type="text" class="form-control form-control-lg" v-model="form.address.state" :id="state" placeholder="Estado">
				</div>
				<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
					<input type="text" class="form-control form-control-lg" v-model="form.address.road" :id="road" placeholder="Rua">
				</div>
				<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
					<input type="text" class="form-control form-control-lg" v-model="form.address.district" :id="district" placeholder="Bairro">
				</div>

				<div class="p-3 d-md-flex justify-content-md-end">
					<button class="btn btn-danger btn-lg " type="submit"> Deletar perfil </button>
					<button class="btn btn-primary btn-lg " type="submit"> Alterar perfil</button>
				</div>
			</form> <!-- Form END -->
		</div>
	</div>
</div>
</template>