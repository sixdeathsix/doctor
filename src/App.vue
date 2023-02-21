<template>
  <Header />
  <router-view />
  <Footer />
  <Toast position="top-right"  />
</template>
<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>