import { UncontrolledTooltip } from 'reactstrap'
import useWebSocket from 'react-use-websocket'
import Avatar from 'react-avatar'
import { WS_URL } from '../constants'

export function Users() {
  const { lastJsonMessage } = useWebSocket(WS_URL, {
    share: true,
  })

  const users = Object.values(lastJsonMessage?.data.users || {})

  if (users.length === 0) {
    return <div className="small">No users connected</div>
  }

  return (
    <div className="currentusers">
      <h5>Connected Users</h5>
      <div>
        {users.map((user) => {
          const hasVoted = lastJsonMessage?.data?.votes?.[user.username]
          return (
            <div key={user.username}>
              <span id={user.username} className="userInfo" key={user.username}>
                <Avatar
                  name={user.username}
                  size={50}
                  round="25px"
                  color={hasVoted ? '#886edd' : '#544098'}
                />
                {hasVoted && (
                  <Avatar
                    className="tick"
                    name="✓"
                    size={20}
                    round="10px"
                    color="#46afcc"
                    textSizeRatio={1}
                  />
                )}
              </span>
              <UncontrolledTooltip placement="top" target={user.username}>
                {user.username}
              </UncontrolledTooltip>
            </div>
          )
        })}
      </div>
    </div>
  )
}
