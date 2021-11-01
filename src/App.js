import logo from './logo.svg';
import './App.css';

function App() {

  let customID = process.env.REACT_APP_CUSTOM_ID;
  let apiEndpoint = process.env.REACT_APP_API_KEY;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Custom Id: {customID || 'No custom id'}
        </p>
        <p>
          API endpoint: {apiEndpoint || 'No endpoint'}
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
