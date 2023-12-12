import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import style from "./Nav.module.css";
import { CiLogout } from "react-icons/ci";




export default function Nav(props) {

   return (
      <div>
        <div className={style.container}>
         <NavLink to="/home"
         className={style.container__home}>
            <img src="../public/icono_banner.png" alt="logo-img"/> 
         </NavLink>       
          <NavLink to="/home">
            <button className={style.container__button}>Home</button>
          </NavLink>
          <NavLink to="/favorites">
            <button className={style.container__button}>Favorites</button>
          </NavLink>
          <NavLink to="/about">
            <button className={style.container__button}>About Me</button>
          </NavLink>
          
        <div className={style.searchbar}>
          <SearchBar onSearch={props.onSearch} onClear={props.onClear} />
        </div>
          <button onClick={props.logout} className={style.container__button} id={style.container__button_logout}><CiLogout className={style.container__icons_logout}/> </button>
        </div>
      </div>
    );
}