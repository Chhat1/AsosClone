import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [],
        loading: false,
    }),

    actions: {
        async getProductAll() {
            this.loading = true;

            try {
                const res = axios.get('https://api.escuelajs.co/api/v1/products')
                this.products = (await res).data;
            }catch(err){
                console.error('Error',err)
            }finally{
                this.loading = false
            }
        }       
    },
});