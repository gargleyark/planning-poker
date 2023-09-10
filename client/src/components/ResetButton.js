import useWebSocket from 'react-use-websocket'
import { WS_URL } from '../constants'

export function ResetButton() {
  const { sendJsonMessage } = useWebSocket(WS_URL, {
    share: true,
  })

  function handleResetVotes(e) {
    if (window.confirm("Are you sure you want to reset everyone's votes?")) {
      sendJsonMessage({
        type: 'revealVotes',
        content: {
          revealed: false,
        },
      })
    }
  }

  return (
    <>
      <button onClick={handleResetVotes} className="button-vote reveal">
        Reset votes
      </button>
    </>
  )
}
