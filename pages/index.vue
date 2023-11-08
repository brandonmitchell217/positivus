<script setup>
import { Icon } from "@iconify/vue";
const story = await useAsyncStoryblok("home", {
  version: process.env.DEV_ENVIRONMENT == "development" ? "draft" : "published",
});
</script>

<template>
  <section class="pt-20 pb-8">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>
