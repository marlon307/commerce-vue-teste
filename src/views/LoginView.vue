<script setup lang="ts">
import ButtonSubmit from '@/components/ButtonSubmit.vue';
import FieldInput from '@/components/FieldInput.vue';
import router from '@/router';
import { isLogged } from '@/stores/isLogged';
import useFetch from '@/utils/useFetch';

async function onSubmitLogin(e: Event) {
  try {
    const res = await useFetch.post('/auth/login', new FormData(e.target as HTMLFormElement));
    if (res.status === 200) {
      localStorage.setItem('token', res.data.access_token);
      isLogged().singIn();
      router.push('/create-product');
    }
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
