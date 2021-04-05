<template>
  <div class="content">
    <custom-title title="FizzBuzz" />
    <p>
      ルール・・・・
    </p>
    <div class="columns">
      <input-form />
      <answer-viewer :isCorrect="true"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomTitle from './Title.vue'
import InputForm from './InputForm.vue'
import AnswerViewer from './AnswerViewer.vue'

export default defineComponent({
  name: 'FizzBuzz',
  components: {
    CustomTitle,
    InputForm,
    AnswerViewer
  }
})
</script>
