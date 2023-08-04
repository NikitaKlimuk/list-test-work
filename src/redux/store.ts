import { createStore, applyMiddleware, Store, Middleware } from "redux";
import { rootReducer } from "./reduсers";

const middleware: Middleware[] = [];

export const store: Store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export type RootState = ReturnType<typeof rootReducer>;
