author: Yu-Sei
summary: Reactハンズオンの事前準備
id: how-to-install-nodejs
categories: react,tutorial
environments: Web
status: Published
feedback link: https://github.com/Yu-Sei-M/yu-sei-m.github.io/issues
analytics account:

# 事前準備｜はじめて学ぶReact

## 自分に必要な準備を確認
Duration: 0:03:00

### OS別に現状に合わせた作業スタート地点が異なります

Negative
: 指示：コマンドラインを開いて、下記のコマンドを実行してください。

```console
node -v
```

次のような表示になる場合は、あなたのパソコンにはnodeがまだ入っていません。

Windowsの方は**作業A**を、Macの方は**作業B**を進めてください。

次のようにnodeのバージョンが表示されたらあなたのパソコンにはnodeがインストールされています。

Negative
: 指示：作業A~Dのうち自分に該当するものを開き、記事の内容を元にnodeのバージョンを10.19.0にしてください。

| Node有無 | Win | Mac |
| ---------- | ---- | ------ |
| まだない | [作業A](https://techfun.cc/javascript/nodejs.html) | [作業B](https://yu-sei-m.github.io/how-to-install-nodejs/#1) |
| 入ってる | [作業C](https://qiita.com/satoyan419/items/56e0b5f35912b9374305) | [作業D](https://qiita.com/bigplants/items/2d75bf552e0da4a7e822) |

### ４つのうちいずれかの作業をした後にもう一度チェック

Negative
: 指示：コマンドラインを開いて、下記のコマンドを実行してください。

```console
node -v
```

以下のように出力されていれば問題ありません。

## Nodeのインストール（Mac）
Duration: 0:05:00

11月7日は、**エンジニアが仕事で開発するときに限りなく近い状態でハンズオンを実施**します。初心者だからと仕事をする時とは違う簡易な方法で学んでいては、効率が悪いからです。環境構築は始めたての人にとってはかなり難易度の高い作業ですが、なるべく丁寧に完了までの道筋を整理したので、ぜひ頑張って乗り越えてください。

Positive
: このページはMacの方でNodeが入っていない人の作業の解説です。nodeのバージョンが10.19.0の人は次に進んでください。

### 【このページでやること】
- Homebrewのインストール
- Nodeのインストール
- Nodeのバージョン管理ツールのインストール
- Nodeのバージョンを変更

Positive
: Homebrew（ホームブルー）は、コマンドラインで利用できるツールをインストールするツールです。つまり、HomebrewはMac（またはLinux）がデフォルトで備えていない便利なコマンドを導入できます。

Negative
: 指示：次の５つのコマンドを順番にターミナルで実行してください。

`Homebrewのインストール`
```console
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

`nodeのインストール`
```console
brew install node
```

`nのインストール`
```console
npm -g i n
```

`nodeのバージョン変更`
```console
sudo n 10.19.0
```

`nodeのバージョン確認`
```console
node -v
```


## VSCodeのインストール
Duration: 0:05:00

11月7日のハンズオンではVSCodeを利用します。

Positive
: このページはVSCodeが入っていない人のための解説をしています。普段から使っている人は次に進んでください。使い方も説明していますが、ハンズオンで口頭で説明するので時間がない方はインストールのみでも構いません。

### VSCodeのダウンロード
#### STEP1
Negative
: 指示：公式ページから、最新版のVSCodeをダウンロードしましょう。
- [VSCodeダウンロード](https://code.visualstudio.com)

ちなみにWinでもMacでも使えますのでご安心ください。
![MacでもWinでも使える統合開発ソフト](./images/vsc-01.gif)

#### STEP2
Negative
: 指示：ダウンロードが終わったら、そのファイルを開いてMacならDockに、WinならTaskBarに追加してください。

これでいつでもVSCodeをクリック起動できます！
追加の仕方は簡単で、初めて開いたときに次のように操作するだけでOKです。

以下の方法は、VSCode以外のソフトについても同じように使えますので、ぜひ覚えておいてください。

##### MacでDockに追加する手順
1. 開いているVSCodeのアイコン（Dock）を右クリックしてください。
2. 「オプション」にカーソルを合わせて「Dockに追加」をクリックしてください。
3. これでVSCodeを閉じてもDockにVSCodeが残存します。

![MacでVSCodeをDockに追加](./images/vsc-02.gif)

##### WinでTaskBarに追加する手順
1. 開いているVSCodeのアイコン（TaskBar）を右クリックしてください。
2. 「タスクバーに追加」をクリックしてください。
3. これでVSCodeを閉じてもTaskBarにVSCodeが残存します。

![WinでVSCodeをTaskBarに追加](./images/vsc-03.gif)

### 起動と画面の説明
#### STEP3
Macの人はDockの、Winの人はTaskBarのVSCodeをクリックして起動してください。
ちなみにMacの場合は、`command + space` で表示される検索バーに「VSC」と入力してエンターを押してもすぐに起動できます。

![Macでショートカット起動](./images/vsc-04.gif)

#### STEP4
こちらはVSCodeの画面です。
この短い動画と同じように操作して同じ画面にしてください。
まずは、左バーの上のボタンを押してフォルダ一覧をみれるようにしましょう。

![左の縦長メニューバーの一番上をクリック](./images/vsc-05.gif)

次にターミナル（Terminal）を開きます。
このVSCodeの下側の部分でパソコンをコマンドで操作できます。
（パソコンのコマンド操作をしたことがない人は、意味がわからなくてもまだ大丈夫です）

![VSCodeでターミナルを開く](./images/vsc-06.gif)

実際のフォルダを開くと、次のようになります。

![VSCodeでフォルダを開く](./images/vsc-07.jpg)

左側にディレクトリの中身が表示され、新規作成やコピー、削除の他、名前の変更などの操作が可能になっています。

右側の上のスペースは、プログラムファイルにコードを記述するときにエディターとして使うスペースです。
右側の下には、主にコマンドラインを表示し、各種コマンドを実行します。

### おつかれ様でした！
VSCodeのインストールはこれで完了です。次に進みましょう。

## Netlifyアカウント作成
Duration: 0:03:00

11月7日のハンズオンではNelifyを利用します。

Positive
: このページはNetlifyのアカウントがない人のための案内です。普段から使っている人はこれで準備完了です。

### Netlifyのアカウント開設
Negative
: 指示：公式ページからNetlifyに登録しましょう。
- [ネットリファイ登録](https://app.netlify.com/signup/email)

メールアドレスとパスワードを入力すると完了します。
![ネットリファイ登録画面](./images/netlify-signup.png)

Negative
: 指示：メールが届くので、認証リンクをクリックしておきましょう。


## これにて準備完了です
Duration: 0:01:00

11月7日のハンズオンは初心者向けの内容ですが、事前に知識があるに越したことはありません。

パソコンを買ったばかりの人や、HTMLを見たこともない人、プログラミングに一切触れたことがない人が一緒に手を動かして作業するのは難しいので、以下のコンテンツで自学しておくと良いでしょう。

Positive
: 以下はHTML/CSSとJavaScriptを見たことがない人のための案内です。

流し見て聞いておくだけでもかなり変わってくるので、少し触った程度の方もぜひ復習しておいてください。

- [はじめてのHTML](https://dotinstall.com/lessons/basic_html_v5)
- [はじめてのCSS](https://dotinstall.com/lessons/basic_css_v5)
- [はじめてのJavaScript](https://dotinstall.com/lessons/basic_javascript_v4)

２倍速で再生すると１時間ほどでキャッチアップできます。