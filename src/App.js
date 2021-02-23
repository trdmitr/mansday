import logo from './fon.jpg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Поздравления с 23 февраля участников беседы Виталия Подземного</h2>
      </header>
      <BrowserRouter>
      <Home/>
      </BrowserRouter>,
      <footer className="App-header">
      <p>Отличное исполнение!</p>
      <a href="http://podzemny.ru/">На главную</a>
      </footer>
    </div>
  );
}

export default App;
