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
  const [showText, setShowText] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Desaparece después de 

    const showTextTimer = setTimeout(() => {
      setShowText(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(showTextTimer);
    };
  }, []);


  return (
    <div className='page-home'>
      <div className="page-home-item" id="home">
        <h1 className="h1-home">HOLA MI NOMBRE ES <i className='i-home'>{name}</i></h1>
        {showText  && (
          <h2 className={`typing-effect ${visible ? 'visible' : ''}`}>Soy un Programador Full Stack</h2>
          )}

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