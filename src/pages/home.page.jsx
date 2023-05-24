import React, { useEffect, useState } from 'react';
import '../common/style-home.css';
import Lineas from '../components/effect.component';
import { BsFillCaretDownFill } from "react-icons/bs";

  
const Home = () => {
    const name = "Ronal Rojas Roque";
    const Icon = [
        {
            icon: <BsFillCaretDownFill />
        },
    ]
    
    const [visible, setVisible] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setVisible(false);
        }, 3000); // Desaparece después de 3 segundos (ajusta este valor según tus necesidades)
    
        return () => {
          clearTimeout(timer);
        };
      }, []);


    return (
        <div className='page-home'>
            <div className="page-home-item" id="home">
                <h1 className="h1-home">HOLA MI NOMBRE ES <i className='i-home'>{name}</i></h1>
                <h2 className={`typing-effect ${visible ? 'visible' : ''}`}>Soy un Programador Full Stack </h2>

                <div className="icon">
                  <ul>
                  <a className='lin' href="#about">{Icon[0].icon}</a>
                  </ul>
                  </div>
            </div>

            <Lineas />
        </div>
    );
};

export default Home;