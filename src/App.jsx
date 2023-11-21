import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import axios from 'axios';

const URL = 'https://rickandmortyapi.com/api/character';


function App() {

   const [characters, setCharacters] = useState([]);

   
  
  
      function onSearch(id) {
         
         const characterId = characters.filter(char => char.id === Number(id))
         if(characterId.length){
            return alert(`${characterId[0].name} con id: ${id} ya se encuentra en la lista`)
         }

         axios(`${URL}/${id}`).then(
            ({ data }) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert('¡El id debe ser un numero entre 1 y 826!');
               }
            }
         );
      }

      const onClose = id => {
         setCharacters(characters.filter(char => char.id !== Number(id)));
      }


   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <hr />
         <Cards characters={characters} onClose={onClose}/>
        
      </div>
   );
}

export default App;
