import styles from './Profile.module.scss';


export default function Profile() {
    return (
        <>
            <section className={styles.profileContainer} id="about">
                <div className={styles.profile}>
                    <h2>
                        <span>Welcome to my Portfolio</span>
                        <span>I'm Talha Balaj</span>
                        <span>Full Stack JavaScript Developer</span>
                    </h2>
                </div>
            </section>
            <div className={styles.aboutContainer}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit libero laudantium deleniti officia distinctio rem placeat dolorum excepturi corrupti sed error exercitationem ab, officiis necessitatibus cumque! Dolor, libero et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur illum vel numquam eius nesciunt quaerat qui error, voluptates itaque? Odit maiores quos libero temporibus adipisci dolores voluptate nam illum.
            </div>
        </>
    );
}