<template>
  <a v-if="href" :href="href" :class="`appBtn ${className}`">
    <slot></slot>
  </a>

  <button
    v-else
    :type="type"
    @click="clickEvent"
    :class="`appBtn ${className}`"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: "button",
  },
  clickEvent: {
    type: Function,
    default: null,
  },
  className: {
    type: String,
    default: null,
  },
});
</script>

<style scoped lang="scss">
.appBtn {
  @apply border border-dark py-5 px-8 rounded-xl.5 text-center transition-colors duration-300 ease-in-out;
}
</style>
