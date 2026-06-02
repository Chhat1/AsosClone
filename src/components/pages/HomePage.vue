<script setup>
import { productMen } from "../../api/productmen";
import { product } from "../../api/products";
</script>

<template>
  <div class="Home-Page w-full">
    <!-- banner -->
    <div
      class="banner lg:w-full lg:h-screen w-full h-60 bg-[url('/src/assets/images/banner.webp')] bg-cover bg-center bg-no-repeat relative"
    >
      <div
        class="btn flex items-center gap-3 absolute lg:bottom-10 bottom-0 left-1/2 lg:left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <button
          class="bg-white text-black lg:text-base text-[10px] lg:py-3 lg:px-10 py-1 px-10 font-medium hover:bg-black hover:text-white transition-all duration-500 ease-in-out cursor-pointer"
        >
          SHOP WOMENS
        </button>
        <button
          class="bg-white text-black lg:text-base text-[10px] lg:py-3 lg:px-10 py-1 px-10 font-medium hover:bg-black hover:text-white transition-all duration-500 ease-in-out cursor-pointer"
        >
          SHOP MENS
        </button>
      </div>
    </div>

    <div class="mu-section lg:flex justify-between py-6 hidden">
      <div
        class="flex items-center justify-center text-center px-20 w-[24%] h-60 text-2xl font-bold bg-green-500"
      >
        New here? Get your first-timer discount
      </div>
      <div
        class="flex items-center justify-center text-center px-20 w-[24%] h-60 text-2xl font-bold bg-sky-500"
      >
        Download our app for exclusive discounts and the latest drops
      </div>
      <div
        class="flex items-center justify-center text-center px-20 w-[24%] h-60 text-2xl font-bold bg-pink-400"
      >
        Worldwide delivery
      </div>
      <div
        class="flex items-center justify-center text-center px-20 w-[24%] h-60 text-2xl font-bold bg-green-400"
      >
        Easy Returns
      </div>
    </div>

    <div class="lg:mb-15 mb-5">
      <!-- header title -->
      <div class="flex justify-between items-center lg:py-5 lg:px-10 px-5 py-5">
        <h1 class="font-bold text-2xl">New In</h1>
        <button
          class="border border-gray-100 py-2 px-2 font-medium cursor-pointer hover:bg-black hover:text-white transition-all duration-500 ease-in-out"
        >
          SHOP NOW
        </button>
      </div>
      <!-- main card -->
      <div
        class="products-new flex justify-between flex-wrap lg:px-0 lg:py-0 px-5"
      >
        <!-- card -->
        <div
          v-for="item in product"
          :key="item.id"
          class="lg:w-[16%] md:w-[48%] w-[48%] h-80 cursor-pointer mb-5"
        >
          <div class="image w-full h-[90%]">
            <img class="w-full h-full object-cover" :src="item.image" alt="" />
          </div>
          <div
            class="text-info bg-white/30 border border-gray-200 backdrop-blur-md w-full h-[10%]"
          >
            <h1 class="text-black font-bold text-center">
              {{ item.category }}
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="Product-Men lg:py-10 lg:px-0  py-10">
      <div class="header">
        <h1 class="font-bold text-2xl lg:px-10 lg:py-5 px-5 py-5">
          Product Mens
        </h1>
      </div>

      <div
        class="flex w-full gap-4 lg:py-4 lg:px-5 lg:ml-0 ml-5  overflow-x-auto scrollbar-hide snap-x"
      >
        <div
          v-for="item in productMen"
          :key="item.id"
          class="lg:w-[16%] md:w-[48%] w-[48%] shrink-0 bg-white  border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden snap-start"
        >
          <div class="relative overflow-hidden h-64">
            <img
              class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              :src="item.image"
              :alt="item.title"
            />
            <div
              class="absolute inset-0 lg:flex hidden items-center justify-center bg-black/10 backdrop-blur-[2px] opacity-0 transition-all duration-500 group-hover:opacity-100"
            >
              <router-link
                to=""
                class="flex items-center text-sm gap-2 bg-white text-gray-900 px-6 py-2 rounded-full font-semibold shadow-lg transform translate-y-4 transition-all duration-500 group-hover:translate-y-0 hover:bg-gray-100 hover:scale-105 active:scale-95"
              >
                View Details
              </router-link>
            </div>
            <span
              class="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full"
              >New</span
            >
          </div>

          <div class="p-4">
            <p class="text-xs text-gray-500 uppercase tracking-wide">
              {{ item.category }}
            </p>
            <h3
              class="font-semibold text-gray-800 mt-1 line-clamp-1 text-sm lg:text-base"
            >
              {{ item.title }}
            </h3>
            <p class="text-gray-500 lg:block hidden text-sm mt-2 line-clamp-2 h-10">
              {{ item.des }}
            </p>

            <div class="lg:flex items-center  hidden gap-1 mt-3">
              <span class="text-yellow-400">★★★★★</span>
              <span class="text-sm text-gray-500"
                >({{ item.rating || 4.8 }})</span
              >
            </div>

            <div class="flex items-center justify-between mt-4">
              <span class="font-bold text-lg text-black"
                >${{ item.price }}</span
              >
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

    <!-- Shop by Brand -->
    <div class="shop-by-brand">
      <div class="header">
        <h1 class="font-bold text-2xl lg:px-10 lg:py-5 px-5 py-5">
          Shop by brand
        </h1>
      </div>

      <div class="overflow-hidden lg:w-[95%] w-[89%] mx-auto">
        <div class="flex w-max items-center gap-10 animate-marquee">
          <!-- Set 1 -->
          <img
            class="h-30 lg:h-50 shrink-0 cursor-pointer"
            src="https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/mango_v5.jpg"
          />

          <img
            class="h-30 lg:h-50 shrink-0 cursor-pointer"
            src="https://content.asos-media.com/-/media/homepages/ww/2025/september/22-mena-row-apac-ie/logo_abercrombie_870x500_resized_logo2.png"
          />

          <img
            class="h-30 lg:h-50 shrink-0 cursor-pointer"
            src="https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/huda-beauty_v2.jpg"
          />

          <img
            class="h-30 lg:h-50 shrink-0 cursor-pointer"
            src="https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/elf_v2.jpg"
          />

          <img
            class="h-30 lg:h-50 shrink-0 cursor-pointer"
            src="https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/new-balance_desktop_v2.jpg"
          />

          <img
            class="h-30 lg:h-50 shrink-0 cursor-pointer"
            src="https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/on-desktop.jpg"
          />

          <!-- Set 2 (Duplicate Exact Same Logos) -->
          <img
            class="h-30 lg:h-50 shrink-0 cursor-pointer"
            src="https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/mango_v5.jpg"
          />

          <img
            class="h-30 lg:h-50 shrink-0 cursor-pointer"
            src="https://content.asos-media.com/-/media/homepages/ww/2025/september/22-mena-row-apac-ie/logo_abercrombie_870x500_resized_logo2.png"
          />

          <img
            class="h-30 lg:h-50 shrink-0 cursor-pointer"
            src="https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/huda-beauty_v2.jpg"
          />

          <img
            class="h-30 lg:h-50 shrink-0 cursor-pointer"
            src="https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/elf_v2.jpg"
          />

          <img
            class="h-30 lg:h-50 shrink-0 cursor-pointer"
            src="https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/new-balance_desktop_v2.jpg"
          />

          <img
            class="h-30 lg:h-50 shrink-0 cursor-pointer"
            src="https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/on-desktop.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<style>
@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-50% - 20px));
  }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
