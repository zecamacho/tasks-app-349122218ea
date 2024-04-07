# Tasks App

This project is a task management application built with modern web technologies. It allows users to create, update, and delete tasks, as well as mark them as complete.

## Features

- **Task Management**: Users can create new tasks, update existing tasks, and delete tasks. Each task has a name and a description.
- **Task Status**: Tasks can be marked as complete or incomplete. The status of each task is clearly indicated in the user interface.
- **User Interface**: The application has a clean and intuitive user interface, making it easy for users to manage their tasks.
Determining workspace structure
- **Users List**: The application includes a list of users, implemented in the [`Users`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fviews%2Fusers%2Fusers.tsx%22%2C%22Users%22%5D "src/views/users/users.tsx") component. This component fetches user data using the [`useGetUsersQuery`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fstore%2Fslices%2Fusers.api.ts%22%2C%22useGetUsersQuery%22%5D "src/store/slices/users.api.ts") hook and displays each user in a clickable card. Clicking on a user card navigates to the detailed view of that user.

- **User Details with Back Navigation**: The [`UserDetails`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fviews%2Fusers%2Fuser-details.tsx%22%2C%22UserDetails%22%5D "src/views/users/user-details.tsx") component displays detailed information about a specific user. It fetches the user data using the [`useGetUserQuery`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fstore%2Fslices%2Fusers.api.ts%22%2C%22useGetUserQuery%22%5D "src/store/slices/users.api.ts") hook. This component also includes a back button, implemented with the `useNavigate` hook from `react-router-dom`, which allows navigation back to the previous view.

## Technologies

- **React**: The user interface is built with [React](https://reactjs.org/), a  JavaScript library for building user interfaces.
- **TypeScript**: The application is written in [TypeScript](https://www.typescriptlang.org/), a superset of JavaScript that adds types to the language.
- **Redux Toolkit**: State management is handled with [@reduxjs/toolkit](https://redux-toolkit.js.org/).
- **React Router Dom**: Routing is managed with [react-router-dom](https://reactrouter.com/web/guides/quick-start).
- **Material UI**: The user interface design is based on [Material UI](https://mui.com/), with customizations applied to the base styles.
- **React Hook Form**: Forms are managed with [react-hook-form](https://react-hook-form.com/), a performant, flexible and extensible forms with easy-to-use validation.
- **Vite**: The application is built with [Vite](https://vitejs.dev/), a next-generation front-end build tool. Replaces create-react-app.

## Development

To start the development server, run:

```sh
pnpm run dev
```

To build the application for production, run:

```sh
pnpm run build
```

To lint the codebase, run:

```sh
pnpm run lint
```
