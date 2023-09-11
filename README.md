# Planning Poker 2023

## Problem statement

My favourite planning poker isn't free any more.

## Overview

I built this on a train

It probably works, but could do with typescript, tests, etc, and there's no nodemon to make development easier

![](./media/preview.png)

## How to run the app

```bash
#-- Setup and start the server
cd server
npm install # or yarn install
npm start # or yarn start

#-- Setup and start the client
cd client
npm install # or yarn install
npm start # or yarn start
```

## How to deploy the app

The server is all that is run on production, and serves a built version of the client.

To build the client and then serve it from the server:

```bash
cd server
npm install # or yarn install
npm build # or yarn start

cd ../client
npm install # or yarn install
npm start # or yarn start
```

You will now be able to visit the server directly and it will serve the built client

## Future features

Sans priorité

- Routing and more pages (about, FAQ, T&Cs)
- More than one room
- Link sharing (after routing)
- Custom points/sizes
- Suggest user name from previous session

## License

[MIT](LICENSE)
