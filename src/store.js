import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./_reducers";

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

export default function configureStore(preloadedState) {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
}
