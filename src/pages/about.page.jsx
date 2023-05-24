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
                        <h2 className='h2-about'>Egresado con grado en bachiller en la carrera profesional de Ingeniería de Sistemas con
                            conocimientos en informática, tanto en hardware y en software.
                            Me considero una persona responsable, ordenado y competitivo orientado a los
                            resultados, con excelentes habilidades de comunicación y resolución de problemas con
                            el objetivo de ser cada día un mejor profesional.</h2>
                        <LinkedInButton></LinkedInButton>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;