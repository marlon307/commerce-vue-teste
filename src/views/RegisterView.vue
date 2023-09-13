<script setup lang="ts">
  import ButtonSubmit from '@/components/ButtonSubmit.vue';
  import FieldInput from '@/components/FieldInput.vue';
</script>

<template>
  <section class="m-auto h-[90vh] max-w-xs flex items-center justify-center flex-col gap-7">
    <h1 class="text-4xl font-bold">Registre-se</h1>
    <form action="" method="post" class="w-full">
      <FieldInput label="E-mail" id="email"/>
      <FieldInput label="Senha" id="password" />
      <FieldInput label="Repita a senha" id="rpassword" />
      <ButtonSubmit tilte="Registrar"/>
    </form>
  </section>
</template>
