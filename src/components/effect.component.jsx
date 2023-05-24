import React, { useEffect } from 'react';
import '../common/style-line.css';
const Lineas = () => {
    useEffect(() => {
      const intervalId = setInterval(() => {
        crearLinea();
      }, 100); // Ajusta la velocidad de caída ajustando el valor del intervalo
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    const crearLinea = () => {
      const contenedor = document.querySelector('.lineas-contenedor');
      const linea = document.createElement('div');
      linea.classList.add('linea');
      linea.style.left = `${Math.random() * 100}%`;
      contenedor.appendChild(linea);
  
      setTimeout(() => {
        contenedor.removeChild(linea);
      }, 3000); // Ajusta la duración de la animación ajustando el valor del timeout
    };
  
    return <div className="lineas-contenedor"></div>;
  };
  
  export default Lineas;