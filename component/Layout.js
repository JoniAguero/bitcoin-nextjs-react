import Head from 'next/head';
import Navegacion from './navegacion';

const Layout = (props) => (
    <div>
        <Head>
            <title>Bitcoin App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css" />
            {/* <link rel="stylesheet" href="./css/index.css" /> */}
        </Head>
        <Navegacion />
        {/* Imprime lo que hay dentro del Layout */}
        <div className="container">
            {props.children}
        </div>
        
    </div>
)

export default Layout;