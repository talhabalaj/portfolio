import App from 'next/app'
import Head from '../components/Head';
import TagManager, { TagManagerArgs } from 'react-gtm-module';

const tagManagerArgs: TagManagerArgs = {
    gtmId: 'GTM-NTDGTW7'
}

export default class myApp extends App {

    componentDidMount() {
        TagManager.initialize(tagManagerArgs)
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head />
                <main>
                    <section>
                        <Component {...pageProps} />
                    </section>
                </main>
            </>
        );
    }
}