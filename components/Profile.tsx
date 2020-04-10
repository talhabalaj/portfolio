import styles from './Profile.module.scss';


export default function Profile() {
    return (
        <>
            <section className={styles.profileContainer}>
                <div className={styles.profile}>
                    <h2>
                        <span>Hey, </span>
                        <span>I'm Talha,</span>
                        <div>
                            <div className={styles.whatIdo}>
                                <span>JavaScript</span>
                                <span>Flutter</span>
                            </div>
                            <span>Developer</span>
                        </div>
                    </h2>
                    <span className={styles.subHeading}>React / NodeJS / Flutter</span>
                </div>
            </section>
        </>
    );
}