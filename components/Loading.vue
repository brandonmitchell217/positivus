<template>
  <div
    class="loading absolute top-0 left-0 h-screen w-full bg-green flex flex-col space-y-32 justify-center items-center"
  >
    <div>
      <svg
        width="151"
        height="150"
        viewBox="0 0 151 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.337646 0.00946808L75.3794 21.9879L75.1491 21.7576L149.891 0.23021L128.371 74.9485L128.715 75.2951L128.504 75.5043L150.295 150.009L75.6824 127.904L0.744078 149.589L22.3146 75.046L0.337646 0.00946808Z"
          class="fill-green"
        />
      </svg>
      <svg
        width="151"
        height="150"
        viewBox="0 0 151 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 above"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.337646 0.00946808L75.3794 21.9879L75.1491 21.7576L149.891 0.23021L128.371 74.9485L128.715 75.2951L128.504 75.5043L150.295 150.009L75.6824 127.904L0.744078 149.589L22.3146 75.046L0.337646 0.00946808Z"
        />
      </svg>
    </div>

    <span class="text text-[6vw]">Positivus</span>
  </div>
</template>

<script setup>
import { gsap } from "gsap";

onMounted(() => {
  gsap.set(".above", { fill: "transparent" });
  gsap.set(".text", { autoAlpha: 0, opacity: 0 });
  gsap.fromTo(
    ".above path",
    { fill: "transparent" },
    {
      fill: "black",
      transformOrigin: "bottom",
      fillRule: "evenodd",
      clipRule: "evenodd",
      duration: 1.95,
    }
  );
  gsap.to(".above", { duration: 1, delay: 1.95, rotate: 180 });
  gsap.fromTo(
    ".text",
    { autoAlpha: 0, opacity: 0 },
    { autoAlpha: 1, opacity: 1, duration: 1, delay: 2.95, ease: "power2.out" }
  );
  gsap.to(".loading", {
    duration: 0.75,
    delay: 3.95,
    scaleY: 0,
    transformOrigin: "top",
    ease: "power2.out",
  });
});
</script>

<style scoped lang="scss">
// svg {
//   path {
//     animation: bgFill 1.95s linear;

//     @keyframes bgFill {
//       0% {
//         fill: transparent;
//       }
//       100% {
//         fill: black;
//       }
//     }
//   }
// }
</style>
