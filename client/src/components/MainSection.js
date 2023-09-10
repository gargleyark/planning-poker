import useWebSocket from 'react-use-websocket'
import { WS_URL } from '../constants'
import { isRevealEvent, isUserEvent } from '../utils/eventTypes'
import { History } from './History'
import { Users } from './Users'
import { Votes } from './Votes'
import { RevealedVotes } from './RevealedVotes'
import { Reveal } from './Reveal'

export function MainSection({ username }) {
  const { lastJsonMessage } = useWebSocket(WS_URL, {
    share: true,
    filter: isUserEvent,
  })

  const isRevealed = lastJsonMessage?.data?.revealed

  return (
    <div className="main-content">
      <div className="document-holder">
        <Users />

        {isRevealed ? (
          <RevealedVotes votes={lastJsonMessage?.data?.votes} />
        ) : (
          <>
            <Votes username={username} />
            <Reveal />
          </>
        )}
      </div>
      {/* <div className="history-holder">
        <History />
      </div> */}
    </div>
  )
}
