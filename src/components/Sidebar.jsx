import React, { useEffect, useState } from 'react';
import '../common/style-siderbar.css';

import { HiMenu } from 'react-icons/hi';

const Sidebar = () => {
    const [active, setActive] = useState("menu");
    const [icon, setIcon] = useState("toggler");
    const [showProfileText, setShowProfileText] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShowProfileText(false);
            } else {
                setShowProfileText(true);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navToggle = () => {
        if (active === "menu") {
            setActive("menu active");
        } else setActive("menu");

        // Icon Toggler
        if (icon === "toggler") {
            setIcon("toggler toggle");
        } else setIcon("toggler");
    };

    const Icon = [
        {
            icon: <HiMenu />
        },
    ]

    return (
        <div>
            <nav className="nav">
                <ul className={active}>
                    <li className="item"><a className='link' href="#home">INICIO</a></li>
                    <li className="item"><a className='link' href="#about">ACERCA DE</a></li>
                    <li className="item"><a className='link' href="#knowledge">CONOCIMIENTOS</a></li>
                    <li className="item"><a className='link' href="#briefcase">PORTAFOLIO</a></li>
                    <li className="item"><a className='link' href="#footers">CONTACTO</a></li>
                </ul>
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;