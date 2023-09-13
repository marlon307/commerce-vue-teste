<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const sotre = useCounterStore();
</script>

<template>
  <button
    class="rounded-lg bg-slate-500 p-4 text-3xl font-bold underline"
    @click="sotre.increment"
  >
    Value {{ sotre.count }}
  </button>
</template>
