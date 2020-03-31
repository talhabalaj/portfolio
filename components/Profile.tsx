import styles from './Profile.module.scss';
import Typewriter from 'typewriter-effect/dist/react';

export default function Profile() {
    return (
        <section className={styles.profileContainer}>
            <div className={styles.profile}>
                <h2>Hey, <br />
                    I'm <span className={styles.styledTextSecondary}>Talha</span>, <br />
                    <Typewriter options={{
                        strings: ['Web', 'App'],
                        autoStart: true,
                        loop: true,
                        cursor: ''
                    }} />
                    Developer
                </h2>
                <span className={styles.subHeading}>Full-Stack JavaScript Developer / Flutter Developer</span>
            </div>
        </section>
    );
}