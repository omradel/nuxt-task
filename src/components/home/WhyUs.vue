<template>
  <section
    aria-label="whay-us section"
    class="w-full max-w-screen-xl mx-auto px-6 pt-5xl grid gap-y-10 grid-cols-1 lg:grid-cols-2 md:grid-cols-1 items-center"
  >
    <div class="text-content">
      <SectionsTitle>
        <template #sub-title>Why Us</template>
        <template #title>Why Business 360? </template>
      </SectionsTitle>

      <p
        class="desc pt-2 xl:w-[431px] lg:w-[431px] md:w-full w-full xl:text-[18px] lg:text-[18px] md:text-[14px] text-[14px] text-[#666D80] leading-[28px]"
      >
        Join Thousands of Professionals Who Have Advanced Their Careers with Our
        Accredited Finance Courses, We offer more than just courses; we provide
        pathways to a successful career in finance.
      </p>

      <div class="flex gap-x-5 items-center mt-3xl">
        <Button
          :text="true"
          :icon="false"
          :button_type="'default'"
          @click="openDialog"
        >
          <template #button-text>Join us +</template>
        </Button>

        <div class="flex -space-x-2">
          <img
            class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div
            class="h-8 w-8 rounded-full ring-2 ring-white bg-[#DCDCDC] text-sm flex justify-center items-center"
          >
            <span>2k+</span>
          </div>
        </div>
      </div>

      <!-- join-us form dialog -->
      <dialog class="dialog m-auto rounded-[10px]" ref="join_us">
        <div class="close-icon p-3 w-fit fixed right-4">
          <v-icon class="cursor-pointer" color="#D93749" @click="closeDialog"
            >mdi-close</v-icon
          >
        </div>
        <JoinUsForm />
      </dialog>
    </div>

    <div
      class="video flex xl:justify-end lg:justify-end md:justify-center justify-center"
    >
      <video
        class="object-cover cursor-pointer xl:w-[540] lg:w-[540] md:w-full w-full h-[380] rounded-xl"
        src="../../assets/videos/video.mp4"
        width="540"
        height="380"
        poster="../../assets/videos/video-poster.png"
        controls
      ></video>
    </div>
  </section>
</template>

<script setup>
const join_us = ref("");

const openDialog = () => {
  join_us.value.showModal();
};

const closeDialog = () => {
  join_us.value.close();
};
</script>
