import React, {useState} from 'react';
import './App.css';

// components
import NavBar from './components/NavBar';
import ItemCount from './components/itemCount';
import ListContainer from './components/itemListContainer';

const App = () =>{
    return (
        <div className="App">
        <NavBar />
        <article className="container">
                <div className="row">
                    <div className="col">
                    <ListContainer
                        img="img1.jpeg"
                        titulo="Abrigo Rosa"
                        cuerpo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra, dolor in ullamcorper facilisis, massa enim iaculis dui, eget convallis velit lacus quis nulla."
                    /></div>
                    <div className="col">
                    <ListContainer
                        img="img1.jpeg"
                        titulo="Abrigo Rosa"
                        cuerpo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra, dolor in ullamcorper facilisis, massa enim iaculis dui, eget convallis velit lacus quis nulla."
                    /></div>
                    <div className="col">
                    <ListContainer
                        img="img1.jpeg"
                        titulo="Abrigo Rosa"
                        cuerpo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra, dolor in ullamcorper facilisis, massa enim iaculis dui, eget convallis velit lacus quis nulla."
                    /></div>
                    <div className="col">
                    <ListContainer
                        img="img1.jpeg"
                        titulo="Abrigo Rosa"
                        cuerpo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra, dolor in ullamcorper facilisis, massa enim iaculis dui, eget convallis velit lacus quis nulla."
                    /></div>
                    <div className="col">
                    <ListContainer
                        img="img1.jpeg"
                        titulo="Abrigo Rosa"
                        cuerpo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra, dolor in ullamcorper facilisis, massa enim iaculis dui, eget convallis velit lacus quis nulla."
                    /></div>
                    <div className="col">
                    <ListContainer
                        img="img1.jpeg"
                        titulo="Abrigo Rosa"
                        cuerpo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra, dolor in ullamcorper facilisis, massa enim iaculis dui, eget convallis velit lacus quis nulla."
                    /></div>
                </div>
        </article>
        
        </div>
    );
};

export default App;
