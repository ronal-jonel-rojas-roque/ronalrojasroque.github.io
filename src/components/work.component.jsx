import React from 'react';
import '../common/style-briefcase.css';
const Works = ({ image, title, description, buttonText, link }) => {


    return (
        <div>
            <div className="card">
                <img src={image} alt="Card" className="card-image" />
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{description}</p>
                    <a className="card-button" href={link}>{buttonText}</a>
                </div>
            </div>
        </div>
        
    );
};



export default Works;