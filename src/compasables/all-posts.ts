import { api } from "../utils/axios";

export const usePosts = () => {
  const items = ref<any>([]);
  const page = ref(1);
  const isLoading = ref(false);
  const totalPages = ref(null);

  const load = async ({ done }: any) => {
    if (
      isLoading.value ||
      (totalPages.value && page.value > totalPages.value)
    ) {
      done("empty"); // No more items to load
      return;
    }

    isLoading.value = true;

    try {
      const response: any = await api.get(`/posts?page=${page.value}`);

      if (response.data.data.length === 0) {
        done("empty");
      } else {
        items.value.push(...response.data.data);
        page.value++;
        done("ok");
      }
    } catch (error) {
      console.error("Error loading data:", error);
      done("error"); // Handle error case
    } finally {
      isLoading.value = false;
    }
  };

  return {
    items,
    page,
    isLoading,
    totalPages,
    load,
  };
};
