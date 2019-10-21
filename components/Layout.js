import NavBar from './nav';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>TEDxKasetsartU</title>
            <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon" />
            <script src="https://kit.fontawesome.com/21af1254cb.js"></script>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        </Head>
        <NavBar />
        <div className="top-push"></div>
        {props.children}
        <div className="bot-push"></div>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </div>
);

export default Layout;