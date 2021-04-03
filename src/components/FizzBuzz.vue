<template>
  <div class="content">
    <custom-title title="FizzBuzz" />
    <p>
      ルール・・・・
    </p>
    <div class="columns">
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
      <div class="column">
        〇 正解です
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomTitle from './Title.vue'

export default defineComponent({
  name: 'FizzBuzz',
  components: {
    CustomTitle
  }
})
</script>
