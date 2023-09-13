<script setup lang="ts">
const props = defineProps({
  id: {
    type:String,
    default: "id-input",
  },
  label: {
    type:String,
    default: "Label Input",
  },
});
</script>

<template>
  <label
    :for="props.id"
    class="mb-4 block w-full"
  >
    <span className="mb-1 block text-sm font-medium text-gray-900">{{ props.label }}</span>
    <input
      :id="props.id"
      class="h-10 w-full appearance-none rounded-lg border bg-white px-3 py-2 text-gray-900 outline-none sm:text-sm [&:not(:placeholder-shown)]:invalid:border-red-500"
    >
  </label>
</template>
