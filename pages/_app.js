import React from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Ombd Movie WebApp</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
                <link rel="styleshee" hreff="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <style jsx>{`
            .form-control {
                margin-right:12px;
                
              }
              .card-header {
                font-size: 14px;
              }
              #image {
                width: 100%;
                height: 300px
              }
              #poster {
                padding: 0 10px;
              }
              .card {
                width:250px;
                height:420px;
                text-align: center;
              }
              @media screen and (max-width: 600px) {
              .column {
                width: 100%;
                display: block;
                margin-bottom: 20px;
              }
            }

            `}</style>
        </div>
    );
  }

export default MyApp