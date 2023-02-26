import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet-async"

import Xelus_logo_png from '/logo512.png'

class Error404 extends React.Component {
    render() {
        return(
            <>
            <Helmet>
                    <meta charSet="utf-8" />
                    <title>Error404 - Xelus</title>
                    <meta property="og:title" content="Error404 - Xelus"/>
                    <meta property="og:image" content={`${import.meta.env.VITE_BASE_URL}${Xelus_logo_png}`}/>
                    <meta property="og:description" content="Page Not Found"/>
                    <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}`}/>
            </Helmet>
            <div className="justify-items-center align-middle flex-grow max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-white">
                <div className="inset-0">
                    ERROR 404 - PAGE NOT FOUND
                </div>
            </div>
            </>
        );
    }
}

export default withRouter(Error404)