<template>
  <section
    aria-label="avilable courses section"
    class="courses-section w-full max-w-screen-xl mx-auto px-6 pt-5xl pb-5xl"
  >
    <SectionsTitle>
      <template #sub-title>Calendar Courses</template>
      <template #title
        >Stay Updated on Upcoming <br />
        Courses and Events
      </template>
      <template #desc
        >Advance your career with leading finance and accounting certifications
        available online and offline. Flexible Learning Options for Every Career
        Stage.
      </template>
    </SectionsTitle>

    <Carousel class="mt-10" v-bind="settings" :breakpoints="breakpoints2">
      <Slide v-for="(course, index) in courses" :key="course.id" class="p-3">
        <CourseCard
          :image="course.img"
          :progress_rate="course.rate"
          :counter_color="course.counter_color"
        >
          <template #course-title>{{ course.title }}</template>
          <template #course-desc>{{ course.desc }}</template>
        </CourseCard>
      </Slide>

      <template #addons>
        <pagination />
      </template>
    </Carousel>
  </section>
</template>

<script setup>
import Image from "../../assets/images/course1.jpg";
import Image2 from "../../assets/images/course2.jpg";
import Image3 from "../../assets/images/course3.jpg";
import { useCarousel } from "../../utils/carousel.ts";
const { Pagination, breakpoints2, Carousel, settings, Slide } = useCarousel();

const courses = ref([
  {
    id: 1,
    title: "Accounting",
    desc: "This course will start on the 2nd month of 2025",
    img: Image,
    rate: 100,
    counter_color: "white",
  },
  {
    id: 2,
    title: "Finance",
    desc: "This course will start on the 2nd month of 2025",
    img: Image2,
    rate: 70,
    counter_color: "red",
  },
  {
    id: 3,
    title: "FinTech",
    desc: "This course will start on the 2nd month of 2025",
    img: Image3,
    rate: 30,
    counter_color: "white",
  },
  {
    id: 4,
    title: "FinTech",
    desc: "This course will start on the 2nd month of 2025",
    img: Image3,
    rate: 30,
    counter_color: "white",
  },
]);
</script>
