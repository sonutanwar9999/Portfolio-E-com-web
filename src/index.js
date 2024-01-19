import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./Store";
import { Provider } from "react-redux";
import { AuthProvider } from "./AuthContext";
// import OtherData from './OtherData';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <AuthProvider>
  <Provider store={store}>
    <App />

    {/* <OtherData /> */}
  </Provider>
  // </AuthProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
