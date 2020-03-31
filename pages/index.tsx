import Profile from '../components/Profile';
import NavBar from '../components/navbar';
import styles from './index.scss';

export default function IndexPage() {
    const skills = [
        { 'skill': 'React', 'level': 90, },
        { 'skill': 'NodeJS / JavaScript / TypeScript', 'level': 95, },
        { 'skill': 'Flutter', 'level': 70, },
        { 'skill': 'SCSS/SASS', 'level': 85, },
        { 'skill': 'SQL', 'level': 70, },
        { 'skill': 'C++', 'level': 90, },
        { 'skill': 'Python', 'level': 80, },
        { 'skill': 'Git', 'level': 90, },
    ];


    return (
        <main>
            <section className={styles.navBarCon}>
                <NavBar />
            </section>
            <section className={styles.content}>
                <section id="start">
                    <Profile />
                </section>
                <section id="education">
                    <div className={styles.educationSection}>
                        <h3>Education</h3>
                        <div className={styles.educationContainer}>
                            <div className={styles.education}>
                                <h4>Bacholar of Computer Science</h4>
                                <p>University of Engineering and Technology, Lahore</p>
                                <p>2018 - 2022 {(new Date()).getFullYear() < 2022 ? '(expected)' : null}</p>
                            </div>
                        </div>
                        <h3>Skills</h3>
                        <div className={styles.skillsContainer}>
                            {
                                skills.map(
                                    skill => (
                                        <div className={styles.skill}>
                                            <h4>{skill.skill}</h4>
                                            <div className={styles.progress}>
                                                <div className={styles.innerProgress}>
                                                    <span>{skill.level}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </section>
                <section id="work">
                    <Profile />
                </section>
                <section id="projects">
                    <Profile />
                </section>
                <section id="contact">
                    <Profile />
                </section>
            </section>
        </main>
    );
}