<script>
import Update from '../components/Update.vue';
import SignupForm from '../components/SignupForm.vue';
import ChangePassword from '../components/ChangePassword.vue';
import NavBar from '../components/NavBar.vue'
import DatePicker from '../components/DatePicker.vue';

export default {
    name: "Home",
    data() {
        return {};
    },
    components: { Update, SignupForm, ChangePassword, NavBar, DatePicker }
}

</script>
<template>
    <body>
        <NavBar></NavBar>
        <header class="bg-dark py-5">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <h1 class="display-5 fw-bolder text-white mb-2">Hi-life</h1>
                            <p class="lead text-white-50 mb-4">Site de consultas</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- About section-->
        <section>
            <div class="container p-4">
                <div class="row g-4 justify-content-center">
                  <div class="col-sm-9 col-md-9 col-lg-9 col-xl-9">
                        <h2 class="text-center">Hi-Life</h2>
                        <p class="lead">A single, lightweight helper class allows you to add engaging, full width background images to sections of your page.</p>
                        <p class="mb-0">The universe is almost 14 billion years old, and, wow! Life had no problem starting here on Earth! I think it would be inexcusably egocentric of us to suggest that we're alone in the universe.</p>
                  </div>
                </div>
            </div>
        </section>
        <!-- Services section-->
        <section class="bg-light" >
            <div class="container p-4">
                <div class="row g-4 justify-content-center">
                    <div class="col-sm-9 col-md-9 col-lg-9 col-xl-9">
                        <h2 class="text-center">Serviço</h2>
                        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Contact section-->
        <section class="bg-light" >
          <div class="container p-4">
            <div class="row g-4 justify-content-center">
                <div class="col-sm-9 col-md-9 col-lg-9 col-xl-9">
                  <h2 class="text-center">Equipe</h2>
                    <div class="row g-5 justify-content-center">
                      <div class="col-lg-4 col-mb-5 mb-lg-5 card">
                          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                            <i class="bi bi-collection"></i></div>
                          <h2 class="h4 fw-bolder">Giovana Vieira</h2>
                          <p>Paragraph</p>
                          <a class="text-decoration-none" href="#!">
                              Call to action
                              <i class="bi bi-arrow-right"></i>
                          </a>
                      </div>
                      <div class="col-lg-4 col-mb-5 mb-lg-5 card">
                          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                            <i class="bi bi-building"></i></div>
                          <h2 class="h4 fw-bolder">Vitor Alves</h2>
                          <p>Paragraph </p>
                          <a class="text-decoration-none" href="#!">
                              Call to action
                              <i class="bi bi-arrow-right"></i>
                          </a>
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
  #main-banner {
    background-image: url('../assets/logo.jpg');
    background-position: 0 -250px;
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  #main-banner h1 {
    color: #343a40;
    font-size: 60px;
    padding: 40px 40px;
  }
</style>