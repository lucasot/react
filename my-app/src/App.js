import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from './Components/Shop/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from "./Components/Map";


function App() {
  let array = [
    {nombre: "Juan", edad: 27, ocupacion: "Farmaceutico"},
    {nombre: "Jose", edad: 19, ocupacion: "Desempleado"},
    {nombre: "Lucas", edad: 26, ocupacion: "Abogado"},
  ];
  return ( 
    <div className = "App">
      <NavBar/>
      {/* <ItemListContainer greeting = 'Bienvenido a mi Tienda' user ='Lucas' /> */}
      <ItemListContainer/>
      {array.map((obj) =>(
        <Map elements = {obj}/>
      ))}
    </div>
  );
}

export default App;