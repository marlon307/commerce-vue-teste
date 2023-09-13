<script setup lang="ts">
import router from '@/router';
import { isLogged } from '../stores/isLogged';

interface IButton {
  title: string;
}

const props = defineProps<IButton>();

function clickLogin() {
  isLogged().singIn();
  router.push('/create-product');
}
</script>

<template>
  <button
    class="group ml-auto mt-4 flex w-max cursor-pointer items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/80"
    type="submit" aria-label="Salvar" data-loading="false" formmethod="POST" @click="clickLogin">
    <span class="pointer-events-none absolute group-data-[loading=false]:opacity-0"><svg class="h-4 w-4 animate-spin"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </span>
    <span class="group-data-[loading=true]:opacity-0">{{ props.title }}</span>
  </button>
</template>
