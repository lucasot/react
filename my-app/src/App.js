import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from './Components/Shop/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return ( 
    <div className = "App">
      <NavBar/>
      {/* <ItemListContainer greeting = 'Bienvenido a mi Tienda' user ='Lucas' /> */}
      <ItemListContainer/>
    </div>
  );
}

export default App;