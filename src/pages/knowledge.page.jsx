import React from 'react';
import '../common/style-knowledge.css';
import { IoSpeedometer } from "react-icons/io5";
import { HiPuzzlePiece } from "react-icons/hi2";
import { GoLightBulb, } from "react-icons/go";
import { GiRocketThruster } from "react-icons/gi";

const Knowledge = () => {
    const Icon1 = [
      {
        icon: <IoSpeedometer />,
        icon1: <HiPuzzlePiece />,
        icon2: <GoLightBulb />,
        icon3: <GiRocketThruster />,
      },
    ];
  
    return (
      <div className="knowledge-container">
        <h1 className="title-know">LO QUE SE</h1>
        <div className="page-knowledge">
          <div className="column">
            <div className="conteiner-know-2">
              <p className="text-know">FULL STACK DEVELOPER</p>
              <i className='i'>
                Me gusta codificar cosas desde cero y disfruto dando vida a las
                ideas en el navegador.
              </i>
            </div>
            <div>
              <p className="p-know">Idiomas que hablo:</p>
              <i className='i'>HTML 5, CSS 3</i>
            </div>
            <div>
              <p className="p-know">Lenguaje de Programacion:</p>
              <i className='i'>JavaScript, TypeScript</i>
            </div>
            <div>
              <p className="p-know">Gestor de base de datos</p>
              <i className='i'>SQL Server, MYSQL, Mongo DB, Postgresql</i>
            </div>
            <div>
              <p className="p-know">Herramientas de desarrollo:</p>
              <i className='i'>Git hub, Postman, Adobe xd, Figma</i>
            </div>
            <div>
              <p className="p-know">Gestor de base de datos</p>
              <i>SQL Server, MYSQL, Mongo DB, Postgresql</i>
            </div>
            <div>
              <p className="p-know">Librerias</p>
              <i className='i'>React, Bootstrap, Styled components, React - Incons,Axions, typeORM</i>
            </div>
            <div>
              <p className="p-know">Framework</p>
              <i className='i'>Node - express, Next JS, React Native, Nest JS</i>
            </div>
          </div>
          <div className="column">
            <div className="content-know">
              <div className="icon-container">
                <div className="icon">
                  <ul>
                    <i className="speed">{Icon1[0].icon}</i>
                  </ul>
                  <h4 className="h4-about">Rápido</h4>
                  <p className="p-about">
                    Tiempos de carga rápidos e interacción sin demoras, mi máxima
                    prioridad.
                  </p>
                </div>
              </div>
              <div className="icon-container">
                <div className="icon">
                  <ul>
                    <i className="speed">{Icon1[0].icon1}</i>
                  </ul>
                  <h4 className="h4-about">Sensible</h4>
                  <p className="p-about">
                    Mis diseños funcionarán en cualquier dispositivo, grande o
                    pequeño.
                  </p>
                </div>
              </div>
              <div className="icon-container">
                <div className="icon">
                  <ul>
                    <i className="speed">{Icon1[0].icon2}</i>
                  </ul>
                  <h4 className="h4-about">Intuitivo</h4>
                  <p className="p-about">
                    Fuerte preferencia por una UX/UI intuitiva y fácil de usar.
                  </p>
                </div>
              </div>
              <div className="icon-container">
                <div className="icon">
                  <ul>
                    <i className="speed">{Icon1[0].icon3}</i>
                  </ul>
                  <h4 className="h4-about">Dinámica</h4>
                  <p className="p-about">
                    Los sitios web no tienen que ser estáticos, me encanta hacer
                    que las páginas cobren vida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Knowledge;