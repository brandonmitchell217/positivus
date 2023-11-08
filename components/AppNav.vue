<!-- TODO: Button component -->
<script setup>
const isOpen = ref(false);
</script>

<template>
  <nav class="pt-[60px] text-dark">
    <div class="container flex justify-between items-center">
      <a href="/">
        <img
          src="/logo_nav.svg"
          alt="logo for positivus"
          class="max-w-[140px] md:max-w-none block"
        />
      </a>

      <div
        aria-label="menu button"
        class="text-dark md:hidden cursor-pointer"
        @click="isOpen = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"
          />
        </svg>
      </div>

      <ul class="hidden lg:flex gap-10 items-center">
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
          <a
            class="bg-transparent border border-dark text-dark py-5 px-8 rounded-[14px]"
            >Request a Quote</a
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
        class="absolute top-[60px] right-[8%] -translate-x-[-8%] text-white cursor-pointer"
        @click="isOpen = false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
          />
        </svg>
      </div>
      <ul class="flex gap-10 items-center flex-col">
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
          <a class="bg-white text-dark py-5 px-8 rounded-[14px]"
            >Request a Quote</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
