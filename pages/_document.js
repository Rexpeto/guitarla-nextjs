import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
                    rel="stylesheet"
                />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
