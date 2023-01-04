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
  },
  mounted() {
    const text = `
                                   .oooo.     .oooo.     .oooo.     .oooo.   
                                 .dP""Y88b   d8P' Y8b   d8P' Y8b   d8P' Y8b  
oooo  oooo  oooo    ooo  .oooo.o       ]8P' 888    888 888    888 888    888 
 888   888    88.  .8'  d88(  "8     .d8P'  888    888 888    888 888    888 
 888   888     88..8'    "Y88b.    .dP'     888    888 888    888 888    888 
 888   888      888'    o.  )88b .oP     .o '88b  d88' '88b  d88'  88b  d88' 
 'V88V"V8P'     .8'     8""888P' 8888888888  'Y8bd8P'   'Y8bd8P'   'Y8bd8P'  
            .o..P'                                                           
            'Y8P'
`
    console.log(text)
  }
})
</script>