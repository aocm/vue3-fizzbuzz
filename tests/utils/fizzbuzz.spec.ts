import fizzbuzz from '@/modules/FizzBuzz'

describe('Fizz Buzz 数列と変換規則を扱うfizzbuzzクラス', () => {
  beforeEach(() => {
    // 前準備処理をここにまとめる
  })

  describe('数を文字列に変換する', () => {
    describe('3の倍数のときは数の代わりに「Fizz」に変換する', () => {
      test('3を渡すと文字列"Fizz"を返す処理', () => {
        // 実行 & 検証
        expect(fizzbuzz.convert(3)).toBe('Fizz')
      })

      test('判定処理（正解）', () => {
        expect(fizzbuzz.judge(3, 'Fizz')).toBe(true)
      })

      test('判定処理（不正解）', () => {
        expect(fizzbuzz.judge(3, '3')).toBe(false)
      })
    })

    describe('5の倍数のときは数の代わりに「Buzz」に変換する', () => {
      test('5を渡すと文字列"Buzz"を返す処理', () => {
        // 実行 & 検証
        expect(fizzbuzz.convert(5)).toBe('Buzz')
      })

      test('判定処理（正解）', () => {
        expect(fizzbuzz.judge(5, 'Buzz')).toBe(true)
      })

      test('判定処理（不正解）', () => {
        expect(fizzbuzz.judge(5, '5')).toBe(false)
      })
    })

    describe('3と5両方の倍数のときは数の代わりに「FizzBuzz」に変換する', () => {
      test('15を渡すと文字列"FizzBuzz"を返す', () => {
        // 実行 & 検証
        expect(fizzbuzz.convert(15)).toBe('FizzBuzz')
      })

      test('判定処理（正解）', () => {
        expect(fizzbuzz.judge(15, 'FizzBuzz')).toBe(true)
      })

      test('判定処理（不正解）', () => {
        expect(fizzbuzz.judge(15, '15')).toBe(false)
      })
    })

    describe('そのほかの数にの時はそのまま出力する', () => {
      test('1を渡すと文字列"1"を返す処理', () => {
        // 実行 & 検証
        expect(fizzbuzz.convert(1)).toBe('1')
      })

      test('判定処理（正解）', () => {
        expect(fizzbuzz.judge(1, '1')).toBe(true)
      })

      test('判定処理（不正解）', () => {
        expect(fizzbuzz.judge(1, '2')).toBe(false)
      })
    })
  })
})
