import React from 'react';
import { FiLinkedin } from "react-icons/fi";

const LinkedInButton = () => {
    const Icon = [
        {
            icon: <FiLinkedin />
        }
    ]
    return (
        <a
            href="https://www.linkedin.com/in/ronal-rojas-a39772276"
            target="_blank"
            rel="noopener noreferrer"
        >
            {
                Icon.map((item) => (
                    <div className="icon"><i className='cv-link no-underline'>{item.icon} Habla conmigo </i></div>
                ))
            }
        </a>
    );
};

export default LinkedInButton;