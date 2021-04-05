<template>
  <div class="content">
    <custom-title title="FizzBuzz" />
    <p>
      ルール・・・・
    </p>
    <div class="columns">
      <fizz-buzz-form />
      <fizz-buzz-answer-viewer :isCorrect="true"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomTitle from './Title.vue'
import FizzBuzzForm from './FizzBuzzForm.vue'
import FizzBuzzAnswerViewer from './FizzBuzzAnswerViewer.vue'

export default defineComponent({
  name: 'FizzBuzz',
  components: {
    CustomTitle,
    FizzBuzzForm,
    FizzBuzzAnswerViewer
  }
})
</script>
