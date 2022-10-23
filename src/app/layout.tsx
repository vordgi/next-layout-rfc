import Header from "../components/Header/index.server";

const RootLayout = ({ children }: any) => {
    return (
        <html>
            <head>
                <title>Test Layout RFC</title>
            </head>
            <body style={{backgroundColor: '#F5F5F5', padding: 8}}>
                <Header />
                <h1>Main Layout (app/layout.tsx)</h1>
                {children}
                <footer>
                    <p>
                        Powered for{' '}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <b>
                                Habrahabr post
                            </b>
                        </a>
                    </p>
                </footer>
            </body>
        </html>
    )
}

export default RootLayout;
