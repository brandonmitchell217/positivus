<template>
  <div v-editable="blok" class="mb-[60px] lg:mb-[140px]">
    <div
      v-if="isMobile"
      class="container md:px-[60px] md:py-16 rounded-[45px] md:bg-dark text-white flex justify-center gap-4 md:gap-0 md:justify-between items-center"
    >
      <StoryblokComponent
        v-for="blok in blok.flexbox"
        :key="blok._uid"
        :blok="blok"
      />
    </div>

    <div v-if="!isMobile" class="pl-8 max-w-[200%]">
      <Swiper :slides-per-view="1.5" :mousewheel="true" :simulate-touch="true">
        <SwiperSlide v-for="blok in blok.flexbox" :key="blok._uid">
          <StoryblokComponent :blok="blok" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { useMediaQuery } from "@vueuse/core";
defineProps({ blok: Object });
const isMobile = useMediaQuery("(min-width: 640px)");
</script>

<style scoped lang="scss">
.caseStudy {
  position: relative;

  @media (min-width: 768px) {
    &:not(:last-of-type)::before {
      content: "";
      position: absolute;
      right: -23%;
      top: 0;
      transform: translateX(23%);
      height: 100%;
      width: 2px;
      border-radius: 20px;
      background-color: #ffffff;
    }
  }
}
</style>
