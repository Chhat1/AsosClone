<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const openSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <!-- main navbar -->
  <header class="sticky top-0 z-50">
    <!-- navbar -->
    <nav class="navbar">
      <!-- navbar top -->
      <div class="navbar-top lg:block hidden bg-white py-0">
        <div class="container mx-auto flex justify-end items-center">
          <router-link
            class="bg-[#cf0] py-2 px-2 font-serif text-[13px] font-bold cursor-pointer"
            to=""
            >Download our new app</router-link
          >
          <router-link
            class="bg-white py-2 px-2 font-serif text-[13px] cursor-pointer"
            to=""
            >Help & FAQs</router-link
          >
          <div
            class="Preferences-language py-2 px-3 border-l border-l-gray-200 border-r border-r-gray-200"
          >
            <div
              class="image-language w-5 h-5 bg-red-500 rounded-full overflow-hidden cursor-pointer"
            >
              <img
                class="w-full h-full object-cover"
                src="/src/assets/images/Cambodia.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <!-- navbar bottom -->
      <div class="navbar-bottom lg:px-0 lg:py-0 px-5 py-3 bg-[#2d2d2d]">
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex items-center lg:gap-10 gap-4">
            <!-- menu-mobile -->
            <div class="lg:hidden">
              <button @click="openSidebar">
                <i class="bi bi-list cursor-pointer text-white text-3xl"></i>
              </button>
            </div>
            <!-- logo -->
            <div class="logo">
              <h1 class="text-white font-bold text-3xl cursor-pointer">ASOS</h1>
            </div>
            <!-- menu -->
            <div class="menu-links">
              <ul class="lg:flex hidden items-center gap-0">
                <li class="py-6">
                  <router-link
                    class="font-bold text-white text-base cursor-pointer hover:bg-white/10 py-6 px-6 transition-all ease-in-out duration-300"
                    to="/"
                    >HOME</router-link
                  >
                </li>
                <li class="py-6">
                  <router-link
                    class="font-bold text-white text-base cursor-pointer hover:bg-white/10 py-6 px-6 transition-all ease-in-out duration-300"
                    to="/shopwomen"
                    >WOMEN</router-link
                  >
                </li>
                <li class="py-3">
                  <router-link
                    class="font-bold text-white text-base cursor-pointer hover:bg-white/10 py-6 px-6 transition-all ease-in-out duration-300"
                    to="/shopmen"
                    >MEN</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- search box -->
          <div class="search-box relative lg:block hidden">
            <!-- Search Icon -->
            <i
              class="bi bi-search cursor-pointer text-[#2d2d2d] absolute left-4 top-1/2 -translate-y-1/2"
            ></i>

            <!-- Input -->
            <input
              class="bg-white w-150 py-2 pl-11 pr-5 rounded-full outline-none border border-gray-200"
              type="text"
              placeholder="Search for items and brands"
            />
          </div>
          <!-- icons -->
          <div class="icons flex items-center gap-5">
            <i
              class="bi lg:hidden bi-search cursor-pointer text-white text-xl"
            ></i>
            <i class="bi bi-person text-white text-2xl cursor-pointer"></i>
            <i class="bi bi-heart text-white text-xl cursor-pointer"></i>
            <i class="bi bi-bag text-white text-xl cursor-pointer"></i>
          </div>
        </div>
      </div>
    </nav>
  </header>


  <!-- menu-sidebar -->
  <div
    v-if="isOpen"
    @click="openSidebar"
    class="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm lg:hidden transition-all"
  ></div>

  <div
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    class="fixed top-0 left-0 h-full w-[80%] max-w-xs bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out p-6"
  >
    <div class="flex items-center justify-between mb-10">
      <div class="text-3xl font-black tracking-tighter text-gray-900">ASOS</div>
      <button
        @click="openSidebar"
        class="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>

    <ul class="space-y-4">
      <li>
        <router-link
          to="/"
          class="flex items-center p-4 text-lg font-bold text-gray-700 hover:bg-gray-50 hover:text-gray-950 rounded-xl transition-all border-b border-gray-50"
        >
          HOME
        </router-link>
      </li>
      <li>
        <router-link
          to="/shopwomen"
          class="flex items-center p-4 text-lg font-bold text-gray-700 hover:bg-gray-50 hover:text-gray-950 rounded-xl transition-all border-b border-gray-50"
        >
          WOMEN
        </router-link>
      </li>
      <li>
        <router-link
          to="/shopmen"
          class="flex items-center p-4 text-lg font-bold text-gray-700 hover:bg-gray-50 hover:text-gray-950 rounded-xl transition-all border-b border-gray-50"
        >
          MEN
        </router-link>
      </li>
    </ul>

    <div class="absolute bottom-10 left-6 right-6">
      <button
        class="w-full py-4 cursor-pointer bg-black text-white font-bold rounded-full hover:scale-[1.02] transition-transform"
      >
        Sign In
      </button>
    </div>
  </div>
</template>



