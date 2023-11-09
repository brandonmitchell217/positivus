<template>
  <div v-editable="blok" class="testimonial flex flex-col gap-2">
    <div
      class="testimonial-bubble p-9 pb-[57px] md:px-[52px] md:pt-12 md:pb-[80px] flex justify-center items-center"
    >
      <p class="text-lg leading-tight">{{ blok.testimonial }}</p>
    </div>

    <div class="w-[88%] flex flex-col self-end">
      <span class="font-medium text-lg md:text-xl text-green">{{
        blok.name
      }}</span>
      <span class="text-base md:text-lg">{{ blok.info }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
.testimonial {
  &-bubble {
    width: 100%;
    height: 326px;
    background-image: url("/bubble_mobile.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
      height: 266px;
      width: 606px;
      background-image: url("/bubble.png");
    }
  }
}
</style>
