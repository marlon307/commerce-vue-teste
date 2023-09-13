<script setup lang="ts">
import ButtonSubmit from '@/components/ButtonSubmit.vue';
import FieldInput from '@/components/FieldInput.vue';
</script>

<template>
  <section class="m-auto h-[90vh] max-w-xs flex items-center justify-center flex-col gap-7">
    <h1 class="text-4xl font-bold">Login</h1>
    <form action="" method="post" class="w-full">
      <FieldInput ariaLabel="E-mail" id="email" name="email" placeholder="email@email.com" required />
      <FieldInput ariaLabel="Senha" id="password" name="password" placeholder="Digite sua senha" required
        type="password" />
      <ButtonSubmit tilte="Login" />
    </form>
  </section>
</template>
