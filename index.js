import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";

const root = createRoot(document.querySelector("body#app"));
root.render(<React.StrictMode><App/></React.StrictMode>);