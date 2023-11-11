<template>
  <div
    v-editable="props.blok"
    v-bind:id="props.blok.sectionId"
    class="container pt-[60px] lg:pt-[140px] pb-10 lg:pb-20"
  >
    <div
      class="flex flex-col md:flex-row items-center space-y-7 md:space-y-0 md:space-x-10 text-center md:text-left"
    >
      <h2 class="bg-green md:px-0.5 inline-block text-4.5xl leading-[1.15]">
        {{ props.blok.title }}
      </h2>

      <div v-html="description"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const description = computed(() => {
  if (props.blok.description.content) {
    return props.blok.description.content[0].content[0].text;
  } else {
    return props.blok.description;
  }
});
</script>
