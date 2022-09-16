import React from "react";
import {useLocation} from "react-router-dom";
import {Searcher, Social} from "../";

const
    plat = new Social(),
    link = (name = "")=> (name = "/"+name) === useLocation()? undefined: name,
    Nav = ()=> <nav>
        <a href={link()} className="profile">Favood</a>
        <div className="menu">
            <a href={link("menu")}>Menu</a>
            <a href={link("about")}>About</a>
            <Social plat={plat.GITHUB} path="el-ang/Favood"/>
            <Searcher/>
        </div>
    </nav>;

export default Nav;