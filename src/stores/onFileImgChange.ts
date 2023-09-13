import { ref } from "vue";
import { defineStore } from "pinia";

export const changeFileEvent = defineStore("inputImage", () => {
  const fileStore = ref<string>("");
  const changeFileImage = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files![0]) return fileStore.value = URL.createObjectURL(target.files![0]);
    return fileStore;
  };

  return { fileStore, changeFileImage };
});
