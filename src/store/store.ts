import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import tasksSlice from "./slices/tasks";
import { usersSlice } from "./slices/users.api";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    [usersSlice.reducerPath]: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
