# vue3-fizzbuzz

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 要件
> 最初のプレイヤーは「1」と数字を発言する。次のプレイヤーは直前のプレイヤーの次の数字に1を足した数字を発言していく。ただし、3で割り切れる場合は「Fizz」（Bizz Buzzの場合は「Bizz」）、5で割り切れる場合は「Buzz」、両者で割り切れる場合（すなわち15で割り切れる場合）は「Fizz Buzz」（Bizz Buzzの場合は「Bizz Buzz」）を数の代わりに発言しなければならない。発言を間違えた者や、ためらった者は脱落となる。

[wikiより](https://ja.wikipedia.org/wiki/Fizz_Buzz)

→"発言"をWebアプリで実装する。

最初のプレイヤーは「1」と数字を入力する。次のプレイヤーは直前のプレイヤーの次の数字に1を足した数字を入力していく。ただし、3で割り切れる場合は「Fizz」、5で割り切れる場合は「Buzz」、両者で割り切れる場合（すなわち15で割り切れる場合）は「Fizz Buzz」を数の代わりに入力しなければならない。入力を間違えた者や、ためらった者は脱落となる。


## TODO
=====================

### ロジック部分（FizzBuzzクラス）
- [ ]　数を文字列に変換する
    - [ ] 1を渡すと文字列"1"を返す
    - [ ] 2を渡すと文字列"2"を返す

- [ ] 3の倍数のときは数の代わりに「Fizz」に変換する
    - [ ] 3を渡すと文字列"Fizz"を返す

- [ ] 5の倍数のときは数の代わりに「Buzz」に変換する
    - [ ] 5を渡すと文字列"Buzz"を返す

- [ ] 3と5両方の倍数のときは数の代わりに「FizzBuzz」に変換する
    - [ ] 15を渡すと文字列"FizzBuzz"を返す

- [ ] 数字と答えを入力して、正解か判定する
    - 正しければtrue、不正解であればfalseを返す


### 表示部分（.vueファイル）
- 入力し、Enterをおしたときに正解であれば次の入力フォームをっ表示させる
- 入力し、Enterをおしたときに不正解であれば赤字で正解を表示する
