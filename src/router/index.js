import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/pages/HomePage.vue";
import ProductMens from "../components/pages/ProductMens.vue";


const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/shopmen",
        component: ProductMens
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})