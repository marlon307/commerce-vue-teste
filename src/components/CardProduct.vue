<script setup lang="ts">

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
const props = defineProps<IProduct>();
</script>

<template>
  <RouterLink class="w-80 rounded-xl p-8 border hover:border-blue-500 group" :to="'/product/' + props.id">
    <figure class="mx-auto block h-56 w-52">
      <img :src="props.thumbnail" alt="Image - product title" class="mx-auto group-hover:scale-105 transition-transform"
        width="200" height="250">
    </figure>
    <div
      class="mx-auto flex w-full items-center justify-between gap-2 rounded-full border bg-white/70 p-1 pl-4 backdrop:blur-md">
      <span class="line-clamp-2 w-52 text-xs text-slate-900 font-medium">{{ props.title }}</span>
      <div class="w-max flex-none rounded-full bg-blue-700 px-4 py-1 text-center">
        <span class="text-sm text-blue-50">{{ props.price.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })
        }}</span>
      </div>
    </div>
  </RouterLink>
</template>
