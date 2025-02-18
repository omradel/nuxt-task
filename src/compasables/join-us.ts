import { api } from "../utils/axios";
import { type UserData } from "~/types/interfaces";

export const useJoinUs = () => {
  const error = ref("");
  const isLoading = ref(false);
  const successMsg = ref("");

  const postJoinUs = async (user_data: UserData) => {
    try {
      error.value = "";
      successMsg.value = "";
      isLoading.value = true;
      const response = await api.post("/join-us", user_data);
      successMsg.value = response.data.message;
      isLoading.value = false;
    } catch (err: any) {
      error.value = err?.message;
      isLoading.value = false;
    }
  };

  return {
    postJoinUs,
    isLoading,
    error,
    successMsg,
  };
};
