# Task Manager Frontend

A React-based task management application with a modern UI built using Vite, Tailwind CSS v4, and Radix UI components.

## Features

- **Task CRUD Operations** - Create, read, update, and delete tasks
- **Priority System** - Low, medium, and high priority levels with color coding
- **Categories & Tags** - Organize tasks with custom categories and tags
- **Due Date Tracking** - Calendar-based date picker with overdue warnings
- **Advanced Search** - Filter by keyword, category, priority, or tags
- **Dark Mode** - Toggle between light and dark themes
- **LocalStorage Persistence** - Data persists across browser sessions
- **Responsive Layout** - Mobile-friendly design

## Tech Stack

- **React 19** with JSX
- **Vite 7** for development and bundling
- **Tailwind CSS v4** with custom design tokens
- **Radix UI** for accessible components
- **React Router v7** for client-side routing
- **TanStack Query** for async state management
- **date-fns** for date utilities
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/avishkar-004/Task-Manager-Frontend.git
cd Task-Manager-Frontend
npm install
```

### Development

```bash
npm run dev
```

The app will start at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI primitives
│   ├── Login.jsx           # Login screen
│   ├── TaskDashboard.jsx   # Main dashboard with state
│   ├── TaskForm.jsx        # Task create/edit form
│   ├── TaskFilter.jsx      # Status filter tabs
│   ├── TaskItem.jsx        # Task card component
│   ├── TaskList.jsx        # Task list with animations
│   └── TaskSearch.jsx      # Search and filter bar
├── contexts/
│   └── ThemeContext.jsx     # Dark mode provider
├── hooks/
│   ├── use-mobile.jsx      # Responsive breakpoint hook
│   └── use-toast.js        # Toast notification hook
├── lib/
│   └── utils.js            # Utility functions
├── pages/
│   ├── Index.jsx           # Home page
│   └── NotFound.jsx        # 404 page
├── types/
│   └── task.js             # JSDoc type definitions
└── utils/
    └── localStorage.js     # Data persistence
```

## License

MIT
