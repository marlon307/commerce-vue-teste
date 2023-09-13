<script setup lang="ts">
import ButtonSubmit from "@/components/ButtonSubmit.vue";
import FieldInput from "@/components/FieldInput.vue";
</script>

<template>
  <form action="" method="post" class="flex gap-4 px-4">
    <label for="producctimg" class="flex h-[70vh] w-1/2 cursor-pointer overflow-hidden rounded-3xl border p-6">
      <input type="file" id="producctimg" class="hidden">
      <img src="../assets/logo.svg">
    </label>
    <div class="w-max flex-1">
      <FieldInput label="Titulo" id="title" />
      <FieldInput label="Preço" id="sds" />
      <label for="description">
        <span class="mb-1 block text-sm font-medium text-gray-900">Descrição do produto</span>
        <textarea name="description" id="description" rows="10"
          class="border rounded-lg resize-none w-full px-3 py-2 sm:text-sm" />
      </label>
      <ButtonSubmit title="Criar Poduto" />
    </div>
  </form>
</template>
