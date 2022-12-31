<template>
  <div>
    <div class="relative mt-1 rounded-md shadow-sm flex flex-nowrap  items-center">
      <span @click="(($refs.input as HTMLInputElement).focus())"></span>
      <input type="text" ref="input" :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="block w-full bg-transparent border-gray-300 target:border-0 focus:outline-none" placeholder="http://your.long/url">
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ["modelValue"],
  emits: ["update:modelValue", "runFunction"],
})
</script>