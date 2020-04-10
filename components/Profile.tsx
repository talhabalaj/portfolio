import Typewriter from 'typewriter-effect/dist/react';
import Particles from 'react-particles-js';
import styles from './Profile.module.scss';


export default function Profile() {
    return (
        <>
            <section className={styles.profileContainer}>
                <div className={styles.particles}>
                    <Particles params={{
                        particles: {
                            number: {
                                value: 80,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            color: {
                                value: "#016fb9"
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#000000"
                                },
                                polygon: {
                                    nb_sides: 5
                                },
                            },
                            opacity: {
                                value: 0.5,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 40,
                                    size_min: 0.1,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: true,
                                distance: 150,
                                color: "#016fb9",
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 6,
                                direction: "none",
                                random: false,
                                straight: false,
                                out_mode: "out",
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }
                        },
                    }} />
                </div>
                <div className={styles.profile}>
                    <h2>Hey, <br />
                    I'm Talha, <br />
                        <Typewriter options={{
                            strings: ['Web', 'App'],
                            autoStart: true,
                            loop: true,
                            cursor: '|'
                        }} />
                    Developer
                </h2>
                    <span className={styles.subHeading}>Full-Stack JavaScript Developer / Flutter Developer</span>
                </div>
            </section>
        </>
    );
}