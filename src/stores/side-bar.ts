import { defineStore } from "pinia";

export const useSidebar = defineStore("useSidebar", () => {
  const isOpen = ref(false);

  const toggle = () => {
    isOpen.value = !isOpen.value;
  };

  return {
    isOpen,
    toggle,
  };
});
