<template>
  <div
    v-editable="blok"
    class="grid grid-rows-2 grid-cols-3 lg:grid-rows-1 lg:grid-col-6 gap-12 my-12 place-items-center"
  >
    <StoryblokComponent
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
