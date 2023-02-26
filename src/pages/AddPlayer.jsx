import React, { useState, useEffect } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet-async"

import Xelus_logo_png from '/logo512.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
} from "@fortawesome/free-solid-svg-icons"

function AddPlayer({globalData, setGlobalData}) {
    const [title, setTitle] = useState("Add Player")
    const [name, setName] = useState("")

    const addPlayer = (input) => {
        console.log(input)
        var copy = [...globalData.players]
        var next_id = copy.length
        var new_player = { name: input, id: next_id }
        copy.push(new_player)
        globalData.players.push(new_player)
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:image" content={`${import.meta.env.VITE_BASE_URL}${Xelus_logo_png}`} />
                <meta property="og:description" content={title} />
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}`} />
            </Helmet>
            <div className="bg-[#161819] px-4 text-white flex-grow mx-auto">
                <h1>{title}</h1>
                <span className="align-middle" >Name: </span>
                <input
                    className="border border-slate-300 rounded-md focus:ring-sky-500 focus:ring-1 py-1 pr-3 shadow-sm focus:outline-none bg-[#2c2f31] align-middle"
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />
                <button
                    className="border border-slate-300 rounded-md focus:ring-sky-500 focus:ring-1 px-2 py-1 shadow-sm focus:outline-none bg-[#2c2f31] inline-flex align-middle"
                    onClick={() => {
                        addPlayer(name)
                    }}
                > Add </button>
            </div>
        </>
    )
}

export default withRouter(AddPlayer);