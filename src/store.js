import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./_reducers";

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== "production") {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
}
