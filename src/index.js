import './sass/style.scss';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import base from "./mock/base";

const svgModules = require.context('../src/img/svg', true, /\.svg$/);
svgModules.keys().forEach(svgModules);

ReactDOM.render(<App base={base}/>, document.querySelector(`#root`));