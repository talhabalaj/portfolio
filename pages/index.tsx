import Profile from '../components/Profile';
import NavBar from '../components/navbar';
import styles from './index.scss';

export default function IndexPage() {
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
                    <Profile />
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