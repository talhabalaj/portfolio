import styles from './Profile.module.scss';


export default function Profile() {
    return (
        <>
            <section className={styles.profileContainer} id="about">
                <div className={styles.profile}>
                    <h2>
                        <span>Hey, </span>
                        <span>I'm Talha Balaj,</span>
                        <div className={styles.whatIdo}>
                            <span>I code</span>
                            <span>{` `}Beautiful</span>
                            <span>{` `}and Secure</span>
                            <br />
                            <span>Web Apps with</span>
                            <span>{` `}React</span>
                            <span>{` `} and NodeJS</span>
                        </div>
                    </h2>
                    <span className={styles.subHeading}>React / NodeJS / Flutter</span>
                </div>
            </section>
        </>
    );
}