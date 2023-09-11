import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { WS_URL } from './constants'
import { LoginSection } from './components/LoginSection'
import { MainSection } from './components/MainSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

import './App.css'

console.log(WS_URL)
function App() {
  const [username, setUsername] = useState('')
  const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: () => {},
    share: true,
    filter: () => false,
    retryOnError: true,
    shouldReconnect: () => true,
  })

  useEffect(() => {
    if (username && readyState === ReadyState.OPEN) {
      sendJsonMessage({
        username,
        type: 'userevent',
      })
    }
  }, [username, sendJsonMessage, readyState])

  return (
    <>
      <div className="AppWrapper">
        <Header username={username} />
        <div className="container-fluid">
          {username ? (
            <MainSection username={username} />
          ) : (
            <LoginSection onLogin={setUsername} />
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
