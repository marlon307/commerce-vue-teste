<script setup lang="ts">
import ButtonSubmit from '@/components/ButtonSubmit.vue';
import FieldInput from '@/components/FieldInput.vue';
import router from '@/router';
import { isLogged } from '@/stores/isLogged';
import useFetch from '@/utils/useFetch';

async function submitRegister(e: Event) {
  try {
    const res = await useFetch.post('/user/register', new FormData(e.target as HTMLFormElement));
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
    <h1 class="text-4xl font-bold">Registre-se</h1>
    <form @submit="submitRegister" method="POST" class="w-full" @submit.prevent>
      <FieldInput ariaLabel="Nome" id="username" name="username" placeholder="Nome" type="text" />
      <FieldInput ariaLabel="E-mail" id="email" name="email" placeholder="email@email.com" type="email" />
      <FieldInput ariaLabel="Senha" id="password" name="password" placeholder="Digite uma senha" type="password" />
      <FieldInput ariaLabel="Senha" id="rpassword" name="rpassword" placeholder="Repita a senha" type="password" />
      <ButtonSubmit title="Registrar" />
    </form>
  </section>
</template>
