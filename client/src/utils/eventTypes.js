export function isUserEvent(message) {
  const evt = JSON.parse(message.data)
  return (
    evt.type === 'userevent' ||
    evt.type === 'voteMade' ||
    evt.type === 'revealVotes'
  )
}

export function isDocumentEvent(message) {
  const evt = JSON.parse(message.data)
  return evt.type === 'contentchange'
}

export function isVoteEvent(message) {
  const evt = JSON.parse(message.data)
  return evt.type === 'voteMade'
}

export function isRevealEvent(message) {
  const evt = JSON.parse(message.data)
  return evt.type === 'revealVotes'
}
