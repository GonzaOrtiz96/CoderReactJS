import React from 'react';
import './App.css';

// components
import NavBar from './components/NavBar';
import ListContainer from './components/itemListContainer';

const App = () =>{
    return (
        <div className="App">
        <NavBar />
        <ListContainer />    
        </div>
    );
};

export default App;
