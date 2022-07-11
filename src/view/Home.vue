<script>
import SignupForm from '../components/SignupForm.vue';
import ChangePassword from '../components/ChangePassword.vue';
import NavBar from '../components/NavBar.vue'
import DatePicker from '../components/DatePicker.vue';

export default {
    name: "Home",
    data() {
        return {
            isLoggedIn: false
        };
    },
    components: { SignupForm, ChangePassword, NavBar, DatePicker }
}

</script>
<template>
    <body>
        <NavBar :isLoggedIn="isLoggedIn"></NavBar>
        <header class="bg-dark p-5">
            <div class="container p-5">
                <div class="row g-5 justify-content-right">
                    <div class="col-md-6 col-lg-6">
                        <div class="text-center m-5">
                            <h1 class="display-5 mb-2">Hi-life</h1>
                            <h2 class="mb-6">Agende consultas com agilidade e facilidade sem sair de casa.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Services section-->
        <section id="services">
            <div class="container p-5">
                <div class="row g-4 justify-content-center">
                    <div class="col-sm-9 col-md-9 col-lg-9 col-xl-9">
                        <h2 class="text-center" >Serviços</h2>
                        <h3>De forma fácil e grátis agende sua consulta com rapidez. 
                            Escolha o profissional de saúde de sua preferência e o melhor 
                            horário para sua consulta. 
                        </h3>
                    </div>
                </div>
            </div>
        </section>
        <!-- Contact section-->
        <section id="team">
          <div class="container p-5">
            <div class="row g-4 justify-content-center">
                <div class="col-sm-9 col-md-9 col-lg-9 col-xl-9">
                  <h2 class="text-center">Equipe</h2>
                    <div class="row g-5 justify-content-center">
                      <div class="p-2 col-lg-4 col-mb-5 mb-lg-5 card">
                          <div class="p-2 rounded-3 mb-3">
                            <h4>Giovana Vieira</h4>
                          </div>
                      </div>
                      <div class="p-2 col-lg-4 col-mb-5 mb-lg-5 card">
                          <div class="p-2 rounded-3 mb-3">
                            <h4> Vitor Alves </h4>
                          </div>
                          
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </section>  
    </body> 
      <Footer></Footer>
</template>

<style scoped>
header{
    background-image: url(../assets/logo.jpg);
    background-position: center center;
    background-size: cover;   
}
header h1{
    font-weight: bold;
color: black;
}
header h2{
    color: black;
}  
#services{
    background-image: url(../assets/consultorio.jpg);
    background-position: center center;
    background-size: cover; 
}
#services h2{
    font-weight: bold;
    color: black;
}
#services h3{
    color: black;
}
#team h2{
    color: #4C88AD;
}
#team h4{
    color: #4C88AD;
}
</style>