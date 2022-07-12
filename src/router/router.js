import { createRouter, createWebHistory } from 'vue-router'

import Home from '../view/Home.vue'
import Doctor from '../view/Doctor.vue'
import Patient from '../view/Patient.vue'
import Signup from '../view/Signup.vue'
import Login from '../view/Login.vue'
import Profile from '../view/Profile.vue'


const routes = [ 
    {
        path: "/",
        name: 'Home',
        component: Home
    },
    {
        path: "/patient",
        name: 'Patient',
        component: Patient
    },
    {
        path: "/login",
        name: 'Login',
        component: Login
    },
    {
        path: "/signup",
        name: 'Signup',
        component: Signup
    },
    {
        path: "/doctor",
        name: 'Doctor',
        component: Doctor
    },
    {
        path: "/profile",
        name: 'Profile',
        component: Profile
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router