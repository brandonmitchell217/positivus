<script setup>
const story = await useAsyncStoryblok("home", {
  version: process.env.DEV_ENVIRONMENT == "development" ? "draft" : "published",
});

if (story.value.status) {
  throw createError({
    statusCode: story.value.status,
    statusMessage: story.value.response,
  });
}
</script>

<template>
  <div class="pt-20 pb-8">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
