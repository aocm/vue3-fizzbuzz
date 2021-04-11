# vue3-fizzbuzz

## 環境構築（Dockerコンテナ利用）
1. Dockerが利用できる状態にしてください。
1. VSCodeをインストールしてください。（なるべく最新版で。記載時点は1.55）
1. VSCodeの拡張機能「ms-vscode-remote.remote-containers」（Remote Containers）をいれてください。
1. Remote ContainersのOpen Folder in Containersを実行して、このリポジトリをCloneしたディレクトリを選択してください。
    - コンテナ内で
1. コンテナ内で`npm install` を実行します。
1. `npm run serve` で起動を確認します。

### 補足
- Veturという拡張機能をコンテナ内に取り入れていますが、それについては`vue3-fizzbuzz\.devcontainer\devcontainer.json`に記載しています。このファイルにRemote Containersの設定が書かれています。
- ホストのポート開放をVSCodeのRemote Containersに任せているため、yml等に明示的に記載していません。
- yarn でも問題ありませんが今回はnpmでやっています。※npxコマンドをしたため

## 起動方法
### 画面の起動
1. Cloneしたディレクトリに移動する
1. (初回、もしくはpackage.jsonに変更があった場合) `npm install`
1. npm run serve

### Storybookの起動
1. Cloneしたディレクトリに移動する
1. (初回、もしくはpackage.jsonに変更があった場合) `npm install`
1. npm run storybook


### テストの実行
- 単体テスト `npm run test:unit`
- 単体テスト（モジュールのみ） `npm run test:util`
- 結合テスト 
    1. 開発コンテナで`npm run build`を実行し、distディレクトリを作成する。
    1. ビルド結果をもとに、次のコマンドを実行するとNGINX＋Cypressを起動する。`docker-compose  -f integration-docker-compose.yml up `

## CI/CD
未検討

---

## 要件
> 最初のプレイヤーは「1」と数字を発言する。次のプレイヤーは直前のプレイヤーの次の数字に1を足した数字を発言していく。ただし、3で割り切れる場合は「Fizz」（Bizz Buzzの場合は「Bizz」）、5で割り切れる場合は「Buzz」、両者で割り切れる場合（すなわち15で割り切れる場合）は「Fizz Buzz」（Bizz Buzzの場合は「Bizz Buzz」）を数の代わりに発言しなければならない。発言を間違えた者や、ためらった者は脱落となる。

[wikiより](https://ja.wikipedia.org/wiki/Fizz_Buzz)

→"発言"をWebアプリで実装する。

最初のプレイヤーは「1」と数字を入力する。次のプレイヤーは直前のプレイヤーの次の数字に1を足した数字を入力していく。ただし、3で割り切れる場合は「Fizz」、5で割り切れる場合は「Buzz」、両者で割り切れる場合（すなわち15で割り切れる場合）は「Fizz Buzz」を数の代わりに入力しなければならない。入力を間違えた者や、ためらった者は脱落となる。


## TODO
=====================

### ロジック部分（FizzBuzzクラス）
- [x]　数を文字列に変換する
    - [x] 1を渡すと文字列"1"を返す
    - [x] 2を渡すと文字列"2"を返す

- [x] 3の倍数のときは数の代わりに「Fizz」に変換する
    - [x] 3を渡すと文字列"Fizz"を返す

- [x] 5の倍数のときは数の代わりに「Buzz」に変換する
    - [x] 5を渡すと文字列"Buzz"を返す

- [x] 3と5両方の倍数のときは数の代わりに「FizzBuzz」に変換する
    - [x] 15を渡すと文字列"FizzBuzz"を返す

- [x] 数字と答えを入力して、正解か判定する
    - 正しければtrue、不正解であればfalseを返す


### 表示部分（.vueファイル）
- [ ] 入力し、Enterをおしたときに正解であれば次の入力フォームを表示させる
- [ ] 入力し、Enterをおしたときに不正解であれば赤字で正解を表示する
