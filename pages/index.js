import Head from 'next/head';
import React from 'react';
import Display from '../components/Display';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Mood Tracker</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Display />
            </main>
        </div>

    )
}
