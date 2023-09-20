const { WebSocket, WebSocketServer } = require('ws')
const uuidv4 = require('uuid').v4
const express = require('express')
const path = require('path')
const app = express()
const http = require('http').Server(app)

// Spinning the http server and the WebSocket server.
const wsServer = new WebSocketServer({ server: http })
const port = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// I'm maintaining all active connections in this object
const clients = {}
// I'm maintaining all active users in this object
const users = {}
// The current editor content is maintained here.
let editorContent = null
// User activity history.
let userActivity = []
// Votes are maintained here.
let votes = {}
let votesRevealed = false
let rooms = {}

// Event types
const typesDef = {
  USER_EVENT: 'userevent',
  CONTENT_CHANGE: 'contentchange',
  VOTE_EVENT: 'voteMade',
  REVEAL_EVENT: 'revealVotes',
}

function broadcastMessage(json) {
  // We are sending the current data to all connected clients
  const data = JSON.stringify(json)
  for (let userId in clients) {
    let client = clients[userId]
    if (client.readyState === WebSocket.OPEN) {
      client.send(data)
    }
  }
}

function updateUserActivity(activity) {
  userActivity.push(activity)
  if (userActivity.length > 20) {
    userActivity = userActivity.reverse().slice(0, 20).reverse()
  }
}

function handleMessage(message, userId) {
  const dataFromClient = JSON.parse(message.toString())

  const json = { type: dataFromClient.type }
  if (dataFromClient.type === typesDef.USER_EVENT) {
    users[userId] = dataFromClient.content
    updateUserActivity(`${dataFromClient.content.username} joined`)

    json.data = { votes, revealed: votesRevealed }
  } else if (dataFromClient.type === typesDef.CONTENT_CHANGE) {
    editorContent = dataFromClient.content
    json.data = { editorContent, userActivity }
  } else if (dataFromClient.type === typesDef.VOTE_EVENT) {
    votes = {
      ...votes,
      [dataFromClient.content.username]: dataFromClient.content.vote,
    }
    updateUserActivity(
      `${dataFromClient.content.username} has ${
        votes[dataFromClient.content.username] ? 'changed their vote' : 'voted'
      }!`
    )

    json.data = { votes }
  } else if (dataFromClient.type === typesDef.REVEAL_EVENT) {
    votesRevealed = dataFromClient.content.revealed
    if (dataFromClient.content.revealed === true) {
      updateUserActivity('Votes have been revealed!')
    } else {
      updateUserActivity('Votes have been reset.')
      votes = {}
    }

    json.data = { votes, revealed: votesRevealed }
  }

  broadcastMessage({ ...json, data: { ...json.data, users, userActivity } })
}

function handleDisconnect(userId) {
  const json = { type: typesDef.USER_EVENT }
  const username = users[userId]?.username || userId
  updateUserActivity(`${username} left`)

  delete votes[username]
  json.data = { users, userActivity, votes }
  delete clients[userId]
  delete users[userId]
  if (Object.values(users).length === 0) {
    userActivity = []
    votes = {}
  }
  if (Object.values(votes).length === 0) {
    votesRevealed = false
  }
  broadcastMessage(json)
}

// A new client connection request received
wsServer.on('connection', function (connection) {
  // Generate a unique code for every user
  const userId = uuidv4()

  // Store the new connection and handle messages
  clients[userId] = connection

  connection.on('message', (message) => {
    handleMessage(message, userId)
  })

  // User disconnected
  connection.on('close', () => handleDisconnect(userId))
})

http.listen(port, function () {
  console.log('listening on *:' + port)
})
