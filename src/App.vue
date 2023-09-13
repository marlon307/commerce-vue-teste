<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { isLogged } from '@/stores/isLogged';
const checkIsLogged = isLogged();
checkIsLogged.mounted();
</script>

<template>
  <header class="w-full mb-6">
    <div class="mx-auto flex max-w-7xl justify-between p-4">
      <RouterLink class="hover:underline font-bold text-xl" to="/">
        Shop
      </RouterLink>
      <nav class="space-x-4">
        <RouterLink class="hover:underline" to="/about">
          Sobre
        </RouterLink>
        <RouterLink v-if="checkIsLogged.logged" class="hover:underline" to="/create-product">
          Criar Produto
        </RouterLink>
        <RouterLink v-if="!checkIsLogged.logged" class="hover:underline" to="/login">
          Login
        </RouterLink>
        <RouterLink v-if="!checkIsLogged.logged" class="hover:underline" to="/register">
          Registrar-se
        </RouterLink>
        <button type="button" v-if="checkIsLogged.logged" @click="checkIsLogged.singOut()">
          Sair
        </button>
      </nav>
    </div>
  </header>
  <main class="mx-auto min-h-[86vh] max-w-7xl">
    <RouterView />
  </main>
</template>
