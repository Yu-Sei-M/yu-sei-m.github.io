author: Yu-Sei
summary: Reactハンズオンの事前準備
id: react-hands-on
categories: react,tutorial
environments: Web
status: Draft
feedback link: https://github.com/Yu-Sei-M/yu-sei-m.github.io/issues
analytics account:

# ハンズオン｜はじめて学ぶReact

## はじめに
Duration: 0:01:00

Positive
: 説明：今回のハンズオンでは、Reactアプリ開発の基本を確認しながら、作成から公開までを通しで進めていきます。途中で詰まった場合はDiscordに投稿してください。

### ハンズオンの流れ
1. はじめに（ハンズオンの流れ）
2. アプリ作成コマンドの実行と説明
3. 作成されたアプリの構造の説明
4. Reactアプリ起動コマンドの確認
5. 表示されているテキストの編集
6. 表示されているデザインの編集
7. 表示に簡易ログイン機能を実装
8. コンポーネントの作成と読み込み
9. Reactアプリのビルドコマンド実行
10. 初心者が混乱するポイントの確認

## アプリ作成コマンドの実行と説明
Duration: 0:03:00

Positive
: 説明：Reactアプリはコマンドで作成できます。コマンドはデフォルトで入っているものではなく、インターネットでダウンロードできるFacebook製の外部コマンドです。

```console
npx create-react-app react-practice && cd $_
```

## 作成されたアプリの構造の説明
Duration: 0:02:00

Positive
: 説明：コマンド一つでアプリの雛形が完成しますが、いきなり編集を始めるのではなく、中身について大体のイメージができていることが大切です。

|名前|説明|
| --- | --- |
|README.md|このディレクトリのアプリの説明などを書く|
|package.json|このアプリのライブラリや各種情報を書く|
|yarn.lock|このアプリの利用ライブラリの依存関係が書かれている|
|node_modules|このアプリが利用しているライブラリが入っている|
|src|このアプリを開発するときに書くコードやプログラムが入っている|
|public|静的サイトを公開したいときにファイルを配置する|

## Reactアプリ起動コマンドの確認
Duration: 0:01:00

Positive
: 説明：ローカルサーバーを起動すると開発環境で開発しているReactアプリをブラウザで確認できます。

```console
npm start
```

## 表示されているテキストの編集
Duration: 0:03:00

Positive
: 説明：Reactアプリを開発するときに大切になるjsファイルの中身を確認し、基本的な構成要素を説明できるようになりましょう。

`App.js`
```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

## 表示されているデザインの編集
Duration: 0:02:00

Positive
: 説明：Reactアプリの表示画面の見た目を整えるためにどこをどのように編集すれば良いかを押さえましょう。

`App.css`
```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

```

## 表示に簡易ログイン機能を実装
Duration: 0:03:00

Positive
: 説明：ReactアプリでJavaScriptを記述し、プログラミングを組み合わせる方法を確認し、いつでも追加実装できるようにポイントを押さえましょう。

```js
const checkIn = () => {
  var pass = prompt("パスワードを入力して下さい:","");
  if (pass != null) window.location.href = pass;
}
```

## コンポーネント作成と導入
Duration: 0:03:00

Positive
: 説明：Reactアプリ開発においてなぜコンポーネントを作成することが大切なのか理解し、今後はコンポーネントを活用できるようになりましょう。

```console
mkdir components
touch components/header.js
```

## Reactのビルドコマンド実行
Duration: 0:02:00

Positive
: 説明：Reactアプリを公開するときのオーソドックスな方法を学びます。

```console
npm build
```

## 初心者が混乱するポイント
Duration: 0:05:00

Positive
: 説明：初心者がReactを学習するときにわからなくなりがちなところをピックアップします。

- ライブラリの利用方法の揺らぎ
- コンポーネントの定義の揺らぎ
- 関数の書き方の揺らぎ