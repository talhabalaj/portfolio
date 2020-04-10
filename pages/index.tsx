import Head from 'next/head';

import Education from '../components/Education';
import Profile from '../components/Profile';
import NavBar from '../components/NavBar';
import styles from './index.scss';

export default function IndexPage() {
    return (
        <section id="start">
            <Profile />
        </section>
    );
}