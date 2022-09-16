import React from "react";
import {Thumb} from "../../components";
import menu from "../../../utils/menu.json";

const Main = ()=> <main>
    <section className="cover">
        <h1>Favood</h1>
        <h4>List of My Favorite Foods &amp; Drinks 🍕</h4>
    </section>
    <section className="display">
        {menu.map((item, id)=> Thumb({...item, id}))}
    </section>
</main>

export default Main;