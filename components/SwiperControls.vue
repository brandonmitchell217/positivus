<script setup lang="ts">
import "swiper/css/pagination";
const swiper = useSwiper();
</script>

<template>
  <div
    class="absolute z-40 bottom-[60px] left-1/2 -translate-x-1/2 w-[45%] flex justify-between items-center"
  >
    <button class="swiper-prev" @click="swiper.slidePrev()">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3333 4.66663L6.66667 8.00001L11.3333 11.3333"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div class="bg-yellow-200">
      <div class="swiper-pagination space-x-4"></div>
    </div>
    <button class="swiper-next" @click="swiper.slideNext()">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.66663 4.66663L9.33329 8.00001L4.66663 11.3333"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>
<!-- TODO: Figure out how to either make this look better with background-image or use svg -->
<style lang="scss">
.swiper-pagination {
  max-width: 300px;
  left: 50% !important;
  bottom: 0 !important;
  transform: translateX(-50%);

  .swiper-pagination-bullet {
    height: 14px;
    width: 14px;
    background-color: transparent;
    background-image: url("/carousel_star.png");
  }
  .swiper-pagination-bullet-active {
    background-image: url("/carousel_star-active.png");
    transform: scale(1.35);
  }
}
</style>
