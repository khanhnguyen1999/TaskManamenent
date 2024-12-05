# Task Management Application

This is a comprehensive task management application built with React, Redux, and Tailwind CSS. It allows users to create, edit, delete, and filter tasks, as well as toggle between light and dark modes.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Setting up the Application](#setting-up-the-application)
4. [Running the Application](#running-the-application)
5. [Running Tests](#running-tests)
6. [Project Structure](#project-structure)
7. [Component Breakdown](#component-breakdown)
8. [State Management](#state-management)
9. [Styling Approach](#styling-approach)
10. [Development Workflow](#development-workflow)
11. [Environment Variables](#environment-variables)
12. [Deployment](#deployment)
13. [Contributing](#contributing)
14. [Important Technical Decisions](#important-technical-decisions)
15. [Future Improvements](#future-improvements)

## Features

- Create, edit, and delete tasks
- Mark tasks as complete or incomplete
- Filter tasks by status (all, incomplete, complete)
- Pagination for task list
- Dark mode toggle
- Responsive design
- Unit testing with Jest and React Testing Library

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or yarn (v1.22.0 or later)'

## Setting up the Application

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Start the development: `npm run start` or `yarn start`
4. Start the development server: `npm run server` or `yarn server`


## Technical Stack

### Frontend
- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router v6** - Routing and navigation
- **Tailwind CSS** - Styling and UI components
- **TypeScript** - Type safety and developer experience

## Backend & API Integration

### JSON Server Setup
The application uses `json-server` as a mock backend to provide a full REST API. Data is stored in a `db.json` file.
