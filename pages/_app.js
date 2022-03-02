import { ChakraProvider } from '@chakra-ui/react'
import App from "next/app";
import Head from "next/head"

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Head>
                <title>Auto Twisty | ISU Blinds Controller</title>
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;