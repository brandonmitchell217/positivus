<template>
  <section
    v-editable="blok"
    class="container flex flex-col md:flex-row justify-center md:justify-stretch"
  >
    <div class="flex-1 space-y-9">
      <div class="lg:max-w-[80%] -space-y-16 md:space-y-0">
        <h1 class="text-5xl lg:text-6xl leading-tight">
          {{ blok.title }}
        </h1>

        <p class="text-lg lg:text-xl pt-6 pb-8 md:pr-3 hidden md:block">
          {{ blok.description }}
        </p>

        <AppButton
          v-bind:href="blok.cta_link.url || '/'"
          className="bg-dark text-white hidden md:inline-block hover:bg-transparent hover:text-dark"
          >{{ blok.cta_text }}</AppButton
        >

        <!-- <img
          v-bind:src="blok.image.filename"
          v-bind:alt="blok.image.alt"
          class="object-cover w-full h-full md:hidden"
        /> -->
        <LandingImg class="max-w-full md:hidden" />
      </div>
    </div>
    <div class="flex-1">
      <!-- <img
        v-bind:src="blok.image.filename"
        v-bind:alt="blok.image.alt"
        class="object-cover w-full h-full hidden md:block"
      /> -->
      <LandingImg class="max-w-full hidden md:block" />
      <p
        class="text-lg lg:text-xl -mt-8 xs:mt-0 pb-8 sm:py-8 md:pr-3 md:hidden"
      >
        {{ blok.description }}
      </p>

      <AppButton
        v-bind:href="blok.cta_link.url || '/'"
        className="bg-dark text-white text-center block md:hidden hover:bg-transparent hover:text-dark"
        >{{ blok.cta_text }}</AppButton
      >
    </div>
  </section>
</template>

<script setup>
import LandingImg from "~/components/assets/LandingImg.vue";

defineProps({ blok: Object });
</script>
