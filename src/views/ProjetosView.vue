<script setup>
import NavBar from "../components/NavBar.vue";
import Projetos from "../components/Projetos.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main class="w-full flex flex-col items-center">
    <Projetos />
  </main>
  <footer >
    <Footer />
  </footer>
</template>
