<template>
  <div class="column">
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="入力" v-model="text">
      </div>
      <div class="control" @click="onCheckEvent">
        <a class="button is-info">
          check
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from 'vue'

export default defineComponent({
  name: 'InputForm',
  setup (props: any, context: SetupContext) {
    const text = ref('')
    const onCheckEvent = () => {
      console.log(text.value)
      context.emit('emit-check', text.value)
    }
    return {
      onCheckEvent,
      text
    }
  }

})
</script>
