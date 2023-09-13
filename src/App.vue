<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="w-full">
    <div class="mx-auto flex max-w-7xl justify-between p-4">
      <div>Shop</div>
      <nav class="space-x-4">
        <RouterLink class="hover:underline" to="/">
          Home
        </RouterLink>
        <RouterLink class="hover:underline" to="/about">
          About
        </RouterLink>
        <RouterLink class="hover:underline" to="/create-product">
          Criar Produto
        </RouterLink>
        <RouterLink class="hover:underline" to="/login">
          Login
        </RouterLink>
        <RouterLink class="hover:underline" to="/register">
          Register
        </RouterLink>
      </nav>
    </div>
  </header>
  <main class="mx-auto min-h-[86vh] max-w-7xl">
    <RouterView />
  </main>
</template>
