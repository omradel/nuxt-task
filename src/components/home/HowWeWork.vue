<template>
  <section
    aria-label="How des we eork section"
    class="w-full max-w-screen-xl mx-auto px-6 pt-5xl"
  >
    <SectionsTitle>
      <template #sub-title>How dose we work?</template>
      <template #title>How dose we work? </template>
      <template #desc
        >Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </template>
    </SectionsTitle>

    <div
      class="work-steps grid gap-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-10 relative"
    >
      <div v-for="(step, index) in steps" :key="step.id">
        <div
          class="card xl:border-0 lg:border-0 md:border-[1px] border-[1px] border-gray-300 p-3 rounded-lg"
        >
          <div
            class="p-1"
            :class="{
              'step-number-cover-red': step.color == 'red',
              'step-number-cover-black': step.color == 'black',
            }"
          >
            <div
              class="step-number-red flex justify-center p-3"
              :class="{
                'step-number-red': step.color == 'red',
                'step-number-black': step.color == 'black',
              }"
            >
              <span class="text-[25px] font-medium text-white">{{
                step.number
              }}</span>
            </div>
          </div>

          <div class="card-body mt-4 text-center">
            <h4 class="font-bold text-[20px]">{{ step.title }}</h4>

            <p class="text-sm text-[#555555] leading-[26px]">
              {{ step.desc }}
            </p>
          </div>
        </div>

        <div
          class="arrow absolute top-0 translate-x-[-5rem] xl:block lg:hidden md:hidden hidden"
        >
          <img
            v-if="index != 0 && step.color == 'red'"
            src="../../assets/images/big-arrow-red.svg"
            width="100"
            loading="lazy"
            alt=""
          />

          <img
            v-if="index != 0 && step.color == 'black'"
            src="../../assets/images/big-arrow-black.svg"
            width="100"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = ref([
  {
    id: 1,
    number: "01",
    color: "red",
    title: "Dummy Text",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    number: "02",
    color: "black",
    title: "Dummy Text",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    number: "03",
    color: "red",
    title: "Dummy Text",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    number: "04",
    color: "black",
    title: "Dummy Text",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
]);
</script>

<style scoped>
.step-number-cover-red {
  background: url(../../assets/images/red-line.svg) no-repeat;
  background-size: contain;
  background-position: center center;

  .step-number-red {
    background: url(../../assets/images/red-bg.svg) no-repeat;
    background-size: contain;
    background-position: center center;
  }
}

.step-number-cover-black {
  background: url(../../assets/images/black-line.svg) no-repeat;
  background-size: contain;
  background-position: center center;

  .step-number-black {
    background: url(../../assets/images/black-bg.svg) no-repeat;
    background-size: contain;
    background-position: center center;
  }
}
</style>
