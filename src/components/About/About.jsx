import React from 'react';

const AboutMe = "https://static.eldiario.es/clip/ba0e55e3-0983-4957-ac23-10ecdf3d8e4f_16-9-aspect-ratio_75p_0.webp"

export default function About (props) {
   
    return (
       <div>
        <hr />
              <img
                src={AboutMe}
                style={{width:"300px"}}
                alt=""
            />
        <h1 >About Me</h1>
        <p>🔱 Visita mi
            <a href="https://github.com/AMGutierrezTrejos" 
            target="_blank" /*Este se refiere a que abra una nueva pestaña*/
            rel="noreferrer"> GitHub </a> 🔱
        </p>
       </div>
    );
 }
 