<template>
  <div>
    <button
      v-if="button_type == 'special'"
      class="button text-white"
      :class="{
        'rounded-full w-[44px] h-[44px]': !text,
        'flex gap-x-2 items-center rounded-[38px] px-4 py-2 text-small tracking-widest':
          text,
      }"
    >
      <span v-if="text">
        <slot name="button-text"></slot>
      </span>

      <span class="icon flex justify-center items-center" v-if="icon">
        <slot name="button-icon"></slot>
      </span>
    </button>

    <v-btn
      v-if="button_type == 'default'"
      class="px-small"
      :color="button_color"
      :rounded="round_rate"
      :ripple="false"
      elevation="0"
      style="text-transform: capitalize"
      :icon="!text && icon"
    >
      <span v-if="text">
        <slot name="button-text"></slot>
      </span>

      <span class="icon flex justify-center items-center" v-if="icon">
        <slot name="button-icon"></slot>
      </span>
    </v-btn>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: Boolean,
    required: true,
  },

  icon: {
    type: Boolean,
    required: true,
  },

  button_type: {
    type: String, // default or special
    required: true,
  },

  button_color: {
    type: String,
    default: "#D93749",
  },

  round_rate: {
    type: String,
    default: "lg",
  },
});
</script>

<style scoped>
.button {
  background: rgba(255, 255, 255, 0.005);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0px 0px 12px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(24px);
  box-sizing: border-box;
}
</style>
