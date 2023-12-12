import React from "react";
import styles from "./About.module.css";
import { FaGithub } from "react-icons/fa6";
import { TbArrowBackUp, TbBrandRedux } from "react-icons/tb";
import {FaLinkedin,  FaHtml5, FaCss3Alt, FaReact, FaNodeJs  } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { IoLogoJavascript } from "react-icons/io5";


const avatar = '../public/avatar_maurog.png';
const imgHenry = 'https://avatars.githubusercontent.com/u/57154655?s=280&v=4'

export default function About() {
  const navigate = useNavigate();
  const comeback = () => {
    navigate("/home");
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container__img}>
          <img className={styles.container__img_img} src={avatar} alt="avatar" />
        </div>
        <div className={styles.container__text}>
          {<h1>Details:</h1>}
          <h2>Arlex Mauricio Gutierrez</h2>
          <div className={styles.container__education}>

          <h3>Education:</h3>
          <h4> Bootcamp Henry - Student</h4>
          </div>
          <h3>Skills: </h3>
          <div className={styles.container__icons}>
            <FaHtml5 className={styles.container__icons_hmtl} />
            <FaCss3Alt className={styles.container__icons_css} />
            <IoLogoJavascript className={styles.container__icons_javascript} />
            <FaReact className={styles.container__icons_react} />
            <TbBrandRedux className={styles.container__icons_redux} />
            <FaNodeJs className={styles.container__icons_node} />
            <SiPostgresql   className={styles.container_icons_BiLogoPostgresql} />
          </div>
          {/* <h3>Experience:</h3>
          <h4>Undefined</h4> */}
          <h3>Origin:</h3>
          <h4>Cali, Colombia</h4>
          <h3>Social Networks: </h3>
          <div className={styles.containerforicon}>
            <a
              href="https://www.linkedin.com/in/arlexmauriciogutierreztrejos/"
              target="_blank"
              className={styles.containerforicon__icon}
            >
              <FaLinkedin className={styles.containerforicon__icon_linkdin} />
            </a>
            <a
              href="https://github.com/AMGutierrezTrejos"
              target="_blank"
              className={styles.containerforicon__icon}
            >
              <FaGithub className={styles.containerforicon__icon_github} />
            </a>
          </div>
        </div>
      </div>
      <TbArrowBackUp
        className={styles.container__icon}
        id={styles.comeback}
        onClick={comeback}
      />
    </div>
  );
}






// import React from 'react';
// import styles from './About.module.css';


// const AboutMe = '../public/avatar_maurog.png';
// const github = 'https://github.com/AMGutierrezTrejos';

// export default function About (props) {
   
//     return (
//         <section className={styles.about}>
//             <div className={styles.main}>
//                 <img src= {AboutMe} alt='About Me' />
//                 <div className={styles.aboutText}>
//                     <h1><strong>About Me</strong></h1>
//                     <h5><strong>Full stack developer</strong></h5>

//                     <p><strong>Santiago de Cali, es un distrito de Colombia y capita</strong></p>
//                     <a href={github} target="_blank" rel="noopener noreferrer">
//                     <button>GitHub</button>
//                     </a>               
//        </div>
//             </div>
//         </section>

//     );
//  }
 


