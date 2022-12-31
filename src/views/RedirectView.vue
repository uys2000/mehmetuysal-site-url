<template>
  <div class="flex flex-col justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" class="fill-white"
      :class="{ 'animate-spin': !isExpired }">
      <path
        d="M9.8 31.45q-1-1.8-1.4-3.625Q8 26 8 24.1q0-6.55 4.725-11.275Q17.45 8.1 24 8.1h2.15l-4-4 1.95-1.95 7.45 7.45-7.45 7.45-2-2 3.95-3.95H24q-5.35 0-9.175 3.825Q11 18.75 11 24.1q0 1.45.275 2.75t.675 2.45ZM23.8 46l-7.45-7.45 7.45-7.45 1.95 1.95-4 4H24q5.35 0 9.175-3.825Q37 29.4 37 24.05q0-1.45-.25-2.75T36 18.85l2.15-2.15q1 1.8 1.425 3.625Q40 22.15 40 24.05q0 6.55-4.725 11.275Q30.55 40.05 24 40.05h-2.25l4 4Z" />
    </svg>
    {{ phase }}...
    <a v-if="isNotOpen" :href="url">link</a>
  </div>
</template>
<script lang="ts">
import { getUrl } from '@/services/firebaseDatabase';
import { defineComponent } from 'vue';
import { FirebaseData } from "@/types/firebaseTypes"
import { updatetUrl, deleteUrl } from '@/services/firebaseDatabase';

export default defineComponent({
  data() {
    return {
      isNotOpen: false,
      phase: "Getting Link" as string,
      isExpired: false,
      url: "" as string,
      firebaseData: {} as FirebaseData
    }
  },
  methods: {
    getFirebaseData() {
      this.url = this.$route.params.url as string
      return getUrl(this.url).then(result => {
        if (result.exists()) this.firebaseData = result.data() as FirebaseData
        else this.isExpired = true
      }).catch(() => this.isExpired = true)
    },
    checkFirebaseData() {
      this.phase = "Link checking"
      const limit = this.firebaseData.limit as number
      const count = this.firebaseData.count as number
      if (this.isExpired) return 4
      else if (limit <= count) return 3
      else if (limit - 1 > count) return 2
      else if (limit - 1 == count) return 1
      else return 0
    },
    async updateFirebaseData(result: 0 | 1 | 2 | 3 | 4) {
      this.phase = "Link updating"
      if (result == 1) {
        this.phase = "Link prepearing for last visit"
        await updatetUrl(this.url)
        await deleteUrl(this.url)
      }
      else if (result == 2) {
        this.phase = "Link prepearing"
        return updatetUrl(this.url)
      }
      else if (result == 3) {
        this.phase = "Link expired"
        this.isExpired = true
        await updatetUrl(this.url)
      }
      else if (result == 4) {
        this.phase = "Link not found"
        this.isExpired = true
      }
      else {
        this.phase = "Unknown situation"
        this.isExpired = true
      }
    },
    redirectUser() {
      this.phase = "Redirecting"
      setTimeout(() => {
        this.isNotOpen = true
      }, 1000)
      window.location.href = this.firebaseData.url as string;
      window.location.replace(this.firebaseData.url as string);
    }
  },
  async mounted() {
    await this.getFirebaseData()
    console.log(this.phase)
    const result = this.checkFirebaseData()
    console.log(this.phase)
    await this.updateFirebaseData(result)
    console.log(this.phase)
    if (!this.isExpired) this.redirectUser()
  }
})
</script>