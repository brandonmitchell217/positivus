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

useHead({
  title: "Positivus",
  meta: [
    { name: "Positivus", content: "Positivus" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: "Positivus" },
    { name: "og:title", content: "Positivus" },
    { name: "og:description", content: "Positivus" },
    { name: "og:image", content: "Positivus" },
    { name: "og:url", content: "Positivus" },
    { name: "apple-mobile-web-app-title", content: "Positivus" },
    { name: "application-name", content: "Positivus" },
    { name: "msapplication-tooltip", content: "Positivus" },
    { name: "msapplication-starturl", content: "/" },
    { name: "msapplication-tap-highlight", content: "no" },
    { name: "full-screen", content: "yes" },
    { name: "browsermode", content: "application" },
    { name: "nightmode", content: "enable/disable" },
    { name: "layoutmode", content: "fitscreen/standard" },
    { name: "imagemode", content: "force" },
    { name: "screen-orientation", content: "portrait" },
    { name: "x5-orientation", content: "portrait" },
    { name: "browsermode", content: "application" },
    { name: "x5-page-mode", content: "app" },
    { name: "msapplication-navbutton-color", content: "#000000" },
    { name: "apple-mobile-web-app-status-bar-style", content: "#000000" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-touch-fullscreen", content: "yes" },
    { name: "apple-mobile-web-app-title", content: "Positivus" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "HandheldFriendly", content: "true" },
    { name: "MobileOptimized", content: "320" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "format-detection", content: "telephone=no" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile" },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
</script>
