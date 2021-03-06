import 'src/styles/globals.css';

import type { AppProps } from 'next/app';
import Settings from 'src/features/Settings';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Settings>
                <Component {...pageProps} />
            </Settings>
            <div id="root_modal" />
        </>
    );
}

export default MyApp;
