## Assignment Overview

This assignment focuses on building a structured Next.js application while implementing important concepts from Parts P1 to P8.

The application demonstrates how Next.js routing, layouts, loading states, error boundaries, and React state-management patterns work together in a real application.

## Features

# P1 - Next.js App Router

- Next.js App Router setup
- File-based routing
- Home page
- About page
- Dashboard page
- Navigation between routes

# P2 - Nested Routing and Layouts

- Root layout for the entire application
- Dashboard-specific nested layout
- Shared navigation
- Shared footer
- Consistent application structure

# P3 - Navigation

- Reusable navigation component
- Home, About, and Dashboard routes
- Client-side navigation using Next.js `Link`
- Responsive navigation layout

# P4 - Loading UI

- Route-level `loading.tsx`
- Dashboard loading state
- Animated loading indicator
- Demonstrates Next.js Suspense-based loading behavior

# P5 - Error Boundary

- Dashboard-specific `error.tsx`
- Client Component error boundary
- Error recovery UI
- Reset functionality
- Errors can be tested through the dashboard error state

# P6 - React State and Local Storage

- Custom `useLocalStorage` hook
- Persistent client-side state
- Data remains available after page refresh
- Reusable TypeScript hook

# P7 - useReducer

- Task state managed using `useReducer`
- Add tasks
- Toggle task completion
- Edit task titles
- Delete tasks
- Immutable state updates
- Centralized task actions

# P8 - Controlled Components and Reusable Logic

- Controlled input component
- State-driven form values
- Reusable `ControlledInput`
- Helper function for editing task titles
- Type-safe component and reducer logic