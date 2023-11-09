<!-- TODO: Button component -->
<template>
  <div v-editable="blok">
    <div
      class="mt-24 container bg-grey rounded-[45px] flex flex-col lg:flex-row justify-between items-center"
    >
      <div class="max-w-[500px] m-[60px] space-y-6">
        <h4 class="text-3xl">{{ blok.title }}</h4>
        <p>{{ blok.description }}</p>
        <div>
          <a
            v-bind:href="blok.cta_link.url || '/'"
            class="bg-dark text-white py-5 px-8 rounded-[14px] text-center block lg:inline-block"
            >{{ blok.cta_text }}</a
          >
        </div>
      </div>

      <div class="flex-1 h-[394px] w-1/2 relative hidden lg:block">
        <img
          v-bind:src="blok.image.filename"
          v-bind:alt="blok.image.alt"
          class="absolute -top-3 left-0 z-10 w-full h-[106%]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
