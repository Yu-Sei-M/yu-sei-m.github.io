import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          どこよりも効率よくReactを学んでいきましょう
        </p>
        <a
          className="App-link"
          href="https://yu-sei-m.github.io/react-hands-on"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="App-link"
          href="https://yu-sei-m.github.io/react-challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Challenge
        </a>
      </header>
    </div>
  );
}

export default App;