<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        getLink(item) {
            return item.link ? item.link : item.name
        }
    }
}

</script>
<template>
  <div>
    <h2
      class="mb-6 text-sm font-semibold text-white uppercase dark:text-white"
    > 
    {{ title }}
    </h2>
    <ul  class="text-gray-500 dark:text-gray-400 font-medium">
      <li v-for="item in items"  class="mb-4">
        <a :href='getLink(item)'  class="hover:underline"> {{ item.name }} </a>
      </li>
    </ul>
  </div>
</template>

