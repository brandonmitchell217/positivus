<template>
  <div
    v-editable="blok"
    v-bind:id="blok.sectionId"
    class="container pt-[60px] lg:pt-[140px] pb-10 lg:pb-20"
  >
    <div
      class="flex flex-col md:flex-row items-center space-y-7 md:space-y-0 md:space-x-10 text-center md:text-left"
    >
      <h2 class="bg-green md:px-0.5 inline-block text-4.5xl leading-[1.15]">
        {{ blok.title }}
      </h2>
      <p class="max-w-[580px] text-lg">{{ blok.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
