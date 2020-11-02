author: Yu-Sei
summary: Reactハンズオンの事前準備
id: how-to-install-nodejs
categories: react,tutorial
environments: Web
status: Published
feedback link: https://github.com/Yu-Sei-M/yu-sei-m.github.io/issues
analytics account:

# 事前準備｜はじめて学ぶReact

## 自分に必要な準備をチェック
Duration: 0:03:00

### OS別に現状に合わせた作業スタート地点が異なります

Negative
: コマンドラインを開いて、下記のコマンドを実行してください。

```console
node -v
```

nodeのバージョンが表示されたらあなたのパソコンにはnodeがインストールされています。
以下のような表示になる場合は、あなたのパソコンにはnodeがまだ入っていません。
この情報をもとに、自分の該当するボタンを押して、Nodeのバージョンをハンズオンで使用するものに変更しましょう。

Negative
: nodeのバージョンを10.19.0にしてください。

| Node有無 | Win | Mac |
| ---------- | ---- | ------ |
| Nodeまだない | <button>[こちら](https://techfun.cc/javascript/nodejs.html)</button> | <button>[こちら](https://yu-sei-m.github.io/how-to-install-nodejs/#1)</button> |
| Node入ってる | <button>[こちら](https://qiita.com/satoyan419/items/56e0b5f35912b9374305)</button> | <button>[こちら](https://qiita.com/bigplants/items/2d75bf552e0da4a7e822)</button> |

### ４つのうちいずれかの作業をした後にもう一度チェック

Negative
: コマンドラインを開いて、下記のコマンドを実行してください。

```console
node -v
```

以下のように出力されていれば問題ありません。

## Nodeをインストールしよう（Mac）
Duration: 0:05:00

### 【このページでやること】
- Homebrewのインストール
- Nodeのインストール
- Nodeのバージョン管理ツールのインストール
- Nodeのバージョンを変更

Positive
: このページはMacの方でNodeが入っていない人の作業の解説です。nodeのバージョンが10.19.0の人は次に進んでください。

`Homebrewのインストール`
```console
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Negative
: Homebrew（ホームブルー）は、コマンドラインで利用できるツールをインストールするツールです。つまり、HomebrewはMac（またはLinux）がデフォルトで備えていない便利なコマンドを導入できます。

`nodeのインストール`
```console
brew install node
```

## VSCodeをインストールしよう
Duration: 0:05:00

11月7日のハンズオンではVSCodeを利用します。

Positive
: このページはVSCodeが入っていない人のための解説をしています。普段から使っている人は次に進んでください。


## Netlifyに登録しよう
Duration: 0:05:00

11月7日のハンズオンではNelifyを利用します。

Positive
: このページはNetlifyのアカウントがない人のための案内です。普段から使っている人はこれで準備完了です。
