import logo from './fon.jpg';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Home/>
    </div>
  );
}

export default App;
