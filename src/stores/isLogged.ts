import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "@/router";

export const isLogged = defineStore("counter", () => {
  const logged = ref(false);

  function singIn() {
    logged.value = true;
  }

  function singOut() {
    logged.value = false;
    localStorage.removeItem('token');
    router.push('/');
  }

  /*****************************/
  // Reveja outro método para essa função
  //        mounted
  /*****************************/

  function mounted() {
    logged.value = !!localStorage.getItem("token");
  }

  return { mounted, logged, singIn, singOut };
});
