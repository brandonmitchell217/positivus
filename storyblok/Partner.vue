<script setup>
import { computed } from "vue";
import { useMediaQuery } from "@vueuse/core";
const isMobile = useMediaQuery("(min-width: 768px)");

const { blok } = defineProps({ blok: Object });

const split = computed(() => {
  const firstThree = blok.partners.slice(0, 3);
  const lastThree = blok.partners.slice(3, 6);
  return { firstThree, lastThree };
});
</script>

<template>
  <ClientOnly>
    <div v-editable="blok" class="overflow-x-hidden">
      <div
        v-if="isMobile"
        class="container pt-[60px] lg:pt-[70px] flex space-x-6 lg:space-x-0 justify-between items-center"
      >
        <div v-for="logo in blok.partners" :key="logo.id" class="partner">
          <img
            v-bind:src="logo.filename"
            v-bind:alt="logo.alt"
            class="max-w-full block lg:p-3 xl:p-0"
          />
        </div>
      </div>
      <div
        v-if="!isMobile"
        class="container pt-[60px] lg:pt-[70px] flex flex-col md:flex-row space-y-6 lg:space-y-24 justify-center items-center"
      >
        <div
          class="relative -right-[10%] xs:m-0 w-[110%] md:w-1/2 space-x-8 flex justify-between items-center"
        >
          <div v-for="logo in split.firstThree" :key="logo.id" class="partner">
            <img
              v-bind:src="logo.filename"
              v-bind:alt="logo.alt"
              class="max-w-full block"
            />
          </div>
        </div>
        <div
          class="relative -left-[10%] xs:m-0 w-[110%] md:w-1/2 space-x-8 flex justify-between items-center"
        >
          <div v-for="logo in split.lastThree" :key="logo.id" class="partner">
            <img
              v-bind:src="logo.filename"
              v-bind:alt="logo.alt"
              class="max-w-full block"
            />
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
