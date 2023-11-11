<script setup>
import { computed } from "vue";
import { useMediaQuery } from "@vueuse/core";
const isMobile = useMediaQuery("(min-width: 768px)");

const { blok } = defineProps({ blok: Object });

const firstFour = computed(() => blok.columns.slice(0, 4));
</script>

<template>
  <div v-editable="blok" class="container">
    <ClientOnly>
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
    </ClientOnly>

    <ClientOnly>
      <div v-if="!isMobile" class="grid grid-cols-1 place-items-center gap-10">
        <StoryblokComponent
          v-for="blok in firstFour"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </ClientOnly>

    <div class="mt-9 md:mt-10 flex md:justify-end">
      <AppButton
        href="/"
        className="bg-dark text-white text-center w-full md:w-auto md:inline-block hover:bg-transparent hover:text-dark"
        >See more of the team</AppButton
      >
    </div>
  </div>
</template>
