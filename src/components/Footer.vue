<script setup>
import Hashtags from "../components/Hashtags.vue";
import Icons from "../components/Icons.vue";
</script>
<template>
  <footer class="bg-footer dark:bg-gray-900">
    <Icons class="p-10 border-b border-gray" />
    <div>
      <div class="flex text-white justify-center p-2">
        <img class="w-24 h-auto" src="@/assets/fabrica_news_icon.svg" alt="" />
        <h2 class="p-5 text-4xl">
          <span class="border-l border-gray pl-3 text-5xl">f</span>News
        </h2>
      </div>
    </div>
    <div class="mx-auto w-2/5 max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <Hashtags
          title="Hashtags"
          :items="[
            {
              name: 'Link 1',
              link: 'link',
            },
            {
              name: 'Link 2',
              link: 'link',
            },
            {
              name: 'Link 3',
              link: 'link',
            },
            {
              name: 'Link 4',
              link: 'link',
            },
          ]"
        />
        <Hashtags
          title="Hashtags"
          :items="[
            {
              name: 'Link 1',
              link: 'link',
            },
            {
              name: 'Link 2',
              link: 'link',
            },
            {
              name: 'Link 3',
              link: 'link',
            },
            {
              name: 'Link 4',
              link: 'link',
            },
          ]"
        />
        <Hashtags
          title="Menu"
          :items="[
            {
              name: 'Explorar',
            },
            {
              name: 'Todas as Tags',
            },
            {
              name: 'Sobre nós',
            },
            {
              name: 'Dúvidas Frequentes',
            },
          ]"
        />
        <Hashtags
          title="Informações"
          :items="[
            {
              name: 'Minha Conta',
            },
            {
              name: 'Participe da Fábrica',
            },
            {
              name: 'Seja Colaborador ',
            },
            {
              name: 'Fale Conosco',
            },
            {
              name: 'Anuncie',
            },
          ]"
        />
      </div>
    </div>
    <div class=" p-5 flex justify-center">
    <img class="w-24" src="@/assets/Group-1.svg"/>  
      <img class="w-24" src="@/assets/image.png"/>  
    </div>
  </footer>
</template>
