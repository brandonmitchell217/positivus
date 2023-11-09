<template>
  <div
    v-editable="blok"
    class="container relative h-[554px] lg:h-[625px] bg-dark text-white rounded-45xl p-[30px] pb-0 md:p-0 md:pt-[84px]"
  >
    <Swiper
      :modules="[Pagination]"
      :slides-per-view="1"
      :mousewheel="true"
      :simulate-touch="true"
      :loop="true"
      :centered-slides="true"
      :navigation="{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
      }"
      :breakpoints="{
        768: {
          slidesPerView: 1.75,
        },
        1024: {
          slidesPerView: 1.25,
        },
        1280: {
          slidesPerView: 1.75,
        },
      }"
      class="h-full"
    >
      <SwiperSlide v-for="blok in blok.cards" :key="blok._uid">
        <StoryblokComponent :blok="blok" />
      </SwiperSlide>

      <SwiperControls />
    </Swiper>
  </div>
</template>

<script setup>
import { Navigation, Pagination } from "swiper/modules";
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
.swiper-slide {
  @apply flex justify-center;
}
</style>
