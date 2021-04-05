<template>
  <div class="column" v-if="isCorrect">
    〇 正解です
  </div>
  <div class="column" v-else>
    × 不正解です
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FizzBuzzItem',
  props: {
    isCorrect: Boolean
  }
})
</script>
