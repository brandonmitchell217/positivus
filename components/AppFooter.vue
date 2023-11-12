<template>
  <footer class="mt-28">
    <div
      class="lg:container pt-[55px] px-[30px] lg:px-[60px] bg-dark text-white text-lg rounded-none lg:rounded-tl-45xl lg:rounded-tr-45xl text-center lg:text-left"
    >
      <!-- Top -->
      <div
        class="flex flex-col lg:flex-row justify-between items-center space-y-9 lg:space-y-0"
      >
        <a href="/">
          <LogoFooter />
        </a>

        <ul
          class="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-10 underline"
        >
          <li>
            <a>About Us</a>
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
        </ul>

        <ul
          class="hidden lg:flex items-center space-x-5 lg:text-2xl xl:text-3xl"
        >
          <li>
            <a>
              <Icon icon="mdi:linkedin" />
            </a>
          </li>
          <li>
            <a>
              <Icon icon="ic:baseline-facebook" />
            </a>
          </li>
          <li>
            <a>
              <Icon icon="mdi:twitter" />
            </a>
          </li>
        </ul>
      </div>
      <!-- Middle -->
      <div
        class="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center my-9 lg:mt-[66px] lg:mb-[50px]"
      >
        <div class="text-lg space-y-6 lg:space-y-2 flex-1">
          <h6
            class="bg-green rounded-md text-dark text-xl leading-none px-0.5 inline-block"
          >
            Contact Us:
          </h6>
          <div class="space-y-1.5">
            <a class="block">Email: info@positivus.com</a>
            <a class="block">Phone: 555-567-8901</a>
            <a class="block"
              >Address: 1234 Main St<br />Moonstone City, Stardust State
              12345</a
            >
          </div>
        </div>

        <div
          class="bg-darkAlt flex-1 rounded-xl.5 py-[58px] px-5 lg:px-10 w-full lg:w-auto"
        >
          <form class="flex flex-col lg:flex-row items-center gap-5">
            <input
              type="email"
              id="footerEmail"
              name="footerEmail"
              placeholder="Email"
              class="w-full lg:w-auto flex-1 rounded-xl.5 border py-4 px-3 text-base bg-transparent leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
            />
            <AppButton
              type="submit"
              class="w-full lg:w-auto bg-green text-dark hover:bg-dark hover:text-green"
              >Subscribe to news</AppButton
            >
          </form>
        </div>

        <ul class="flex lg:hidden items-center space-x-5 text-3xl">
          <li>
            <a>
              <Icon icon="mdi:linkedin" />
            </a>
          </li>
          <li>
            <a>
              <Icon icon="ic:baseline-facebook" />
            </a>
          </li>
          <li>
            <a>
              <Icon icon="mdi:twitter" />
            </a>
          </li>
        </ul>
      </div>
      <!-- Bottom -->
      <div
        class="py-[50px] border-t border-white flex flex-col lg:flex-row items-center gap-3.5 lg:gap-10"
      >
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a class="underline">Privacy Policy</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import LogoFooter from "./assets/LogoFooter.vue";
</script>
