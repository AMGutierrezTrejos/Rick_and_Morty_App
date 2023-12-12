import React, { useEffect, useState } from "react";
import validation from "../../utils/validation";
import styles from "./form.module.css";
const banner = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png";
const wallpaper = "../public/login_background.png";
const gif = "../public/giphy_login.gif";



export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${wallpaper})`;
    return () => {
      document.body.style.backgroundImage = null;
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    
    <div className={styles.container}>
      <img
        src={banner}
        style={{width:"300px"}}
        alt=""
      />
      <form className={styles.container_form} onSubmit={handleSubmit}>
        {/* <label>Email: </label> */}
        <input
          className={styles.input}
          type="text"
          key="email"
          name="email"
          value={userData.email}
          placeholder="Email..."
          onChange={handleChange}
        />
        <p style={{ color: "lightgreen" }}>{errors.email ? errors.email : null}</p>

        {/* <label>Password: </label> */}
        <input
          className={styles.input}
          type="password"
          key="password"
          name="password"
          value={userData.password}
          placeholder="Password..."
          onChange={handleChange}
        />
        <p style={{ color: "lightgreen" }}>{errors.password && errors.password}</p>

        <button
          className={styles.button}
          type="submit"
          disabled={errors.email || errors.password}
        >
          Login
        </button>
      </form>
      <img 
        className={styles.gif}
        src={gif}
        alt=""
      />
    </div>
  );
}
