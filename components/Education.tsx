import styles from './Education.module.scss';

const SkillProgress = ({ name, progress }: { name: string, progress: number }) => {
    return (
        <div key={name} className={styles.skill}>
            <h4>{name}</h4>
            <div className={styles.progress}>
                <div className={styles.innerProgress} style={{ width: progress + '%' }}>
                    <span>{progress}%</span>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const skills = [
        { skill: 'React', level: 90, },
        { skill: 'TypeScript', level: 95, },
        { skill: 'Flutter', level: 70, },
        { skill: 'SCSS', level: 85, },
        { skill: 'SQL', level: 70, },
        { skill: 'C++', level: 90, },
        { skill: 'Python', level: 80, },
        { skill: 'Git', level: 90, },
    ];


    return (
        <section className={styles.educationSection} id="education">
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
                            <SkillProgress name={skill.skill} progress={skill.level} />
                        )
                    )
                }
            </div>
        </section>
    );
}