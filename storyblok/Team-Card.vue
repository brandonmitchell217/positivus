<template>
  <div
    v-editable="blok"
    class="teamCard max-w-full md:max-w-[390px] h-full p-10 rounded-45xl border border-dark"
  >
    <div class="space-y-7">
      <div class="relative flex items-end gap-3">
        <NuxtImg
          v-bind:src="blok.image.filename"
          v-bind:alt="blok.image.alt"
          class="max-w-full block"
          width="103"
          height="103"
        />
        <div>
          <h5 class="text-xl">{{ blok.name }}</h5>
          <p class="text-lg">{{ blok.position }}</p>
        </div>

        <a class="absolute -top-4 -right-4 sm:top-0 sm:right-0">
          <LinkedIn />
        </a>
      </div>

      <div class="border-t border-dark pt-7">
        <p class="text-lg">{{ blok.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import LinkedIn from "~/components/assets/LinkedIn.vue";
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
.teamCard {
  box-shadow: 0 5px 0 #191a23;
}
</style>
