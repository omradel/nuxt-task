<template>
  <Sidebar />

  <header aria-label="header of app" class="absolute w-full z-10 p-small">
    <div
      class="w-full max-w-screen-xl mx-auto px-4 flex justify-between items-center"
    >
      <div class="logo">
        <img
          src="@/assets/images/logo.svg"
          width="189"
          height="30.36"
          alt="logo"
        />
      </div>

      <div
        class="birger-icon cursor-pointer xl:hidden lg:hidden md:block block"
        @click="sideBar.toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 256 256"
        >
          <path
            fill="#fafafa"
            d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M40 70h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m176 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12"
            stroke-width="6.5"
            stroke="#fafafa"
          />
        </svg>
      </div>

      <nav class="lg:block xl:block md:hidden hidden cursor-pointer">
        <ul
          class="list-none flex justify-between items-center gap-x-5 text-white"
        >
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/posts">Posts</nuxt-link>
          </li>
          <li>
            <nuxt-link to="">Become partner</nuxt-link>
          </li>
          <li>
            <nuxt-link to="">About us</nuxt-link>
          </li>
          <li>
            <nuxt-link to="">Teams</nuxt-link>
          </li>
        </ul>
      </nav>

      <div
        class="buttons gap-x-3 items-center lg:flex xl:flex md:hidden hidden"
      >
        <Button
          :text="true"
          :icon="true"
          :button_type="'special'"
          @click="openDialog"
        >
          <template #button-text>Join Us</template>

          <template #button-icon>
            <img src="@/assets/images/arrow.svg" width="7" height="7" alt="" />
          </template>
        </Button>

        <Button :text="false" :icon="true" :button_type="'special'">
          <template #button-icon>
            <img
              src="@/assets/images/search.svg"
              width="20"
              height="20"
              alt=""
            />
          </template>
        </Button>

        <!-- <LangSelect /> -->

        <!-- join-us form dialog -->
        <dialog class="dialog m-auto rounded-[10px]" ref="join_us">
          <div class="close-icon p-3 w-fit flex justify-end fixed right-4">
            <v-icon class="cursor-pointer" color="#D93749" @click="closeDialog"
              >mdi-close</v-icon
            >
          </div>
          <JoinUsForm />
        </dialog>
      </div>
    </div>
  </header>
</template>

<script setup>
const join_us = ref("");
import { useSidebar } from "../../stores/side-bar.ts";

const sideBar = useSidebar();

const openDialog = () => {
  join_us.value.showModal();
};

const closeDialog = () => {
  join_us.value.close();
};
</script>

<style scoped>
header .router-link-active.router-link-exact-active {
  color: var(--color-primary);
}
</style>
