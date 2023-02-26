import React, { useState, useEffect } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet-async"

import Xelus_logo_png from '/logo512.png'

function Contact() {
   
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact - Xelus</title>
                <meta property="og:title" content="Contact - Xelus"/>
                <meta property="og:image" content={`${import.meta.env.VITE_BASE_URL}${Xelus_logo_png}`}/>
                <meta property="og:description" content="Contact"/>
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}`}/>
        </Helmet>
        <div className="bg-[#161819] px-4 text-white flex-grow mx-auto">
            <h1>Contact</h1>

            <h3>Hi! If you would like to contact me, please email me at <a href="mailto:xelus22@gmail.com">xelus22@gmail.com</a></h3>
        </div>
        </>
    )
}

export default withRouter(Contact);