import App, { AppProps } from 'next/app'
import NavBar from '../components/NavBar';
import styles from './_app.scss'
import Head from '../components/Head';

export default class myApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head />
                <main>
                    <NavBar />
                    <section className={styles.content}>
                        <Component {...pageProps} />
                    </section>
                </main>
            </>
        );
    }
}