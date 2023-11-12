<template>
  <div v-editable="blok" class="testimonial relative flex flex-col gap-2">
    <div
      class="testimonial-bubble relative p-9 flex justify-center items-center"
    >
      <TestimonialBubble
        class="absolute top-0 left-0 -z-[1] w-full h-full hidden md:block"
      />
      <p
        class="text-base relative leading-normal h-full overflow-y-scroll lg:overflow-y-visible"
      >
        {{ blok.testimonial }}
      </p>
    </div>

    <div class="w-[88%] flex flex-col self-end">
      <span class="font-medium text-lg lg:text-xl text-green">{{
        blok.name
      }}</span>
      <span class="text-base lg:text-lg">{{ blok.info }}</span>
    </div>
  </div>
</template>

<script setup>
import TestimonialBubble from "~/components/assets/TestimonialBubble.vue";
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
.testimonial {
  &-bubble {
    border: 1px solid #b9ff66;
    border-radius: 45px;

    @media (min-width: 768px) {
      border: none;
      max-width: none;
      height: 266px;
      width: 606px;
    }
  }
}
</style>
