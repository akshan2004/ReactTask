# React Tasks

This repository contains two separate React projects built with Vite.

## Projects

### Task 1: Searchable Product List (`Task1/`)

A product table with the provided four products, case-insensitive name search, price sorting, and an empty state when no products match.

To run it:

```bash
cd Task1
npm install
npm run dev
```

### Task 2: Simple Task Tracker (`Task2/`)

A task tracker that supports adding non-empty tasks, marking tasks complete, deleting tasks, filtering by status, and counting active tasks.

To run it:

```bash
cd Task2
npm install
npm run dev
```

## Requirements

- Node.js
- npm

## Available scripts

Run these from either project folder:

```bash
npm run dev     # Start the development server
npm run lint    # Run Oxlint
npm run build   # Create a production build
npm run preview # Preview the production build
```

## Folder structure

```text
ReactTask/
├── README.md
├── Task1/
│   └── src/
│       └── components/ProductList.jsx
└── Task2/
    └── src/
        └── Components/TaskTracker.jsx
```
