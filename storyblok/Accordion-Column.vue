<template>
  <div
    v-editable="blok"
    class="container grid grid-cols-1 gap-5 lg:gap-10 place-items-center"
  >
    <StoryblokComponent
      v-for="(blok, index) in blok.column"
      :key="blok._uid"
      :blok="blok"
      :isOpen="index === openAccordionIndex"
      @toggleAccordion="toggleAccordion(index)"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });

const openAccordionIndex = ref(-1);

const toggleAccordion = (index) => {
  openAccordionIndex.value = openAccordionIndex.value === index ? -1 : index;
};
</script>
