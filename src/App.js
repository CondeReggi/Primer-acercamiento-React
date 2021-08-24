import react, {useState} from 'react';
import NavbarComponent from './components/Nav/navbar';
import TargetPokemon from './components/Targeta/targeta';

import './App.css';

const fetchURL = async() => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/1')
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error)
  }
}

fetchURL();

function App() {
  return (
    <div className="App-content">
      <NavbarComponent/>
      <h1>BIENVENIDO A MI COSO</h1>
      <p>Este es mi primera pagina con React.js <strong>TODO PARA TACHAR DE LA LISTA</strong></p>
      <TargetPokemon/>
    </div>
  );
}

export default App;
