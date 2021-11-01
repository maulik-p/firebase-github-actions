import logo from './logo.svg';
import './App.css';

function App() {
  const envs = process.env;
  let verb = Object.keys(envs).reduce(key => (acc, key) => {
    return acc + ` ${key}: ${envs[key]} \n`
  });
  let customID = process.env.CUSTOM_ID;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ENV Test: {customID || 'No custom id'}
          <pre>
            {verb}
          </pre>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ENV React
        </a>
      </header>
    </div>
  );
}

export default App;
