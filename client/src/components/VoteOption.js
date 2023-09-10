import useWebSocket from 'react-use-websocket'
import { WS_URL } from '../constants'
import { isVoteEvent } from '../utils/eventTypes'

export function VoteOption({ value, username }) {
  const { lastJsonMessage, sendJsonMessage } = useWebSocket(WS_URL, {
    share: true,
    filter: isVoteEvent,
  })

  const { votes } = lastJsonMessage?.data || {}

  function handleButtonClick(e) {
    sendJsonMessage({
      type: 'voteMade',
      content: {
        vote: e.target.innerText,
        username: username,
      },
    })
  }

  return (
    <button
      class="button-vote"
      role="button"
      onClick={handleButtonClick}
      style={(votes?.[username] === value && { background: '#E3FBFE' }) || {}}
      disabled={votes?.[username] === value}
    >
      {value}
    </button>
  )
}
