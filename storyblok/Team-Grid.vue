<script setup>
import { computed } from "vue";
import { useMediaQuery } from "@vueuse/core";
const isMobile = useMediaQuery("(min-width: 768px)");

const { blok } = defineProps({ blok: Object });

const firstFour = computed(() => blok.columns.slice(0, 4));
</script>

<template>
  <div v-editable="blok" class="container">
    <div
      v-if="isMobile"
      class="grid grid-cols-2 xl:grid-cols-3 place-items-center gap-10"
    >
      <StoryblokComponent
        v-for="blok in blok.columns"
        :key="blok._uid"
        :blok="blok"
      />
    </div>

    <div v-if="!isMobile" class="grid grid-cols-1 place-items-center gap-10">
      <StoryblokComponent
        v-for="blok in firstFour"
        :key="blok._uid"
        :blok="blok"
      />
    </div>

    <div class="mt-9 md:mt-10 flex md:justify-end">
      <a
        class="bg-dark text-white py-5 px-8 rounded-[14px] text-center w-full md:w-auto md:inline-block"
        >See more of the team</a
      >
    </div>
  </div>
</template>
