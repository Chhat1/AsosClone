<template>
  <!-- Product Men -->
  <div class="Product-Men lg:py-10 lg:px-0 py-10 px-5">
    <div class="header lg:mb-10 mb-9">
      <h1
        class="font-bold lg:text-2xl text-xl lg:text-start text-center container mx-auto"
      >
        Product Womens
      </h1>
    </div>
    <div
      class="container mx-auto flex items-center justify-between flex-wrap gap-y-6"
    >
      <!-- Card -->
      <div
        v-for="item in productWomen"
        :key="item.id"
        class="lg:w-[16%] md:w-[48%] w-[48%] bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
      >
        <!-- Image -->
        <div class="relative overflow-hidden h-64">
          <img
            class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            :src="item.image"
            :alt="item.title"
          />

          <div
            class="absolute inset-0 lg:flex hidden items-center justify-center bg-black/10 backdrop-blur-[2px] opacity-0 transition-all duration-500 group-hover:opacity-100"
          >
            <router-link to=""
              class="flex items-center text-sm gap-2 bg-white text-gray-900 px-6 py-2 rounded-full font-semibold shadow-lg transform translate-y-4 transition-all duration-500 cursor-pointer group-hover:translate-y-0 hover:bg-gray-100 hover:scale-105 active:scale-95"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>

              </svg>
              View Details
            </router-link>
          </div>

          <!-- Badge -->
          <span
            class="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full"
          >
            New
          </span>
        </div>

        <!-- Content -->
        <div class="p-4">
          <!-- Category -->
          <p class="text-xs text-gray-500 uppercase tracking-wide">
            {{ item.category }}
          </p>

          <!-- Title -->
          <h3
            class="font-semibold text-gray-800 mt-1 line-clamp-1 text-sm lg:text-base"
          >
            {{ item.title }}
          </h3>

          <!-- Description -->
          <p class="text-gray-500 hidden text-sm mt-2 line-clamp-2 h-10">
            {{ item.des }}
          </p>

          <!-- Rating -->
          <div class="lg:flex hidden items-center gap-1 mt-3">
            <span class="text-yellow-400">★★★★★</span>
            <span class="text-sm text-gray-500">
              ({{ item.rating || 4.8 }})
            </span>
          </div>

          <!-- Price + Button -->
          <div class="flex items-center justify-between mt-4">
            <span class="font-bold text-lg text-black">
              ${{ item.price }}
            </span>

            <button
              class="bg-black cursor-pointer text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { productMen } from "../../api/productmen";
import { productWomen } from "../../api/productwomen";
</script>

