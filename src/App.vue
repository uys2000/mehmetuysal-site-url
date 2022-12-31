<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { initializeAnalytics } from './services/firebaseAnalytics';
import { initializeDatabase } from './services/firebaseDatabase';
import { initializeFirebase } from './services/firebase';


export default defineComponent({
  mounted() {
    initializeFirebase()
    initializeAnalytics()
    initializeDatabase()
  }
})
</script>