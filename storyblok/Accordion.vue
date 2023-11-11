<template>
  <div
    v-editable="blok"
    :class="`w-full accordionBox p-[30px] lg:py-[41px] lg:px-[60px] border border-dark rounded-[45px] cursor-pointer group transition-all duration-300 ease-in-out ${
      isOpen ? 'bg-green' : 'bg-grey'
    }`"
    @click="isOpen = !isOpen"
  >
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-7 lg:gap-6">
        <span class="text-3xl lg:text-6xl">0{{ blok.number }}</span>
        <h5 class="text-lg lg:text-3xl">{{ blok.title }}</h5>
      </div>

      <div>
        <svg
          v-if="!isOpen"
          width="58"
          height="59"
          viewBox="0 0 58 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
          <path
            d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z"
            fill="#191A23"
          />
        </svg>

        <svg
          v-if="isOpen"
          width="58"
          height="59"
          viewBox="0 0 58 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="29"
            cy="29.5"
            r="28.5"
            fill="#F3F3F3"
            stroke="#191A23"
            class="group-hover:fill-transparent transition-all duration-250 ease-in-out"
          />
          <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
        </svg>
      </div>
    </div>

    <div v-if="isOpen" class="mt-[30px] border-t border-dark">
      <p class="text-lg pt-[30px]">{{ blok.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });

const isOpen = ref(false);
</script>

<style scoped lang="scss">
.accordionBox {
  box-shadow: 0 5px 0 #191a23;

  svg {
    height: 30px;
    width: 30px;
    @media (min-width: 768px) {
      height: auto;
      width: auto;
    }
  }
}
</style>
