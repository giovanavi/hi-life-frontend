<script>
import NavBar from '../components/NavBar.vue'
import SignupForm from '../components/SignupForm.vue'

export default {
    name: 'Home',
    data() {
        return {
            isLoggedIn: true
        };
    },
    components: { NavBar, SignupForm }
}

</script>


<template>
    <NavBar :isLoggedIn="isLoggedIn"></NavBar>
    <div class="container">
        <div class="">
            <SignupForm isLoggedIn="isLoggedIn"></SignupForm>
        </div>
    </div>
    <Footer></Footer>
</template>