import fizzbuzz from '@/modules/FizzBuzz';

describe('FizzBuzz', () => {
  it('1を渡すと文字列1を返す', () => {
    
    expect(fizzbuzz.convert(1)).toBe('1')
  })
})
