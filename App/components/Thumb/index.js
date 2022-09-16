import React from "react";

const
    strDigit = (num, digit = 0)=> parseInt(num).toString().padStart(digit, "0"),
    Thumb = ({id, img, name, desc})=> <a href={"/menu/"+strDigit(id, 3)} target="_blank" className="item" style={{"--thumb": `url("${img}")`}}>
        <h6>{"#"+strDigit(id, 3)}</h6><h3>{name}</h3>
        {desc?<p>{desc.length > 80? desc.substring(0, 60): desc}</p>: null}
    </a>

export default Thumb;