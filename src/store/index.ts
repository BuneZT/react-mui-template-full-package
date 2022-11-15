import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducers";

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
  reducer: reducers,
});

const { dispatch } = store;

export { store, dispatch };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
