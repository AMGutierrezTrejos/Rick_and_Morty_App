import React from 'react';
import styles from './About.module.css';


const AboutMe = '../public/avatar_maurog.png';
const github = 'https://github.com/AMGutierrezTrejos';

export default function About (props) {
   
    return (
        <section className={styles.about}>
            <div className={styles.main}>
                <img src= {AboutMe} alt='About Me' />
                <div className={styles.aboutText}>
                    <h1><strong>About Me</strong></h1>
                    <h5><strong>Full stack developer</strong></h5>

                    <p><strong>Santiago de Cali, es un distrito de Colombia y capita</strong></p>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                    <button>GitHub</button>
                    </a>               
       </div>
            </div>
        </section>

    );
 }
 


