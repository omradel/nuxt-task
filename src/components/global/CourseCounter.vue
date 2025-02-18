<template>
  <div class="product_counter flex gap-x-1 items-center">
    <div
      class="days_unit w-[30px] h-[30px] leading-[18px] text-center rounded-full"
    >
      <span class="block font-bold text-[20px]">{{ days }}</span>
      <span class="text-[14px]">D</span>
    </div>

    <div
      class="hours_unit w-[30px] h-[30px] leading-[18px] text-center rounded-full"
    >
      <span class="block font-bold text-[20px]">{{ hours }}</span>
      <span class="text-[14px]">H</span>
    </div>

    <div
      class="minutes_unit w-[30px] h-[30px] leading-[18px] text-center rounded-full"
    >
      <span class="block font-bold text-[20px]">{{ minutes }}</span>
      <span class="text-[14px] font-thin">M</span>
    </div>

    <div
      class="seconds_unit w-[30px] h-[30px] leading-[18px] text-center rounded-full"
    >
      <span class="block font-bold text-[20px]">{{ seconds }}</span>
      <span class="text-[14px]">S</span>
    </div>
  </div>
</template>

<script setup>
const days = ref(35);
const hours = ref(23);
const minutes = ref(59);
const seconds = ref(5);

// const props = defineProps({
//   color: {
//     type: String,
//     required: true,
//   },
// });

const minutesChange = () => {
  minutes.value--;
  seconds.value = 60;
};

const houresChange = () => {
  hours.value--;
  minutes.value = 60;
};

const DaysChange = () => {
  days.value--;
  hours.value = 24;
};

onMounted(() => {
  setInterval(() => {
    seconds.value--;

    if (seconds.value == 0) {
      minutesChange();
    }

    if (minutes.value == 0) {
      houresChange();
    }

    if (hours.value == 0) {
      DaysChange();
    }
  }, 1000);
});
</script>
