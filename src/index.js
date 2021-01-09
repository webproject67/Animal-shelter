import './sass/style.scss';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const svgModules = require.context('../src/img/svg', true, /\.svg$/);
svgModules.keys().forEach(svgModules);

ReactDOM.render(<App/>, document.querySelector(`#root`));