<template>
  <div class="join-us grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
    <div class="image">
      <img
        src="../../assets/images/join-us.jpg"
        class="w-full h-full object-cover"
        width="600"
        height="600"
        alt="join_us"
      />
    </div>

    <div class="p-5 flex items-center w-full" action="">
      <div class="w-full">
        <h1 class="font-bold text-2xl text-[#1A1A1A]">Join us now</h1>

        <Form @submit="onSubmit" v-slot="{ meta }" class="mt-5">
          <!-- name -->
          <Field
            name="name"
            rules="required"
            type="text"
            placeholder="Name"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
          />

          <ErrorMessage name="name" class="pt-2 ps-2 text-red-500 text-sm" />

          <!-- email -->
          <Field
            name="email"
            rules="required|email"
            type="email"
            placeholder="email"
            class="w-full mt-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
          />

          <ErrorMessage name="email" class="pt-2 ps-2 text-red-500 text-sm" />

          <!-- mobile phone -->
          <Field
            type="text"
            name="phone"
            rules="required"
            placeholder="mobile"
            class="w-full mt-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
          />

          <ErrorMessage name="phone" class="pt-2 ps-2 text-red-500 text-sm" />

          <v-checkbox
            class="mt-5"
            id="checkbox-6"
            label="I agree with terms & conditions"
            color="#D93749"
            v-model="isChecked"
          ></v-checkbox>

          <p class="text-red-500 text-lg pb-5 text-center">
            {{ error }}
          </p>

          <p class="text-green-500 text-lg pb-5 text-center">
            {{ successMsg }}
          </p>

          <v-btn
            class="px-small w-full"
            :disabled="!meta.valid"
            type="submit"
            :ripple="false"
            :loading="isLoading"
            rounded="lg"
            elevation="0"
            size="large"
            style="text-transform: capitalize"
          >
            Join Us
          </v-btn>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { useJoinUs } from "~/compasables/join-us";

const isChecked = ref(true);
const { postJoinUs, isLoading, error, successMsg } = useJoinUs();

const onSubmit = (valuse) => {
  postJoinUs(valuse);
};
</script>
