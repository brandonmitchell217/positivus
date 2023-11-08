<template>
  <div
    v-editable="blok"
    class="container flex flex-col md:flex-row justify-center md:justify-stretch items-center"
  >
    <div class="flex-1 space-y-9">
      <div class="lg:max-w-[80%] space-y-6 md:space-y-0">
        <h1 class="text-5xl lg:text-6xl leading-tight">
          {{ blok.title }}
        </h1>

        <p class="text-lg lg:text-xl pt-6 pb-8 md:pr-3 hidden md:block">
          {{ blok.description }}
        </p>

        <a
          v-bind:href="blok.cta_link.url || '/'"
          class="bg-dark text-white py-5 px-8 rounded-[14px] hidden md:inline-block"
          >{{ blok.cta_text }}</a
        >

        <img
          v-bind:src="blok.image.filename"
          v-bind:alt="blok.image.alt"
          class="object-cover w-full h-full md:hidden"
        />
      </div>
    </div>
    <div class="flex-1">
      <img
        v-bind:src="blok.image.filename"
        v-bind:alt="blok.image.alt"
        class="object-cover w-full h-full hidden md:block"
      />
      <p class="text-lg lg:text-xl py-8 md:pr-3 md:hidden">
        {{ blok.description }}
      </p>
      <a
        v-bind:href="blok.cta_link.url || '/'"
        class="bg-dark text-white py-5 px-8 rounded-[14px] block text-center md:hidden"
        >{{ blok.cta_text }}</a
      >
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
