<template>
  <div class="min-w-screen min-h-screen flex justify-center content-center items-center bg-center bg-cover bg-no-repeat"
    :style="` background-image: url('${img}');`">
    <RouterView />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      img: require("@/assets/logo.jpg")
    }
  }
})
</script>