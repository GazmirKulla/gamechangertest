import React from "react";
import "./App.css";
import { SideBar } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { history, store } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <SideBar />
          <Router>
            <Routes />
          </Router>
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;
