import { ChakraProvider } from '@chakra-ui/react'
import App from "next/app";
import Head from "next/head"
import Script from 'next/script'
import { SessionProvider } from 'next-auth/react'


function MyApp({ Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <ChakraProvider>
            <Head>
                <title>Auto Twisty | ISU Blinds Controller</title>
                <Script src="https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.16.0/js/okta-sign-in.min.js" />
            </Head>
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </ChakraProvider>
    );
}

export default MyApp;