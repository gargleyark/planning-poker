import Avatar from 'react-avatar'
import './Header.css'

export function Header({ username }) {
  return (
    <header>
      <h1>
        Planning Poker<span> - ♠️♥️♣️♦️</span>
      </h1>
      {username && (
        <div>
          <Avatar name={username} size={36} round="17px" color={'#544098'} />
        </div>
      )}
    </header>
  )
}
