<template>
  <main
    class="relative font-space font-normal bg-white scroll-smooth overflow-x-hidden"
  >
    <AppNav />
    <slot />
    <AppFooter />
  </main>
</template>

<script setup>
import { useFavicon, usePreferredDark } from "@vueuse/core";

const isDark = usePreferredDark();

const favicon = computed(() =>
  isDark.value ? "/favicon-light.png" : "/favicon.png"
);

const icon = useFavicon(favicon);
</script>
