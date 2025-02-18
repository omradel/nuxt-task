<template>
  <div
    class="course-card cursor-pointer h-[500px] w-full rounded-[12px]"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="courese-content p-4 absolute bottom-1 w-full">
      <div class="flex justify-between items-center">
        <div>
          <h4 class="text-white font-bold text-2xl">
            <slot name="course-title"></slot>
          </h4>

          <p class="text-sm text-[#EDEEF0] leading-6">
            <slot name="course-desc"></slot>
          </p>
        </div>

        <Button
          :button_type="'default'"
          :icon="true"
          :text="false"
          :button_color="counter_color == 'red' ? '#D93749' : '#EDEEF0'"
          :round_rate="'rounded-circle'"
        >
          <template #button-icon>
            <img
              v-if="counter_color == 'white'"
              src="@/assets/images/course-icon.svg"
              width="20"
              height="20"
              alt="course-icon"
            />

            <img
              v-if="counter_color == 'red'"
              src="@/assets/images/course-icon2.svg"
              width="20"
              height="20"
              alt="course-icon"
            />
          </template>
        </Button>
      </div>

      <div
        :class="{
          'bg-[#F6F7F8]': counter_color == 'white',
          'bg-primary': counter_color == 'red',
        }"
        class="course-time mt-3 rounded-[12px] p-3"
      >
        <div class="flex justify-between items-center">
          <div class="flex gap-x-2 items-center">
            <img
              v-if="counter_color == 'white'"
              src="@/assets/images/time.svg"
              width="20"
              height="20"
              alt=""
            />

            <img
              v-if="counter_color == 'red'"
              src="@/assets/images/time2.svg"
              width="20"
              height="20"
              alt=""
            />
            <span class="text-md">Course Starts After</span>
          </div>

          <CourseCounter />
        </div>

        <div class="progress mt-3">
          <v-progress-linear
            :color="counter_color == 'red' ? '#EDEEF0' : '#282828'"
            :model-value="progress_rate"
            height="7"
            rounded
          ></v-progress-linear>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },

  progress_rate: {
    type: Number,
    required: true,
  },

  counter_color: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.course-card {
  background-size: cover;
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5438988095238095) 0%,
      rgba(0, 0, 0, 0.18255427170868344) 100%
    );
    position: absolute;
    border-radius: 12px;
  }
}
</style>
