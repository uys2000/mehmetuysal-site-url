<template>
  <div class="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
    <div class="bg text-white p-5 rounded-md">
      <div class="font-bold text-center">
        Add Your URL
      </div>
      <InputComp v-model="url" />
      <div class="flex justify-between">
        <div class="my-5 w-36 sm:w-44 md:w-64 lg:w-[26rem] mr-5">
          <NumberComp v-model="amount" />
        </div>
        <button class="float-left rounded-md px-5 focus:bg-green" @click="runFunction">></button>
      </div>
      <div>
        <div
          class="opacity-0  overflow-auto break-words whitespace-normal text-sm sm:text-md md:text-xl lg:text-2xl w-full h-16 rounded-md flex justify-center items-center mt-20 transition-all duration-500"
          :class="{ 'opacity-100': shortUrl != '' }">
          {{ shortUrl }}
        </div>
        <div class="flex justify-center">
          <button :disabled="!(shortUrl != '')" class="opacity-0 rounded-b-md pb-5 px-5 transition-all duration-500"
            :class="{ 'opacity-100': shortUrl != '' }" @click="copyFunction">Copy</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputComp from '@/components/InputComp.vue';
import NumberComp from '@/components/NumberComp.vue';
import { addUrl } from '@/services/firebaseDatabase';
export default defineComponent({
  name: 'HomeView',
  components: {
    InputComp, NumberComp
  },
  data() {
    return {
      amount: 1 as number,
      url: "" as string,
      shortUrl: "" as string,
    }
  },
  methods: {
    copyFunction() {
      navigator.clipboard.writeText(this.shortUrl)
    },
    checkUrl: function () {
      if (!(this.url.includes("http://") || this.url.includes("https://"))) {
        alert("You should use real url :)")
        return false
      }
      if (!this.url.includes(".")) {
        alert("You should use real url :)")
        return false
      }
      return true
    },
    runFunction() {
      console.log("run")
      if (!this.checkUrl()) return
      console.log("pass")
      addUrl(this.url, this.amount < 0 ? 1 : this.amount > 999 ? 999 : this.amount).then(result => {
        console.log("created")
        this.shortUrl = "https://url.mehmetuysal.dev/" + result.id
        console.log("showed ")
      }).catch((err) => {
        console.log(err)
        console.log("getted Error")
        alert("Some Error")
      })
    }
  },
  watch: {
    amount() {
      if (this.amount > 999) this.amount = 999
      else if (this.amount < 0) this.amount = 1
    }
  }
});
</script>
