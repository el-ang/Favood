import React from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import {Nav} from "./components";
import {/* About,  */Main/* , Menu, Lost */} from "./pages";
import "./style.css"

const App = ()=> <Router>
    <Nav/>
    <Routes>
        <Route path="/">
            <Route index element={<Main/>}/>
            <Route path="menu" element={{/* <Menu/> */}}/>
            <Route path="about" element={{/* <About/> */}}/>
            <Route path="*" element={{/* <Lost/> */}}/>
        </Route>
    </Routes>
</Router>;

export default App;