import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/pages/HomePage.vue";
import ProductMens from "../components/pages/ProductMens.vue";
import ProductWomens from "../components/pages/ProductWomens.vue";


const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/shopmen",
        component: ProductMens
    },
    {
        path: "/shopwomen",
        component: ProductWomens
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})