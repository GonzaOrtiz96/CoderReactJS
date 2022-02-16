import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// components
import NavBar from './components/navBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

import { ItemsProvider } from './components/itemContext/ItemContext';

//views
import Home from './views/home/Home';
import Recomendados from './views/recomendados/Recomendados';
import Nosotros from './views/nosotros/Nosotros';
import Error from './views/error/Error';


const App = () =>{
    return (
        <Router>
            <ItemsProvider>
                <div className="App">
                    <NavBar />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/recomendados' element={<Recomendados />}/>
                    <Route path='/nosotros' element={<Nosotros />}/>
                    <Route path='/detail/:id' element={<ItemDetailContainer />}/>
                    <Route path='*' element={<Error />}/>
                </Routes>
                </div>
            </ItemsProvider>
        </Router>
    );
};

export default App;
