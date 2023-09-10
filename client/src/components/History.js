import useWebSocket from 'react-use-websocket'
import { WS_URL } from '../constants'
import { isUserEvent } from '../utils/eventTypes'

export function History() {
  const { lastJsonMessage } = useWebSocket(WS_URL, {
    share: true,
  })
  const activities = lastJsonMessage?.data.userActivity || []

  return (
    <>
      <strong>Latest messages</strong>
      <ul>
        {activities.reverse().map((activity, index) => (
          <li key={`activity-${index}`}>{activity}</li>
        ))}
      </ul>
    </>
  )
}
