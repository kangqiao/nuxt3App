<template>
  <div class="py-4">
    Count: {{ count }}
    <div class="mt-2">
      <NButton @click="count++">+</NButton>
      <NButton @click="count--">-</NButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from "~/store/counter";
// 全局状态
const store = useCounter();
const { value: count } = storeToRefs(store);
</script>
