import {
    createRouter,
    createWebHistory
} from 'vue-router';

const isAuth = localStorage.hasOwnProperty('token')

function authGuard(to, from ,next) {
    if (!isAuth) {
        next({ name: 'signin' })
    } else {
        next()
    }
}

function noAuthGuard(to, from ,next) {
    if (isAuth) {
        next({ name: 'home' })
    } else {
        next()
    }
}

const routes = [
    {
        path: "/:pathMatch(.*)*",
        redirect: "/"
    },
    {
        path: "/",
        name: "home",
        component: () => import("../pages/Home.vue")
    },
    {
        path: "/signin",
        name: "signin",
        component: () => import("../pages/Signin.vue")
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import("../pages/Signup.vue")
    },
    {
        path: "/order",
        name: "order",
        component: () => import("../pages/Order.vue")
    },
    {
        path: "/schedule",
        name: "schedule",
        component: () => import("../pages/Chedule.vue")
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import("../pages/Profile.vue")
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});