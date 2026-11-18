# Simple Task Tracker

A small React task tracker built with Vite. Add tasks, mark them complete, filter the list, and keep track of active tasks.

## Features

- Add tasks with a name that is not blank or whitespace-only
- See a message when trying to add an empty task
- Mark tasks complete with a checkbox
- Delete individual tasks
- Filter tasks by All, Active, or Completed
- See the count of active (incomplete) tasks
- Responsive layout for smaller screens

## Requirements

- Node.js and npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints a local URL in the terminal after the development server starts.

## Available scripts

```bash
npm run dev    # Start the development server
npm run lint   # Run Oxlint
npm run build  # Create a production build
npm run preview # Preview the production build
```

## Project structure

```text
src/
  Components/
    TaskTracker.jsx
    TaskTracker.css
  App.jsx
  index.css
```

## How it works

The `TaskTracker` component stores the task list, current input, and selected filter in React state. It derives the visible tasks from the selected filter and calculates the active count from all incomplete tasks.
