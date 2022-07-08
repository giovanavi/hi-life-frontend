<script>
import Update from '../components/Update.vue';
import SignupForm from '../components/SignupForm.vue';
import ChangePassword from '../components/ChangePassword.vue';
import NavBar from '../components/NavBar.vue'
import DataPicker from '../components/DataPicker.vue';

export default {
    name: "Home",
    data() {
        return {};
    },
    components: { Update, SignupForm, ChangePassword, NavBar, DataPicker }
}

</script>
<template>
    <body>
        <NavBar></NavBar>
        <div id="main-banner">
            <h1>Hi-Life</h1>
        </div>
        <Footer></Footer>
    </body>   
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