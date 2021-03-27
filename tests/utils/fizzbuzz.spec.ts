import fizzbuzz from '@/modules/FizzBuzz';

describe('FizzBuzz', () => {
  describe('数を文字列に変換する', () => {

    it('1を渡すと文字列1を返す', () => {
      expect(fizzbuzz.convert(1)).toBe('1')
    })

    it('2を渡すと文字列2を返す', () => {
      expect(fizzbuzz.convert(2)).toBe('2')
    })
  })
})
