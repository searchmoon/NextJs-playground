import Document, {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

class MyDocument extends Document {
    render() {
        return (
            <Html lang={'ko'}>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport"
                          content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
