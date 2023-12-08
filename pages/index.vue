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

const isLoading = ref(true);

// timer for a loading screen that lasts 3.5 seconds
// setTimeout(() => {
//   isLoading.value = false;
// }, 2000);
</script>

<template>
  <Loading v-if="isLoading" />
  <div class="pt-20 pb-8">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
