import React, { useState, useEffect } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet-async"

import { projects as products } from '../projects/projects_list';

import Xelus_logo_png from '/logo512.png'

function Files() {
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Files - Xelus</title>
                <meta property="og:title" content="Files - Xelus"/>
                <meta property="og:image" content={`${import.meta.env.VITE_BASE_URL}${Xelus_logo_png}`}/>
                <meta property="og:description" content="Files"/>
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}`}/>
                <meta property="og:type" content="website"/>
        </Helmet>
        <div className="text-white flex-grow max-w-7xl mx-auto w-5/6 sm:w-full md:w-2/3 lg:w-1/2 px-2 sm:px-6 lg:px-8">
            <div className = "font-sans font-bold text-2xl"> PCB STEP Files (Unavailable for now) </div>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8">
                <div className="group relative">
                    <table className="w-full">
                        <tbody className="divide-y divide-gray-500">
                            {products.map((product) => (
                                <tr key={product.email}>
                                    <td className="px-6 py-4 whitespace-nowrap w-48 group">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 sm:h-32 sm:w-32">
                                                <img className="h-10 w-10 sm:h-32 sm:w-32 rounded-full object-cover" src={product.imageSrc[product.defaultImageNum]} alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <Link to={`${product.href}`} className="text-normal sm:text-lg">{product.name}</Link>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-medium">
                                        <Link className="text-[#61b1da] hover:text-[#4985a3]" to={`${product.imageAlt}.step`} target="_blank" download>Download</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

{/* <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Active
                                        </span>
                                    </td> */}

export default withRouter(Files);