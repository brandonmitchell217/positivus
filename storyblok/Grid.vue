<template>
  <div
    v-editable="blok"
    class="container grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-10 place-items-center"
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
