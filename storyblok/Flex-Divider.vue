<template>
  <div v-editable="blok">
    <div
      class="container px-[60px] py-16 rounded-[45px] bg-dark text-white flex justify-between items-center"
    >
      <StoryblokComponent
        v-for="blok in blok.flexbox"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
.caseStudy {
  position: relative;

  &:nth-of-type(1)::before,
  &:nth-of-type(2)::before {
    content: "";
    position: absolute;
    right: -23%;
    top: 0;
    transform: translateX(23%);
    height: 100%;
    width: 2px;
    border-radius: 20px;
    background-color: #ffffff;
  }
}
</style>
