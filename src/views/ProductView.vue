<script setup lang="ts">

</script>

<template>
  <section class="my-6 grid grid-cols-[60%,auto] gap-4 px-4">
    <figure class="mx-auto flex h-[80vh] max-h-[700px] w-full items-center justify-center">
      <img src="../assets/logo.svg" width="400" height="400" alt="Image - product">
    </figure>
    <div class="space-y-6">
      <div class="space-y-4 border-b pb-6">
        <h1 class="text-5xl font-medium">
          {{ $route.params.id }} Titulo do produto
        </h1>
        <div class="w-max flex-none rounded-full bg-blue-700 px-4 py-1 text-center">
          <span class="text-lg text-blue-50">R$ 30,00</span>
        </div>
      </div>
      <button type="button"
        class="rounded-full bg-blue-700 px-12 py-4 text-blue-50 transition-transform hover:bg-blue-600 active:scale-95">
        Adicionar ao carrinho
      </button>
      <dl class="text-slate-500">
        <dt class="text-slate-700">
          Detalhes
        </dt>
        <dl>Detalhes do produto</dl>
        <dl>Detalhes do produto</dl>
        <dl>Detalhes do produto</dl>
        <dl>Detalhes do produto</dl>
        <dl>Detalhes do produto</dl>
        <dl>Detalhes do produto</dl>
      </dl>
    </div>
  </section>
</template>
