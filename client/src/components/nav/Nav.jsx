import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import styles from "./Nav.module.css";



export default function Nav(props) {

  return (
<div>

     <header>
      <NavLink to="/home" className={styles.logo}>
         <img src="../public/icono_banner.png" alt="logo-img"/>
         <h2 className ="Nombre de la web">Wabalabadubdub</h2>
      </NavLink>
      <nav>
         <NavLink to="/home" className={styles.navLink}>
            <button>Home🏠</button>
         </NavLink>
         <NavLink to="/favorites" className={styles.navLink}>
            <button>Favorites⭐</button>
         </NavLink>
         <NavLink to="/about" className={styles.navLink}>
            <button>About😎</button>
         </NavLink>
         <button onClick={props.logout} className={styles.navLink}>Logout ❌</button>
      </nav>
     </header>

      <div className={styles.searchBar}>
         <SearchBar onSearch={props.onSearch} />
      </div>
</div>

  );
}