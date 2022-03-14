import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// components
import NavBar from './components/navBar/NavBar';

//contex
import { ItemsProvider } from './components/cartContext/CartContext';

//views
import Home from './views/home/Home';
import Cart from './views/cart/Cart';
import Error from './views/error/Error';
import Category from './views/category/Category';
import Detail from './views/detail/Detail';




const App = () =>{
    return (
        <Router>
            <ItemsProvider>
                <div className="App">
                    <NavBar />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/detail/:id' element={<Detail />}/>
                    <Route path='/category/:tipo' element={<Category />}/>
                    <Route path='/cart' element={<Cart />} />
                    <Route path='*' element={<Error />}/>
                </Routes>
                </div>
            </ItemsProvider>
        </Router>
    );
};

export default App;
