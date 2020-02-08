import React, { useState, useEffect } from 'react';
import styles from './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait, faUniversity, faBriefcase, faProjectDiagram, faMailBulk } from '@fortawesome/free-solid-svg-icons';


export default function NavBar() {

    const links = {
        '#start': ['Profile', <FontAwesomeIcon icon={faPortrait} />],
        '#education': ['Education', <FontAwesomeIcon icon={faUniversity} />],
        '#work': ['Work', <FontAwesomeIcon icon={faBriefcase} />],
        '#projects': ['Projects', <FontAwesomeIcon icon={faProjectDiagram} />],
        '#contact': ['Contact', <FontAwesomeIcon icon={faMailBulk} />]
    }


    useEffect(() => {
        const currentPage = window.location.hash;
        setActive(`${currentPage}`);
        window.onscroll = (event) => {
            const scrollPos = window.pageYOffset;
            Object.keys(links).forEach(link => {
                const element: HTMLElement = document.querySelector(link);
                if (element != null && scrollPos >= element.offsetTop && element.offsetTop + element.clientHeight > scrollPos) {
                    console.log(scrollPos, link, element.offsetTop, element.clientHeight + element.offsetTop);
                    setActive(link);
                }
            });
        }
    }, []);

    const [active, setActive] = useState(Object.keys(links)[0]);


    return (
        <nav className={styles.navbar}>
            <ul>
                {Object.keys(links).map(
                    (key) => (
                        <li>
                            <a className={key == active ? styles.active : ''} href={key}><span className={styles.icon}>{links[key][1]}</span>{links[key][0]}</a>

                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}