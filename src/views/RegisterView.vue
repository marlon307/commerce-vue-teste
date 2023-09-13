<script setup lang="ts">
import ButtonSubmit from '@/components/ButtonSubmit.vue';
import FieldInput from '@/components/FieldInput.vue';
</script>

<template>
  <section class="m-auto h-[90vh] max-w-xs flex items-center justify-center flex-col gap-7">
    <h1 class="text-4xl font-bold">Registre-se</h1>
    <form action="" method="post" class="w-full" @submit.prevent>
      <FieldInput ariaLabel="E-mail" id="email" name="email" placeholder="email@email.com" type="email" />
      <FieldInput ariaLabel="Senha" id="password" name="passoword" placeholder="Digite uma senha" type="password" />
      <FieldInput ariaLabel="Senha" id="rpassword" name="rpassword" placeholder="Repita a senha" type="password" />
      <ButtonSubmit title="Registrar" />
    </form>
  </section>
</template>
