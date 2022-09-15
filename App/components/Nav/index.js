import React from "react";
import {Link} from "react-router-dom";
import {Searcher, Social} from "..";

const
    plat = new Social({path: "el-ang/Favood"}),
    link = (loc, name = "")=> (name = "/"+name) === loc? undefined: name,
    Nav = ()=> <nav>
        <Link to={link} className="profile">Favood</Link>
        <div className="menu">
            <Link to={loc=> link(loc, "menu")}>Menu</Link>
            <Link to={loc=> link(loc, "about")}>About</Link>
            <Social plat={plat.GITHUB} path="el-ang/Favood"/>
            <Searcher/>
        </div>
    </nav>;

export default Nav;