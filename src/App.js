import logo from './fondo.jpeg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primera pagina con React.
        </p>
        <a
          className="App-link"
          href="https://github.com/GonzaOrtiz96?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mis trabajos finales de otros cursos
        </a>
      </header>
    </div>
  );
}

export default App;
