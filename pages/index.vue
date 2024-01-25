<template>
  <div class="flex items-center flex-col gap-2">
    <!-- 处理请求错误 -->
    <div v-if="error" class="text-red-300">{{ error.message }}</div>
    <!-- 处理加载状态 -->
    <div v-if="pending">加载中...</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id">
        <NuxtLink class="text-lg" :to="`/detail/${post.id}`"
          >{{ post?.title ?? post.id }}
        </NuxtLink>
        <p class="text-slate-500">发布于:{{ post.date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// const posts = await $fetch("/api/posts");
const { data: posts, pending, error } = await useFetch("/api/posts");
useHead({
  title: "文章列表",
  meta: [{ name: "description", content: "我的描述" }],
});
</script>
