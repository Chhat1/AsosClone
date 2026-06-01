<script setup>
import Footer from './components/layout/Footer.vue';
import Navbar from './components/layout/Navbar.vue';
import HomePage from './components/pages/HomePage.vue';


</script>

<template>
    <div>
      <Navbar></Navbar>
      <router-view/>
      <Footer/>
    </div>
</template>
