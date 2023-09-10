import useWebSocket from 'react-use-websocket'
import { WS_URL } from '../constants'

export function Reveal() {
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(WS_URL, {
    share: true,
  })

  const userCount =
    Object.entries(lastJsonMessage?.data?.users || {})?.length || 0

  const enabled =
    lastJsonMessage?.data?.votes &&
    Object.entries(lastJsonMessage?.data?.votes).length === userCount

  function handleRevealVotes(e) {
    if (window.confirm("Are you sure you want to reveal everyone's votes?")) {
      sendJsonMessage({
        type: 'revealVotes',
        content: {
          revealed: true,
        },
      })
    }
  }

  return (
    <>
      <button
        onClick={handleRevealVotes}
        disabled={!enabled}
        className="button-vote reveal"
      >
        Reveal votes
      </button>
      <div className="small">
        {!enabled && `All users must vote before you can reveal.`}
      </div>
    </>
  )
}
