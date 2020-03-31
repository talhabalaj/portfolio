import styles from './profile.scss';

export default function Profile() {
    return (
        <section className={styles.profileContainer}>
            <div className={styles.profile}>
                <h2>Hey, <br />
                    I'm <span className={styles.styledTextSecondary}>Talha</span>, <br />
                    Software <span className={styles.styledTextPrimary}>Developer</span>.
                </h2>
                <span className={styles.subHeading}>Full-Stack JavaScript Developer / Flutter Developer</span>
            </div>
        </section>
    );
}