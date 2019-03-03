import React from "react";
import ReactDOM from "react-dom";

import Menu from "../src/components/Menu";
import data from "./data";
import "./styles.css";

ReactDOM.render(<Menu recipes={data} />, document.getElementById("root"));
