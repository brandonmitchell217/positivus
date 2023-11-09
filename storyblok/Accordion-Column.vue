<template>
  <div
    v-editable="blok"
    class="container grid grid-cols-1 gap-5 lg:gap-10 place-items-center"
  >
    <StoryblokComponent
      v-for="blok in blok.column"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
