import './App.css';
import NavBar from './components/NavBar';
import ListContainer from './components/itemListContainer';

function App() {
    return (
        <div className="App">
        <NavBar/>
        <ListContainer
            img="img1.jpeg"
            titulo="Abrigo Rosa"
        />
        <ListContainer
            img="img1.jpeg"
            titulo="Abrigo Rosa"
            cuerpo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra, dolor in ullamcorper facilisis, massa enim iaculis dui, eget convallis velit lacus quis nulla."
        />
        <ListContainer
            img="img1.jpeg"
            titulo="Abrigo Rosa"
            cuerpo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra, dolor in ullamcorper facilisis, massa enim iaculis dui, eget convallis velit lacus quis nulla."
        />
        <ListContainer
            img="img1.jpeg"
            titulo="Abrigo Rosa"
            cuerpo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra, dolor in ullamcorper facilisis, massa enim iaculis dui, eget convallis velit lacus quis nulla."
        />
        <ListContainer
            img="img1.jpeg"
            titulo="Abrigo Rosa"
            cuerpo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra, dolor in ullamcorper facilisis, massa enim iaculis dui, eget convallis velit lacus quis nulla."
        />
        <ListContainer
            img="img1.jpeg"
            titulo="Abrigo Rosa"
            cuerpo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra, dolor in ullamcorper facilisis, massa enim iaculis dui, eget convallis velit lacus quis nulla."
        />
        </div>
    );
    }

export default App;
