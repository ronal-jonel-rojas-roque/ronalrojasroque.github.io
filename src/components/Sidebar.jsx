import React, { useEffect, useState } from 'react';
import '../common/style-siderbar.css';

import { HiMenu } from 'react-icons/hi';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 0;
            setIsSticky(isScrolling);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleDocumentClick = (event) => {
            const target = event.target;
            const sidebar = document.querySelector('.ul');
            const sidebarToggle = document.querySelector('.sidebar-toggle');

            if (!sidebar.contains(target) && target !== sidebarToggle) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const Icon = [
        {
            icon: <HiMenu />
        },
    ]

    return (
        <header className={`sidebar-header ${isSticky ? 'sticky' : ''}`}>
            <nav>
                <div className={`sidebar-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
                    {
                        Icon.map((item) => (
                            <i className='togle-icon'>{item.icon}</i>
                        ))
                    }
                </div>
                <ul className={`ul ${isOpen ? 'open' : ''}`}>
                    <li><a className='a' href="#home">INICIO</a></li>
                    <li><a className='a' href="#about">ACERCA DE</a></li>
                    <li><a className='a' href="#knowledge">CONOCIMIENTOS</a></li>
                    <li><a className='a' href="#briefcase">PORTAFOLIO</a></li>
                    <li><a className='a' href="#footers">CONTACTO</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Sidebar;