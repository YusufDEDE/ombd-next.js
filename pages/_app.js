import React from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Ombd Movie WebApp</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
  }

export default MyApp