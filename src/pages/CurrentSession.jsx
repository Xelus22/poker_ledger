import React, { useState, useEffect } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet-async"

import Xelus_logo_png from '/logo512.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
} from "@fortawesome/free-solid-svg-icons"

function CurrentSession({ globalData, setGlobalData }) {
    const players = globalData.players

    const numSessions = globalData.sessions.length
    const [currentSession, setCurrentSession] = useState(globalData.sessions[numSessions - 1])
    const [sessionHistory, setSessionHistory] = useState(currentSession.session_history)
    console.log(sessionHistory)

    const [title, setTitle] = useState("Current Session")
    const [total, setTotal] = useState()

    const [player, setPlayer] = useState(0)
    const [type, setType] = useState("buy_in")
    const [amount, setAmount] = useState()

    const [perPerson, setPerPerson] = useState([])

    const calcSessionTotal = () => {
        var total = 0
        for (var turn of sessionHistory) {
            if (turn.type == "payout") {
                total -= turn.value
            } else {
                total += turn.value
            }
        }
        console.log(total)
        setTotal(total)
    }

    const calcPerPerson = () => {
        var list = Array(players.length).fill(0)
        for (var each of sessionHistory) {
            var total = 0
            console.log(each)
            if (each.type == "payout") {
                total -= each.value
            } else {
                total += each.value
            }
            list[each.player] += total
        }
        setPerPerson(list)
        console.log("LIST", list)
    }

    const addToSession = (player, type, amount) => {
        var copyGlobalData = globalData
        var prev_id = sessionHistory.length
        var new_entry = {
            id: prev_id,
            player: player,
            type: type,
            value: amount
        }
        copyGlobalData.sessions[numSessions - 1].session_history.push(new_entry)
        setSessionHistory(copyGlobalData.sessions[numSessions - 1].session_history)
        setGlobalData(copyGlobalData)

        setAmount(0)
    }

    useEffect(() => {
        calcSessionTotal()
        calcPerPerson()
    }, [player, type, amount])

    useEffect(() => {
        calcSessionTotal()
        calcPerPerson()
    }, [])


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
                <table className="table-auto min-w-full">
                    <thead className="border-b">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-center">
                                Player
                            </th>
                            <th scope="col" className="px-6 py-4 text-center">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-4 text-center">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sessionHistory.map((item, index) => (
                            <tr key={index} className="group py-5 my-5">
                                <td className="text-center">
                                    <h1>{players[item.player].name}</h1>
                                </td>
                                <td className="text-center">
                                    <h1>{item.type}</h1>
                                </td>
                                <td className="text-center">
                                    <h1>
                                        {item.type == "payout" ? '+' : '-'}
                                        {item.value}</h1>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <h1>add to session</h1>
                <table className="table-auto min-w-full">
                    <thead className="border-b">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-center">
                                Player
                            </th>
                            <th scope="col" className="px-6 py-4 text-center">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-4 text-center">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-4 text-center">
                                Add
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="group py-5 my-5">
                            <td className="text-center">
                                <select
                                    value={player}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e) => {
                                        setPlayer(parseInt(e.target.value))
                                    }}
                                >
                                    {players.map((item, index) => (
                                        <option value={item.id} key={index}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td className="text-center">
                                <select
                                    value={type}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e) => {
                                        setType(e.target.value)
                                    }}
                                >
                                    <option value="buy_in">
                                        buy_in
                                    </option>
                                    <option value="payout">
                                        payout
                                    </option>
                                </select>
                            </td>
                            <td className="text-center">
                                <input
                                    className="border border-slate-300 rounded-md focus:ring-sky-500 focus:ring-1  py-1 pl-2 pr-3 shadow-sm focus:outline-none bg-[#2c2f31]"
                                    type="text"
                                    value={amount}
                                    onChange={(e) => {
                                        setAmount(parseInt(e.target.value))
                                    }}
                                />
                            </td>
                            <td>
                                <button
                                    className="justify-center border-slate-300 border-2 rounded-md hover:border-sky-500 px-2 py-1"
                                    onClick={() =>
                                        addToSession(player, type, amount)
                                    }
                                >
                                    Add Row
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h1>Amount Wrong: {total}</h1>
                <br />
                <h1>Per Person: </h1>
                {perPerson.map((p, index) => (
                    <span key={index}> {players[index].name}:{p} </span>
                ))}
                <br />
                <br />
                <br />
                <h1>Start New Session</h1>
            </div>
        </>
    )
}

export default withRouter(CurrentSession);