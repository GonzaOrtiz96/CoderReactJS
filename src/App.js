import React from 'react';
import './App.css';

// components
import NavBar from './components/navBar/NavBar';
/* import ListContainer from './components/itemListContainer/itemListContainer';
 */
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

const App = () =>{
    return (
        <div className="App">
        <NavBar />
        {/* <ListContainer />   */}  
        <ItemDetailContainer />
        </div>
    );
};

export default App;
