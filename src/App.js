import logo from './logo.svg';
import './App.css';

const checkIn = () => {
  var pass = prompt("パスワードを入力して下さい:","");
  if (pass != null) window.location.href = pass;
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <p>
          どこよりも効率よくReactを身につけましょう
        </p>
        <a
          className="App-link"
          href="https://yu-sei-m.github.io/how-to-install-nodejs/#0"
        >
          Prepare
        </a>
        <br/>
        <a
          className="App-link"
          onClick={()=>checkIn()}
        >
          Learn
        </a>
        <br/>
        <a
          className="App-link"
          onClick={()=>checkIn()}
        >
          Challenge
        </a>
      </header>
    </div>
  );
}

export default App;