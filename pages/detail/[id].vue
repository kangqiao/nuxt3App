<script setup lang="ts">
const route = useRoute();

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id);
</script>

<template>
  <p>{{ route.params.id }}</p>
</template>

<style scoped lang="scss">
p {
  // color: $linkColor;
  color: var(--link-color);
}
</style>
