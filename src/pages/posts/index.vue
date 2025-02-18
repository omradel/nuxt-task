<template>
  <div class="all-posts p-2xl">
    <div class="title flex justify-between items-center">
      <h1 class="text-xl font-bold">All Posts</h1>
      <nuxt-link to="/" class="text-sm text-primary underline cursor-pointer"
        >Return Home</nuxt-link
      >
    </div>

    <div
      class="image flex justify-center mt-3xl"
      v-if="!items.length && !isLoading"
    >
      <div>
        <img src="../../assets/images/no-data.jpg" width="150" alt="" />

        <span class="text-center">No posts to load !!</span>
      </div>
    </div>

    <client-only>
      <v-infinite-scroll
        class="overflow-hidden mt-10"
        :items="items"
        :onLoad="load"
      >
        <div class="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-1">
          <template v-for="item in items" :key="item?.id">
            <div class="p-3 border rounded-lg">
              <h2 class="font-bold text-2xl pb-3">{{ item?.title }}</h2>
              <p class="text-sm">{{ item?.description }}</p>
            </div>
          </template>
        </div>
      </v-infinite-scroll>
    </client-only>
  </div>
</template>

<script setup>
import { usePosts } from "~/compasables/all-posts";

useSeoMeta({
  title: "nuxt task",
  ogTitle: "nuxt task",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

definePageMeta({
  layout: false,
});

const { items, load, isLoading } = usePosts();
</script>

<style scoped></style>
