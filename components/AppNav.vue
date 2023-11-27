<template>
  <nav class="pt-[30px] lg:pt-[60px] text-dark">
    <div class="container flex justify-between items-center">
      <NuxtLink href="/" aria-label="Nav Logo Home Page Link">
        <LogoNav class="max-w-[140px] md:max-w-none" />
      </NuxtLink>

      <div
        aria-label="menu button"
        class="text-dark text-3xl lg:hidden cursor-pointer"
        @click="isOpen = true"
      >
        <Icon icon="humbleicons:bars" />
      </div>

      <ul class="desktopNav hidden lg:flex gap-10 items-center">
        <li>
          <a>About us</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Use Cases</a>
        </li>
        <li>
          <a>Pricing</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <AppButton
            href="/"
            className="bg-transparent text-dark hover:bg-dark hover:text-white"
            >Request a Quote</AppButton
          >
        </li>
      </ul>
    </div>

    <div
      :class="`fixed top-0 left-0 w-full h-screen ${
        isOpen ? 'scale-y-100' : 'scale-y-0'
      } bottom-0 bg-dark text-white flex justify-center items-center`"
    >
      <div
        aria-label="menu close button"
        class="absolute top-[30px] right-[12%] -translate-x-[-12%] text-3xl text-white cursor-pointer"
        @click="isOpen = false"
      >
        <Icon icon="tabler:x" />
      </div>

      <ul class="flex gap-10 items-center flex-col">
        <li class="mb-12">
          <a href="/">
            <LogoFooter class="max-w-[180px] md:max-w-none" />
          </a>
        </li>
        <li>
          <a>About us</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Use Cases</a>
        </li>
        <li>
          <a>Pricing</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
        <li class="mt-4">
          <AppButton href="/" className="bg-white text-dark"
            >Request a Quote</AppButton
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import LogoNav from "./assets/LogoNav.vue";
import LogoFooter from "./assets/LogoFooter.vue";
import { Icon } from "@iconify/vue";
const isOpen = ref(false);
</script>

<style scoped lang="scss">
.desktopNav {
  a:not(.appBtn) {
    @apply hover:text-dark/70;
  }
}
</style>
