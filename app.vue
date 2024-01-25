<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
import "~/assets/global.scss";
useHead({
  titleTemplate: (s) => {
    return s ? `${s} - 桩长的技术空间` : "桩长的技术空间";
  },
});
</script>
