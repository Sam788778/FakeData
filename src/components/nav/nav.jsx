import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className={styles.nav}>
            <button onClick={toggleMenu} style={{ position: 'fixed', top: 20, left: 20, zIndex: 1100 }} className={styles.menuButton}>
                {isOpen ? '✖ Close' : '☰ Menu'}
            </button>

            <div className={`${styles.navbar} ${isOpen ? styles.active : ''}`}>
                <ul>
                    <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
                    <li><NavLink to="/posts" onClick={toggleMenu}>Posts</NavLink></li>
                    <li><NavLink to="/comments" onClick={toggleMenu}>Comments</NavLink></li>
                    <li><NavLink to="/albums" onClick={toggleMenu}>Albums</NavLink></li>
                    <li><NavLink to="/todos" onClick={toggleMenu}>Todos</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;