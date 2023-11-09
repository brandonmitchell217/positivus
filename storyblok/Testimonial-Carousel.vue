<template>
  <div
    v-editable="blok"
    class="container h-[625px] bg-dark text-white rounded-45xl p-[30px] pb-0 md:p-0 md:pt-[84px]"
  >
    <Swiper
      :slides-per-view="1.75"
      :mousewheel="true"
      :simulate-touch="true"
      :initial-slide="1"
      :loop="true"
      :centered-slides="true"
    >
      <SwiperSlide v-for="blok in blok.cards" :key="blok._uid">
        <StoryblokComponent :blok="blok" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

defineProps({ blok: Object });
</script>
