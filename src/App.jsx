import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About.jsx';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/Deatil/Deatil.jsx';
import Nav from './components/nav/Nav.jsx';
import NotFound from './components/NotFound/NotFound.jsx';



const URL = 'https://rickandmortyapi.com/api/character';


function App() {

   const navigate = useNavigate();
   const location = useLocation();

   const [characters, setCharacters] = useState([]);

  
  
   function onSearch(id) {
      const characterId = characters.filter(
         char => char.id === Number(id)
      )
      if(characterId.length) {
         return alert(`${characterId[0].name} ya existe!`)
      }
      axios(`${URL}/${id}`)
         .then(
            ({ data }) => {
               if (data.name) {
                  // console.log(data)
                  setCharacters([...characters, data]);
               } else {
                  window.alert('¡El id debe ser un número entre 1 y 826!');
               }
            });
      navigate("/home");
   }

      
      const onClose = id => {
         setCharacters(characters.filter(char => char.id !== Number(id)));
      }


   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route 
               path="/home"
               element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route
               path="/about"
               element={<About />}
            />
            <Route
               path="/detail/:id"
               element={<Detail />}
            />
            <Route
               path="*"
               element={<NotFound />}
            />
         </Routes>

         <hr />
      </div>
   );
}

export default App;
