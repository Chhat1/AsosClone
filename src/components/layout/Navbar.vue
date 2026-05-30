<script setup>
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
        <div class="container  mx-auto flex justify-between items-center">
          <div class="flex items-center lg:gap-10 gap-4">
            <!-- menu-mobile -->
            <div class="lg:hidden">
                <i class="bi bi-list cursor-pointer text-white text-3xl"></i>
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
                    class="font-bold text-white text-base  cursor-pointer hover:bg-white/10 py-6 px-6 transition-all ease-in-out duration-300"
                    to=""
                    >WOMEN</router-link
                  >
                </li>
                <li class="py-3">
                  <router-link
                    class="font-bold text-white text-base  cursor-pointer hover:bg-white/10 py-6 px-6 transition-all ease-in-out duration-300"
                    to=""
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
              class="bg-white w-200 py-2 pl-11 pr-5 rounded-full outline-none border border-gray-200"
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
</template>



