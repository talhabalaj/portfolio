import React, { useState } from 'react';
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

    return (
        <nav className={styles.navbar}>
            {/* <div className={styles.profile}>
                <h1>Talha<br />Balaj</h1>
            </div> */}
            <ul>
                {Object.keys(links).map(
                    (key) => (
                        <li>
                            <Link href={key}>
                                <a className={key == router?.pathname ? styles.active : ''} >{links[key]}</a>
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}