import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Clear, removeFav } from './redux/actions.js';
import About from './components/About/About.jsx';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import Form from './components/form/Form.jsx';
import Nav from './components/nav/Nav.jsx';
import NotFound from './components/notfound/NotFound.jsx';
import swal  from "sweetalert2";




const URL = "https://rickandmortyapi.com/api/character";

function App() {
   
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [characters, setCharacters] = useState([]);

  async function onSearch(id) {
     try {
        //* Verificar si existe character:
        const characterId = characters.filter(
           char => char.id === Number(id)
        )
        if(characterId.length) {
           return swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${characterId[0].name}  is already on the list`,
          }); 
        }

        const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        if (data.name) {
           setCharacters([...characters, data]);
           navigate("/home");
        } else {
            swal.fire("Character id not found");
        }
     } catch (error) {
         swal.fire("Character id not found");
     }
  }

  const onClose = (id) => {
     console.log(id);
     console.log(typeof id);
     setCharacters(characters.filter(char => char.id !== Number(id)));
     dispatch(removeFav(id));
  }

  //* Eliminar todos los personajes (boton clear)
  const actualRoute = window.location.pathname;
  if (actualRoute === "/not_specified_route") {
   // Mostrar la confirmación solo si estás en una ruta específica
   const confirmation = swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
   }).then((result) => {
     if (result.isConfirmed) {
       // Realizar la operación de eliminación
       setCharacters([]);
       dispatch(Clear());
       navigate("/home");
     } else {
      swal.fire({
         title: "Be careful next time",
         text: "you have to be careful where you click",
       });
     }
   });
 }const onClear = () => {
   if (characters.length > 0) {
     const firstConfirmation = swal
       .fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
       })
       .then((firstResult) => {
         if (firstResult.isConfirmed) {
           return swal.fire({
             title: "Second Confirmation",
             text: "Are you really, really sure?",
             icon: "warning",
             showCancelButton: true,
             confirmButtonColor: "#3085d6",
             cancelButtonColor: "#d33",
             confirmButtonText: "Yes, I'm sure!",
           });
         } else {
           // Confirmación cancelada (ya sea la primera o segunda)
           return null;
         }
       })
       .then((secondResult) => {
         if (secondResult && secondResult.isConfirmed) {
           return swal.fire({
             title: "Third Confirmation",
             text: "Are you absolutely sure?",
             icon: "warning",
             showCancelButton: true,
             confirmButtonColor: "#3085d6",
             cancelButtonColor: "#d33",
             confirmButtonText: "Yes, I'm absolutely sure!",
           });
         } else {
           // Confirmación cancelada (ya sea la segunda o tercera)
           return null;
         }
       })
       .then((thirdResult) => {
         if (thirdResult && thirdResult.isConfirmed) {
           // Realizar la operación de eliminación
           setCharacters([]);
           dispatch(Clear());
           navigate("/home");
         } else {
           // Tercera confirmación cancelada o ninguna confirmación exitosa
           if (!thirdResult) {
             swal.fire({
               title: "Be careful next time",
               text: "You have to be careful where you click",
             });
           }
         }
       });
   }
 };
//  const onClear = () => {
//    if (characters.length > 0) {
//      const firstConfirmation = swal
//        .fire({
//          title: "Are you sure?",
//          text: "You won't be able to revert this!",
//          icon: "warning",
//          showCancelButton: true,
//          confirmButtonColor: "#3085d6",
//          cancelButtonColor: "#d33",
//          confirmButtonText: "Yes, delete it!",
//        })
//        .then((firstResult) => {
//          if (firstResult.isConfirmed) {
//            // Primer nivel de confirmación exitoso, ahora mostrar la segunda confirmación
//            swal.fire({
//                title: "Second Confirmation",
//                text: "Are you really, really sure?",
//                icon: "warning",
//                showCancelButton: true,
//                confirmButtonColor: "#3085d6",
//                cancelButtonColor: "#d33",
//                confirmButtonText: "Yes, I'm sure!",
//              })
//              .then((secondResult) => {
//                if (secondResult.isConfirmed) {
//                  // Realizar la operación de eliminación
//                  setCharacters([]);
//                  dispatch(Clear());
//                  navigate("/home");
//                } else {
//                  // Segunda confirmación cancelada
//                  swal.fire({
//                    title: "Be careful next time",
//                    text: "You have to be careful where you click",
//                  });
//                }
//              });
//          }
//        });
//    }
//  };

  //* Login
  const [access, setAccess] = useState(false);
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = '123456';

  const login = async (userData) => {
     const { email, password } = userData;
     try {
        const URL = 'http://localhost:3001/rickandmorty/login/';
        const { data } = await axios(URL + `?email=${email}&password=${password}`);
        //* data = { access: true || false }
        if(data.access) {
           setAccess(data.access);
           navigate('/home');
        } else {
         swal.fire({
            title: "Oops...",
            text: "Your Email or Password is incorrect",
            icon: "question",
            footer: '<a href="#">Forgot your password?</a>'
          });
          };
        
     } catch (error) {
        alert(error.message);
     }
  }

  function logout() {
   const confirmation = swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!"
   }).then((result) => {
         if (result.isConfirmed) {
            setAccess(false);
            navigate("/");
         }else{
        swal.fire({
          title: "Not disconnected",
          text: "you can continue enjoying ",
          icon: "success"
        });
     }
   });
 }

  useEffect(() => {
     //* Logueo automático
     // !access && navigate('/home'); la / sola es para que toque hacer login y la /home para que directo se vaya al home
     !access && navigate('/');
  }, [access]);

  return (
     <div className='App'>
        {
           location.pathname !== "/" ? 
           (<Nav onSearch={onSearch} logout={logout} onClear={onClear}/>) : null
        }
        <Routes>
           <Route
              path="/"
              element={<Form login={login} />}
           />
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
              path="/favorites"
              element={<Favorites onClose={onClose} />} />
           <Route
              path="*"
              element={<NotFound />}
           />
        </Routes>
     </div>
  );
}

export default App;

