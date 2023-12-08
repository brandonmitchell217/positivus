<script setup>
import gsap from "gsap";

// TODO: is needed???
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const isLoading = ref(true);

setTimeout(() => {
  isLoading.value = false;
}, 4800);
</script>

<template>
  <NuxtLayout>
    <Loading v-if="isLoading" />
    <NuxtPage />
  </NuxtLayout>
</template>
