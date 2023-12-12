import Card from "../card/Card.jsx";
import style from "./cards.module.css";

export default function Cards({ characters, onClose }) {
  // console.log(characters);
  //* props = { characters: [ --- ] }
  //* characters = [ {R}, {M}, {B}, {S} ]
  return (
    <div className={style.container}>
      {!characters.length ? (
        <div className={style.container__mensajeinicio}>
          <p className={style.container__mensajeinicio_text}>
          Currently no elements inserted, pressures <button className={style.container__button}>Add</button> to add
            a new Character or you can press on <button className={style.container__button} >Random</button>
            to get a random Character
          </p>
        </div>
      ) : (
        characters.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
          />
        ))
      )}
    </div>
  );
}
