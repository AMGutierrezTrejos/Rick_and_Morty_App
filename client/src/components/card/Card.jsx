import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import style from "./Card.module.css";

export default function Card(props) {
  //* props = { id, name, status, ... } => character

  const dispatch = useDispatch(); //* Function({type, payload})
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    //* console.log('favoritos: ',myFavorites);
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  

  const myFavorites = useSelector((state) => state.myFavorites);
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.container}>
      <div className={style.container__div}>
        {isFav ? (
          <button onClick={handleFavorite} className={style.container__div_button_cor}>❤️</button>
        ) : (
          <button onClick={handleFavorite}className={style.container__div_button_cor}>🤍</button>
        )}
        <button className={style.container__div_buttonx} onClick={() => props.onClose(props.id)}>✖️</button>
        
        <div className={style.container__div_text}>
        <h2>{props.name}</h2>
         <h4>Id: {props.id}</h4>
         <h4>Status: {props.status}</h4>
         <h4>Specie: {props.species}</h4>
         <h4>Gender: {props.gender}</h4>
         <h4>Origin: {props.origin}</h4>
        <Link to={`/detail/${props.id}`}>
          <img className={style.container__div_img}  src={props.image} alt={props.name} />
        </Link>
        </div>
      </div>
    </div>
  );
}
