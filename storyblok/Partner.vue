<script setup>
import { computed } from "vue";

const { blok } = defineProps({ blok: Object });

const firstThree = computed(() => blok.partners.slice(0, 3));
const lastThree = computed(() => blok.partners.slice(3, 6));
</script>

<template>
  <div
    v-editable="blok"
    class="container py-12 flex flex-col md:flex-row gap-4 lg:gap-12 justify-center items-center"
  >
    <div
      class="-mr-[25%] sm:m-0 w-[110%] md:w-1/2 md:gap-6 lg:gap-0 flex justify-between items-center"
    >
      <div v-for="logo in firstThree" :key="logo.id">
        <img
          v-bind:src="logo.filename"
          v-bind:alt="logo.alt"
          class="max-w-full block"
        />
      </div>
    </div>
    <div
      class="-ml-[25%] sm:m-0 w-[110%] md:w-1/2 md:gap-6 flex justify-between items-center"
    >
      <div v-for="logo in lastThree" :key="logo.id">
        <img
          v-bind:src="logo.filename"
          v-bind:alt="logo.alt"
          class="max-w-full block"
        />
      </div>
    </div>
  </div>
</template>
