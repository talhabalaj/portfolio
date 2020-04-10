import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from './NavBar.module.scss';
import { useRouter } from 'next/dist/client/router';


export default function NavBar() {

    const links = {
        '/': 'Profile',
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
        <nav className={styles.navbar}>
            {/* <div className={styles.profile}>
                <h1>Talha<br />Balaj</h1>
            </div> */}
            <ul>
                {Object.keys(links).map(
                    (key) => (
                        <li key={key}>
                            <Link href={key}>
                                <a className={key == active ? styles.active : ''} >{links[key]}</a>
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}