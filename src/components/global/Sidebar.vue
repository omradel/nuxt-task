<template>
  <v-layout>
    <v-navigation-drawer
      class="v-navigation-drawer--mobile"
      v-model="sideBar.isOpen"
      temporary
    >
      <div class="p-5 flex justify-center">
        <ul class="list-none flex flex-col gap-y-3">
          <li class="hover:text-primary">
            <nuxt-link to="/">Home</nuxt-link>
          </li>

          <li class="hover:text-primary">
            <nuxt-link to="/posts">Posts</nuxt-link>
          </li>
        </ul>
      </div>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup>
import { useSidebar } from "../../stores/side-bar.ts";

const sideBar = useSidebar();
</script>
