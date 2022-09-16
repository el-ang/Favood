import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Searcher, Social} from "../";

const
    plat = new Social({path: "el-ang/Favood"}),
    link = (name = "")=> (name = "/"+name) === useLocation()? undefined: name,
    Nav = ()=> <nav>
        <Link to={link()} className="profile">Favood</Link>
        <div className="menu">
            <Link to={link("menu")}>Menu</Link>
            <Link to={link("about")}>About</Link>
            <Social plat={plat.GITHUB} path="el-ang/Favood"/>
            <Searcher/>
        </div>
    </nav>;

export default Nav;