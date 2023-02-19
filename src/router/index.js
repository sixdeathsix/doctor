import {
    createRouter,
    createWebHistory
} from 'vue-router';

import Signin from "../pages/Signin.vue";
import Home from "../pages/Home.vue";

const routes = [
    {
        path: "/:pathMatch(.*)*",
        redirect: "/"
    },
    {
        path: "/signin",
        name: "signin",
        component: Signin
    },
    {
        path: "/",
        name: "home",
        component: Home
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});