import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger"; //dev purpose
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import reducers from "./root-reducer";
import rootSaga from "./root-saga";

const { createBrowserHistory } = require("history");

const history = createBrowserHistory({ basename: "/" });

const rootReducer = combineReducers({
  ...reducers,
  router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, routerMiddleware(history)];

const ENVIRONMENT = "development";

if (ENVIRONMENT === "development") {
  // middleware.push(logger);
}

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export { history, store };
