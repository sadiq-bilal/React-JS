# Rock Paper Scissors

A Rock Paper Scissors game built with React, Vite, and Tailwind CSS.

## Features

- Play against the computer
- Live score tracking for you and the computer
- Colour-coded result messages for win, loss, and draw
- Responsive layout

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4

## Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

## Project Structure

```
src/
├── assets/images/     # rock, paper, scissor images
├── components/
│   ├── Choice.jsx     # clickable choice button
│   ├── ScoreBoard.jsx # user and computer scores
│   └── Message.jsx    # result message
├── App.jsx            # game logic and layout
├── index.css          # Tailwind import and theme colours
└── main.jsx           # app entry point
```

## How to Play

1. Click Rock, Paper, or Scissors.
2. The computer picks a random choice.
3. Rock beats Scissors, Scissors beats Paper, and Paper beats Rock.
4. The winner gets a point.