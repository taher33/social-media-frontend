import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import reducer from "./store/reducers/reducer";
import { BrowserRouter, Route } from "react-router-dom";
// import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  auth: reducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route>
          <App />
        </Route>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
