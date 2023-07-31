import React from 'react';
import '../common/style-about.css';
import LinkedInButton from '../components/buttonlinke';

const About = () => {

    return (
        <div>
             <h1 className='title-about'>¿QUIEN SOY?</h1>
            <div className="container-about">
               
                <div className="container-about-page">

                    <div className="image-container">

                    </div>
                    <div className="content-container">
                        <h2 className='h2-about'>Programador Full Stack con experiencia en el desarrollo de aplicaciones web.
                        Amplios conocimientos en JavaScript, TypeScript, .Net Core 6 SQL, Server, MYSQL, Mongo DB yPostgresql, 
                        así como en el uso de tecnologías y librerías como React Js, Bootstrap, Node Js, NestJS, Git Hub y 
                        Postman. Apasionado por la resolución de problemas y el desarrollo de solucioneseficientes. y 
                        siempre dispuesto a aprender nuevas tecnologías .</h2>
                        <LinkedInButton></LinkedInButton>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;