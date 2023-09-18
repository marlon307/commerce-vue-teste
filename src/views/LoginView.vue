<script setup lang="ts">
import ButtonSubmit from '@/components/ButtonSubmit.vue';
import FieldInput from '@/components/FieldInput.vue';
async function onSubmitLogin(e: FormDataEvent) {
  try {
    const formData = new FormData(e.target as HTMLFormElement);
    const res = await fetch('http://127.0.0.1:8000/api/user/login', {
      headers: {
        'accept': 'application/json'
      },
      method: 'POST',
      body: formData
    });
    const json = await res.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <section class="m-auto h-[90vh] max-w-xs flex items-center justify-center flex-col gap-7">
    <h1 class="text-4xl font-bold">Login</h1>
    <form @submit="onSubmitLogin" method="post" class="w-full" @submit.prevent>
      <FieldInput ariaLabel="E-mail" id="email" name="email" placeholder="email@email.com" required type="email" />
      <FieldInput ariaLabel="Senha" id="password" name="password" placeholder="Digite sua senha" required
        type="password" />
      <ButtonSubmit title="Login" />
    </form>
  </section>
</template>
