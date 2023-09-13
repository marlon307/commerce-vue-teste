<script setup lang="ts">
const props = defineProps<{
  id: string;
  ariaLabel: string;
  name: string;
  required?: boolean;
  pattern?: string;
  type?: string;
  placeholder: string;
}>();
</script>

<template>
  <label :for="props.id" class="mb-4 block w-full" :aria-label="props.ariaLabel">
    <span className="mb-1 block text-sm font-medium text-gray-900">{{ props.ariaLabel }}</span>
    <input :id="props.id" :required="props.required" :name="props.name" :type="props.type" :pattern="props.pattern"
      :placeholder="props.placeholder"
      class="h-10 w-full appearance-none rounded-lg border bg-white px-3 py-2 text-gray-900 outline-none sm:text-sm [&:not(:placeholder-shown)]:invalid:border-red-500">
  </label>
</template>
