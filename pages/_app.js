import React from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import { Provider } from 'mobx-react'
import store from '../store';

function MyApp({ Component, pageProps }) {
  
    return (
        <div>
          <Provider store={store}>
            <Head>
                <title>Ombd Movie WebApp</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
                <link rel="styleshee" hreff="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
          </Provider>
        </div>
    );
  }

export default MyApp