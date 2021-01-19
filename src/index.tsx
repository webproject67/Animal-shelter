import './sass/style.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";
import svg from "./svg"
import App from "./components/app/app";
import base from "./mock/base";

svg();
ReactDOM.render(<App base={base}/>, document.querySelector(`#root`));