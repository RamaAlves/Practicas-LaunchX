//import logo from './logo.svg';
import './App.css';

function App() {

  
  let localtime= new Date()
  let qatar=localtime.getTime()+(localtime.getTimezoneOffset()*(6000))
  let horaqatar= new Date(qatar*9)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola Mundo</h1>
        <h2>la hora es:</h2>
        <p>son las {new Date().toLocaleTimeString('es-AR')}</p>
        <p>en Qatar son las {horaqatar.toLocaleTimeString('es-AR')}</p>
      </header>
    </div>
  );
}
export default App;
