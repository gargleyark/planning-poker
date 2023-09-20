import { VoteOption } from './VoteOption'

export function Form({ username }) {
  const voteOptions = ['XS', 'S', 'M', 'L', 'XL', '🤷', '☕️']

  return (
    <div>
      <h2>Enter your estimate below to vote</h2>
      <ul>
        <li>XS = less than 1 sprint</li>
        <li>S = 1 sprint</li>
        <li>M = 2 sprints</li>
        <li>L = 3 sprints</li>
        <li>XL = 4 sprints</li>
      </ul>
      <div className="form">
        {voteOptions.map((option) => (
          <VoteOption
            value={option}
            key={`vote-option-${option}`}
            username={username}
          />
        ))}
      </div>
    </div>
  )
}
