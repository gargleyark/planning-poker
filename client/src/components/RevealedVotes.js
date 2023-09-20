import './RevealedVotes.css'
import { ResetButton } from './ResetButton'

export function RevealedVotes({ votes }) {
  const votesArray = Object.entries(votes || {})
  const columnsWithValues = Object.entries(
    votesArray.reduce((prev, curr) => {
      if (!prev[curr[1]]) {
        prev[curr[1]] = 1
      } else {
        prev[curr[1]] += 1
      }

      return prev
    }, {})
  )

  const totalVotes = votesArray.length

  return (
    <section className="history">
      <h2>Votes</h2>
      <ul className="chart">
        {columnsWithValues.map((entry) => (
          <li>
            <span
              style={{ height: `${(entry[1] / totalVotes) * 100}%` }}
              title={`${entry[0]} points`}
            ></span>
          </li>
        ))}
      </ul>
      <h3>Vote breakdown</h3>
      {columnsWithValues.length > 1
        ? votesArray.map((entry) => (
            <p key={entry[0]}>{`${entry[0]} - ${entry[1]}`}</p>
          ))
        : `Everyone voted for ${votesArray?.[0]?.[1]} points!`}
      <ResetButton />
    </section>
  )
}
