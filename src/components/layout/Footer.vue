<script setup>
</script>

<template>
    <footer class="footer w-full mt-1">
        <div class="media-top w-full bg-white py-2 border-t border-t-gray-300 lg:flex hidden justify-center items-center gap-10">
            
                <i class="bi text-2xl text-black bi-facebook"></i>
                <i class="bi text-2xl text-black bi-instagram"></i>
                <i class="bi text-2xl text-black bi-telegram"></i>
                <i class="bi bi-credit-card text-2xl"></i>
                <i class="bi bi-paypal text-2xl"></i>
           
        </div>
        
        <!-- Footer Top -->
        <div class="w-full bg-[#666]">
            <div class="max-w-7xl mx-auto py-5 px-5 flex flex-col lg:flex-row justify-between gap-10">
            
                <!-- Left -->
                <div class="w-full lg:w-1/2">
                    <h1 class="text-white font-bold lg:text-xl text-[20px] mb-5">
                        Hear about the best offers and the latest drops first
                    </h1>

                    <form class="flex flex-col sm:flex-row gap-3 mb-5">
                        <input
                            class="text-[16px] py-2 px-5 bg-white w-full outline-none"
                            type="text"
                            placeholder="Enter your email"
                        />

                        <button
                            class="text-white font-bold py-2 px-6 bg-black whitespace-nowrap cursor-pointer transition-all duration-500 hover:bg-white hover:text-black ease-in-out"
                        >
                            SUBSCRIBE
                        </button>
                    </form>

                    <p class="text-[11px] text-white leading-5">
                        *By entering your email, you consent to receive marketing emails from
                        ASOS in line with our Privacy Policy and Terms & Conditions.
                        You can opt out at any time by clicking 'Unsubscribe'
                        at the bottom of our emails.
                    </p>
                </div>

                <!-- Right -->
                <div class="w-full lg:w-auto flex flex-col items-center lg:items-start">
                    
                    <div class="flex items-center gap-3 mb-5">
                        <img
                            class="w-14 h-14 rounded-xl"
                            src="/src/assets/images/asos_app.png"
                            alt="ASOS App"
                        />

                        <div>
                            <p class="text-white text-xl font-bold">ASOS</p>

                            <p class="text-white text-[11px]">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                1.8m
                            </p>
                        </div>
                    </div>

                    <button
                        class="text-white font-bold text-[12px] py-3 px-6 bg-black cursor-pointer transition-all duration-500 hover:bg-white hover:text-black ease-in-out"
                    >
                        DOWNLOAD THE APP
                    </button>
                </div>

            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="w-full bg-[#1f1e1e] lg:block hidden">
            <div class="max-w-7xl mx-auto py-10 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                <!-- Help -->
                <div class="flex flex-col">
                    <h1 class="text-white font-medium mb-2">
                        HELP & INFORMATION
                    </h1>

                    <p class="text-white text-[12px] mt-2 hover:underline cursor-pointer">
                        Help
                    </p>

                    <p class="text-white text-[12px] mt-2 hover:underline cursor-pointer">
                        Track Order
                    </p>

                    <p class="text-white text-[12px] mt-2 hover:underline cursor-pointer">
                        Delivery & Returns
                    </p>

                    <p class="text-white text-[12px] mt-2 hover:underline cursor-pointer">
                        Sitemap
                    </p>
                </div>

                <!-- About -->
                <div class="flex flex-col">
                    <h1 class="text-white font-medium mb-2">
                        ABOUT ASOS
                    </h1>

                    <p class="text-white text-[12px] mt-2 hover:underline cursor-pointer">
                        About Us
                    </p>

                    <p class="text-white text-[12px] mt-2 hover:underline cursor-pointer">
                        Careers at ASOS
                    </p>

                    <p class="text-white text-[12px] mt-2 hover:underline cursor-pointer">
                        Corporate Responsibility
                    </p>

                    <p class="text-white text-[12px] mt-2 hover:underline cursor-pointer">
                        Investor Site
                    </p>
                </div>

                <!-- More -->
                <div class="flex flex-col">
                    <h1 class="text-white font-medium mb-2">
                        MORE FROM ASOS
                    </h1>

                    <p class="text-white text-[12px] mt-2 hover:underline cursor-pointer">
                        Mobile and ASOS apps
                    </p>

                    <p class="text-white text-[12px] mt-2 hover:underline cursor-pointer">
                        Gift vouchers
                    </p>

                    <p class="text-white text-[12px] mt-2 hover:underline cursor-pointer">
                        Black Friday
                    </p>
                </div>

                <!-- Country -->
                <div class="flex flex-col">
                    <h1 class="text-white font-medium mb-2">
                        SHOPPING FROM:
                    </h1>

                    <p class="text-white text-[12px] mt-2">
                        You're in Cambodia
                        <span class="font-bold cursor-pointer hover:underline">
                            | CHANGE
                        </span>
                    </p>

                    <p class="text-white text-[12px] mt-2">
                        Some of our international sites:
                    </p>
                </div>

            </div>
        </div>

        <!-- Bottom -->
        <div class="w-full bg-[#2d2d2d]">
            <div class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-3 py-5 px-5">

                <div class="left">
                    <p class="text-white text-[12px]">
                        © 2026 ASOS
                    </p>
                </div>

                <div class="right text-center">
                    <p class="text-white text-[12px]">
                        Privacy & Cookies | Ts&Cs | Accessibility
                    </p>
                </div>

            </div>
        </div>

    </footer>
</template>