<template>
  <div class="column">
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="入力">
      </div>
      <div class="control">
        <a class="button is-info">
          check
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FizzBuzzItem',
  components: {
  }
})
</script>
