<template>
  <div class="content">
    <custom-title title="FizzBuzz" />
    <div class="notification">
      <ul>
        <li>最初のプレイヤーは「1」と数字を入力する。</li>
        <li>次のプレイヤーは直前のプレイヤーの次の数字に1を足した数字を入力していく。</li>
        <li>ただし、3で割り切れる場合は「Fizz」、5で割り切れる場合は「Buzz」、</li>
        <li>両者で割り切れる場合（すなわち15で割り切れる場合）は「Fizz Buzz」を数の代わりに入力しなければならない。</li>
      </ul>
    </div>
    <div class="columns" v-for="item in currentFizzBuzz" :key="item.num">
      <template v-if="item.isCorrect">
        <div class="column">
          <div class="field has-addons">
             {{item.text}}
          </div>
      </div>
      </template>
      <template v-else>
        <input-form @emit-check="onCheck" />
      </template>
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
      currentFizzBuzz.value[count].isShow = true
      currentFizzBuzz.value[count].isCorrect = fizzbuzz.judge(currentFizzBuzz.value.length, text)
      if (currentFizzBuzz.value[count].isCorrect) {
        currentFizzBuzz.value[count].text = text
        currentFizzBuzz.value[count].num = currentFizzBuzz.value.length
        currentFizzBuzz.value.push({ // 次のデータをセットする
          num: currentFizzBuzz.value.length + 1,
          isShow: false,
          isCorrect: false,
          text: ''
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
