<template>
  <AsyncHomeBanner />
  <AsyncHomeWhyUs />
  <AsyncHomeHowWeWork />
  <AsyncHomeCourses />
</template>

<script setup>
import { defineAsyncComponent, shallowRef } from "vue";

const AsyncHomeBanner = shallowRef(
  defineAsyncComponent(() => import("../components/home/Banner.vue"))
);
const AsyncHomeWhyUs = shallowRef(
  defineAsyncComponent(() => import("../components/home/WhyUs.vue"))
);
const AsyncHomeHowWeWork = shallowRef(
  defineAsyncComponent(() => import("../components/home/HowWeWork.vue"))
);
const AsyncHomeCourses = shallowRef(
  defineAsyncComponent(() => import("../components/home/Courses.vue"))
);

useSeoMeta({
  title: "nuxt task",
  ogTitle: "nuxt task",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
