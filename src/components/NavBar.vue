<script>
import LiNav from './LiNav.vue';
import logoBrand from './logoBrand.vue';
import IconPerson from './IconPerson.vue'

export default {
    components: { LiNav, logoBrand, IconPerson }
}
</script>
<template>
<nav class="bg-gradient-to-r from-gray-600 to-zinc-900 h-24">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 ml-14 " >
      <a href="#" class="flex items-center -mt-8">
          <logoBrand class="w-36 h-36 ml-7"/>
      </a>
      <div class="hidden w-full md:block md:w-auto " id="navbar-solid-bg">
        <ul class="flex flex-col font-medium rounded-lg bg-gray-50 md:flex-row md:bg-inherit dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 mx-36 -mt-7">
          <LiNav>
            <RouterLink to="">Home</RouterLink>
          </LiNav>
          <LiNav>
            <RouterLink to="#">Projetos</RouterLink>
          </LiNav>
          <LiNav>
            <RouterLink to="about">Sobre</RouterLink>
          </LiNav>
          <LiNav>
            <RouterLink to="#">Ajuda</RouterLink>
          </LiNav>
        </ul>
      </div>
      <IconPerson class="w-12 h-12 -mt-8"/>
    </div>
  </nav>
</template>
<style scoped>
</style>