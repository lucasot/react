import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/Shop/ItemListContainer';

function App() {
  return ( 
    <div className = "App">
      <NavBar />
      <ItemListContainer greeting = 'Bienvenido a mi Tienda' user ='Lucas' />
    </div>
  );
}

export default App;