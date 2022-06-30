import 'core-js/stable';
import 'regenerator-runtime/runtime';
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";
import ReactGA from "react-ga";
ReactGA.initialize("UA-200859802-2");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById("root"));
