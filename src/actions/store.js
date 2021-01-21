import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import reducer from "./reducer";

const devMode = process.env.NODE_ENV === "development";

const middleware = devMode ? applyMiddleware(logger) : applyMiddleware();

export default createStore(reducer, middleware);

// import { createStore } from "redux";
// import reducer from "./reducer";

// export default createStore(reducer);
