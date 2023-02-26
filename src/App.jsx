import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'

import Error404 from './pages/Error404'
import PageRoutes from './PageRoutes'
import CurrentSession from './pages/CurrentSession';

function App() {
  // list of objects
  // { players: [], sessions: []}
  const [globalData, setGlobalData] = useState({
    players: [
      { name: "John Doe", id: 0 },
      { name: "meme", id: 1 }
    ],
    sessions: [
      {
        id: 0, players: [0, 1],
        session_history: [{ id: 0, player: 0, type: "buy_in", value: 20 },
        { id: 1, player: 1, type: "buy_in", value: 20 },
        { id: 2, player: 1, type: "payout", value: 20 },
        { id: 3, player: 0, type: "payout", value: 20 },
        ]
      },
      {
        id: 1, players: [0, 1],
        session_history: [{ id: 0, player: 0, type: "buy_in", value: 20 },
        { id: 1, player: 1, type: "buy_in", value: 20 },
        { id: 2, player: 1, type: "payout", value: 20 },
        { id: 3, player: 0, type: "payout", value: 20 },
        ]
      },
    ]
  })

  console.log(globalData)

  return (
    <div className="flex flex-grow min-h-full flex-col">
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <CurrentSession globalData={globalData} setGlobalData={setGlobalData} />} />
        {/* Page Routes */}
        {PageRoutes.map((item, key) => (
          <Route path={`${item.path}`} exact render={() => <item.component globalData={globalData} setGlobalData={setGlobalData} />} key={key} />
        ))}
        <Route component={Error404} />
      </Switch>
      {/* <Footer/> */}
    </div>
  )
}

export default App
