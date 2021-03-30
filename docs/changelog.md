# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2021-03-30
### Changed
- 以下の理由からyarn から npmに変更
    - yarnだと `EEXIST: file already exists, copyfile xxxxx `のようなエラーがでる。エラーの直接な原因がわからなかったが、マウントしているとでてくるエラー、という風に調べてて感じた。Dockerでyarnを利用するのが問題あるのかもしれない。
    - npx sb@next init コマンドを実行するにあたって、yarn.lockが残っていると依存関係の問題でエラーになる（npxと同等とされるyarn -s runではダウンロードしてくれないためそのままでは実行できない。）
    - yarn.lockとpackage-lock.jsonは両方あると問題になるケースがあるらしい（詳細は調べていない）
    - 開発環境のコンテナは使いまわすことを想定しないような作りにしてたので、yarnのうま味を活かしきれない。

## 2021-03-25
### Added
- init.md参照