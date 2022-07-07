<script>
import Update from '../components/Update.vue';
import SignupForm from '../components/SignupForm.vue';
import ChangePassword from '../components/ChangePassword.vue';
import NavBar from '../components/NavBar.vue'

export default {
    name: "Home",
    data() {
        return {};
    },
    components: { Update, SignupForm, ChangePassword, NavBar }
}

</script>
<template>
    <body>
        <NavBar></NavBar>
        <LoginForm></LoginForm>
        <Signup/>
    </body>   
</template>
