<template>
  <div v-editable="blok" class="flex items-center">
    <div v-for="partner in blok.partners" :key="partner.id">
      <img
        v-bind:src="partner.filename"
        v-bind:alt="partner.alt"
        class="max-w-full block"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
