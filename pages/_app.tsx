import App from 'next/app'
import NavBar from '../components/NavBar';
import styles from './_app.scss'
import Head from '../components/Head';
import TagManager, { TagManagerArgs } from 'react-gtm-module'

const tagManagerArgs: TagManagerArgs = {
    gtmId: 'GTM-NTDGTW7'
}

export default class myApp extends App {

    componentDidMount() {
        TagManager.initialize(tagManagerArgs)
    }

    componentDidUpdate() { 
        TagManager.initialize(tagManagerArgs);
    }

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