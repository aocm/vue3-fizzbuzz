
class fizzbuzz {
  constructor() { }

  static convert(num: number): string{
    if (num % 15 === 0) {
      return "FizzBuzz";
    }
    if (num % 3 === 0) {
      return "Fizz";
    }
    if (num % 5 === 0) {
      return "Buzz";
    }
    return String(num);
  }

  static judge(index: number, input: string){
    return true
  }
}

export default fizzbuzz
