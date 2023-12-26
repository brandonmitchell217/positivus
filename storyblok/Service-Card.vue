<template v-editable="blok">
  <ClientOnly>
    <a
      v-if="!isDesktop"
      :href="blok.link || '/'"
      :class="`serviceCard relative max-w-[600px] w-full p-[50px] rounded-[45px] border border-dark ${
        blok.background == 'grey'
          ? 'bg-grey'
          : blok.background == 'green'
          ? 'bg-green'
          : 'bg-dark'
      }`"
    >
      <div class="flex space-x-16 xl:items-center">
        <div class="space-y-24">
          <h3 class="text-2xl lg:text-3xl leading-relaxed max-w-[220px]">
            <span
              :class="`px-1.5 inline-block rounded-md ${
                blok.title_color == 'grey'
                  ? 'bg-grey'
                  : blok.title_color == 'dark'
                  ? 'bg-dark'
                  : 'bg-green'
              }`"
              >{{ blok.title_line1 }}</span
            ><br />
            <span
              :class="`px-1.5 inline-block rounded-md ${
                blok.title_color == 'grey'
                  ? 'bg-grey'
                  : blok.title_color == 'dark'
                  ? 'bg-dark'
                  : 'bg-green'
              }`"
              >{{ blok.title_line2 }}</span
            >
          </h3>
          <a
            :class="`w-fit p-4 md:p-0 text-xl leading-7 flex items-center space-x-3.5 group ${
              blok.background == 'dark' ? 'text-white' : 'text-dark'
            }`"
          >
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="md:group-hover:rotate-[30deg] transition-all duration-300 ease-in-out"
            >
              <circle
                cx="20.5"
                cy="20.5"
                r="20.5"
                :fill="blok.background == 'dark' ? '#F3F3F3' : '#191A23'"
                class="md:group-hover:fill-none md:group-hover:stroke-current transition-all duration-300 ease-in-out"
              />
              <path
                d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                :fill="blok.background == 'dark' ? '#191A23' : '#B9FF66'"
                class="md:group-hover:fill-current transition-all duration-300 ease-in-out"
              />
            </svg>
            <span class="hidden md:inline group-hover:underline"
              >Learn More</span
            >
          </a>
        </div>

        <div
          class="absolute bottom-6 right-6 scale-90 xl:relative xl:bottom-0 xl:right-0 xl:flex-1"
        >
          <NuxtImg
            v-bind:src="blok.image.filename"
            v-bind:alt="blok.image.alt"
            fit="contain"
            width="260"
            height="215"
          />
        </div>
      </div>
    </a>
    <div
      v-if="isDesktop"
      :class="`serviceCard relative h-[343px] max-w-[600px] w-full p-[50px] rounded-[45px] border border-dark ${
        blok.background == 'grey'
          ? 'bg-grey'
          : blok.background == 'green'
          ? 'bg-green'
          : 'bg-dark'
      }`"
    >
      <div class="flex space-x-16 xl:items-center">
        <div class="space-y-24">
          <h3 class="text-2xl lg:text-3xl leading-relaxed max-w-[220px]">
            <span
              :class="`px-1.5 inline-block rounded-md ${
                blok.title_color == 'grey'
                  ? 'bg-grey'
                  : blok.title_color == 'dark'
                  ? 'bg-dark'
                  : 'bg-green'
              }`"
              >{{ blok.title_line1 }}</span
            ><br />
            <span
              :class="`px-1.5 inline-block rounded-md ${
                blok.title_color == 'grey'
                  ? 'bg-grey'
                  : blok.title_color == 'dark'
                  ? 'bg-dark'
                  : 'bg-green'
              }`"
              >{{ blok.title_line2 }}</span
            >
          </h3>
          <a
            :href="blok.link || '/'"
            :class="`w-fit p-4 md:p-0 text-xl leading-7 flex items-center space-x-3.5 group ${
              blok.background == 'dark' ? 'text-white' : 'text-dark'
            }`"
          >
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="group-hover:rotate-[30deg] transition-all duration-300 ease-in-out"
            >
              <circle
                cx="20.5"
                cy="20.5"
                r="20.5"
                :fill="blok.background == 'dark' ? '#F3F3F3' : '#191A23'"
                class="stroke-1 group-hover:fill-none group-hover:stroke-current transition-all duration-300 ease-in-out"
              />
              <path
                d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                :fill="blok.background == 'dark' ? '#191A23' : '#B9FF66'"
                class="group-hover:fill-current transition-all duration-300 ease-in-out"
              />
            </svg>
            <span class="hidden md:inline group-hover:underline"
              >Learn More</span
            >
          </a>
        </div>

        <div
          class="absolute left-[60%] top-1/2 -translate-y-1/2 -translate-x-[60%]"
        >
          <NuxtImg
            v-bind:src="blok.image.filename"
            v-bind:alt="blok.image.alt"
            fit="fill"
            class="scale-[2.25]"
          />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { useMediaQuery } from "@vueuse/core";
const isDesktop = useMediaQuery("(min-width: 768px)");
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
.serviceCard {
  box-shadow: 0 5px 0 #191a23;
}
</style>
