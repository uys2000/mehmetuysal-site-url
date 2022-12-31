<template>
  <div>
    <div class="relative rounded-md shadow-sm flex flex-nowrap items-center">
      <span class="whitespace-nowrap" @click="(($refs.input as HTMLInputElement).focus())">Open Limit:</span>
      <input type="number" ref="input" :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="block w-full rounded-md bg-transparent border-gray-300 target:border-0 focus:outline-none">
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ["modelValue"],
  emits: ["update:modelValue"],
})
</script>