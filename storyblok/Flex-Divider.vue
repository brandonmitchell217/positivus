<template>
  <div v-editable="blok" class="pl-4 sm:pl-0">
    <ClientOnly>
      <div
        v-if="isDesktop"
        class="container hidden md:flex md:px-[60px] md:py-16 rounded-[45px] md:bg-dark text-white justify-center gap-4 md:gap-0 md:justify-between items-center"
      >
        <StoryblokComponent
          v-for="blok in blok.flexbox"
          :key="blok._uid"
          :blok="blok"
        />
      </div>


    <ClientOnly>
      <div v-if="!isMobile">
        <Swiper
          :slides-per-view="1.15"
          :space-between="10"
          :mousewheel="true"
          :simulate-touch="true"
        >
          <SwiperSlide v-for="blok in blok.flexbox" :key="blok._uid">
            <StoryblokComponent :blok="blok" />
          </SwiperSlide>
        </Swiper>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { useMediaQuery } from "@vueuse/core";
defineProps({ blok: Object });
const isDesktop = useMediaQuery("(min-width: 1024px)");
</script>
