<template>
  <section class="hero is-fullheight">
    <div class="hero-body ">
      <FizzBuzz />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FizzBuzz from '@/components/FizzBuzz.vue'

export default defineComponent({
  name: 'Home',
  components: {
    FizzBuzz
  }
})
</script>
<style scoped>
.hero-body {
  justify-content: center;
}
</style>
