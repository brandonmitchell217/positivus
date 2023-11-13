<template>
  <div
    v-editable="blok"
    class="caseStudy bg-dark text-white rounded-[45px] py-8 px-5 xs:px-[40px] lg:p-0 space-y-5 h-[295px] sm:h-[252px] w-full xs:w-[350px] lg:h-auto lg:w-auto lg:max-w-[286px]"
  >
    <p>{{ blok.text }}</p>
    <a class="text-green flex gap-2 items-center group">
      <span class="group-hover:underline">Learn more</span>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="md:group-hover:rotate-[29deg] duration-300 transition-all ease-in-out"
      >
        <path
          d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
          fill="#B9FF66"
        />
      </svg>
    </a>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
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

      @media (min-width: 1536px) {
        right: -45%;
        transform: translateX(45%);
      }
    }
  }
}
</style>
