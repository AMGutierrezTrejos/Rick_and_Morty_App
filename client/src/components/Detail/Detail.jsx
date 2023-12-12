import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./detail.module.css";

const URL = "http://localhost:3001/rickandmorty/character";


export default function Detail(props) {

   const { id } = useParams(); //* { id: 429 }
   const navigate = useNavigate();
   const idNumber = Number(id);
   // console.log(id);
   const [character, setCharacter] = useState({});
   useEffect(() => {
      axios(`${URL}/${id}`)

         .then(
            ({ data }) => {
               if (data.name) {
                  console.log(data);
                  setCharacter(data);
               } else {
                  window.alert('No hay personajes con ese ID');
               }
            }
         );
      return setCharacter({});
   }, [id]);

  return (
   <div>
      <div className={styles.container}>

         <div className={styles.container__img}>
            <img
               className={styles.container__img_img}
               src={character.image}
               alt={character.name}
            />
         </div>
            <div className={styles.container__text}>
               {/* <h1>Details:</h1> */}
               <h2>{character.name}</h2>
               <h3>Status: {character.status}</h3>
               <h3>Specie: {character.species}</h3>
               <h3>Gender: {character.gender}</h3>
               <h3>Origin: {character.origin?.name}</h3>
               <h3>Location: {character.location?.name}</h3>
            </div>
      </div>
   </div>
  );
}