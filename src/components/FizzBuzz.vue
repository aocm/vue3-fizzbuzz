<template>
  <div class="content">
    <custom-title title="FizzBuzz" />
    <p>
      ルール・・・・
    </p>
    <div class="columns" v-for="item in currentFizzBuzz" :key="item.num">
      <input-form @emit-check="onCheck" />
      <answer-viewer v-if="item.isShow" :isCorrect="item.isCorrect"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CustomTitle from './Title.vue'
import InputForm from './InputForm.vue'
import AnswerViewer from './AnswerViewer.vue'
import fizzbuzz from '@/modules/FizzBuzz.ts'

type fizzbuzzObject = {
  num: number,
  isCorrect: boolean,
  isShow: boolean,
  text: string
}
export default defineComponent({
  name: 'FizzBuzz',
  components: {
    CustomTitle,
    InputForm,
    AnswerViewer
  },
  setup () {
    const currentFizzBuzz = ref<fizzbuzzObject[]>([{ num: 1, isShow: false, isCorrect: false, text: '' }])
    const onCheck = (text: string) => {
      const count = currentFizzBuzz.value.length - 1
      console.log('test', currentFizzBuzz.value[count])
      currentFizzBuzz.value[count].isShow = true
      currentFizzBuzz.value[count].isCorrect = fizzbuzz.judge(currentFizzBuzz.value.length, text)
      if (currentFizzBuzz.value[count].isCorrect) {
        currentFizzBuzz.value.push({
          num: currentFizzBuzz.value.length,
          isShow: false,
          isCorrect: false,
          text
        })
      }
    }
    return {
      onCheck,
      currentFizzBuzz
    }
  }
})
</script>
