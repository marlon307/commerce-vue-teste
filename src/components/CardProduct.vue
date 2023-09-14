<script setup lang="ts">
import { type IProduct } from "../@types/product";
const props = defineProps<IProduct>();
</script>

<template>
  <RouterLink class="w-full rounded-xl h-80 p-8 border hover:border-blue-500 group" :to="'/product/' + props.id">
    <figure class="mx-auto block h-56 w-full">
      <img :src="props.thumbnail" alt="Image - product title" class="mx-auto group-hover:scale-105 transition-transform"
        width="250" height="250">
    </figure>
    <div class="relative">
      <div
        class="mx-auto absolute w-full flex z-10 items-center justify-between gap-2 rounded-full border bg-white/70 p-1 pl-4 backdrop-blur-md backdrop:blur-md">
        <span class="line-clamp-2 sm:w-52 text-xs text-slate-900 font-medium">{{ props.title }}</span>
        <div class="w-max flex-none rounded-full bg-blue-700 px-4 py-1 text-center">
          <span class="text-sm text-blue-50">{{ props.price.toLocaleString('pt-BR', {
            currency: 'BRL', style: 'currency'
          })
          }}</span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
