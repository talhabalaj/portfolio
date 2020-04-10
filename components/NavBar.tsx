import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from './NavBar.module.scss';
import { useRouter } from 'next/dist/client/router';


export default function NavBar() {
    const [displaying, setDisplay] = useState(false);

    const links = {
        '/': 'About',
        '/education': 'Education',
        '/work': 'Work',
        '/projects': 'Projects',
        '/contact': 'Contact me',
    }

    const router = useRouter();
    const [active, setActive] = useState(null);

    useEffect(() => {
        setActive(router.pathname);
    }, [router?.pathname]);

    return (
        <>
        <input 
            type="checkbox" 
            name="handburger" 
            id="menubutton" 
            className={styles.handburgerCheckbox} 
            checked={displaying} 
            onChange={(e)=>setDisplay(e.target.checked)}
            hidden
         />
        <div className={styles.handburgerMenuButton}>
            <label htmlFor="menubutton" >
                <img src={displaying ? "images/cross.svg" : "images/handburger.svg" }alt="handburger menu button"/>
            </label>
        </div>
        <nav className={styles.navbar}>
            <ul>
                {Object.keys(links).map(
                    (key) => (
                        <li key={key}>
                            <Link href={key}>
                                <a className={key == active ? styles.active : ''} onClick={() => setDisplay(false)} >{links[key]}</a>
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
        </>
    );
}