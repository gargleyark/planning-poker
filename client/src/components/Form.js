import { VoteOption } from './VoteOption'

export function Form({ username }) {
  const voteOptions = ['1', '2', '3', '5', '8', '13', '20', '🤷', '☕️']

  return (
    <div>
      <h2>Enter your estimate below to vote</h2>
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
