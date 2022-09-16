import React from "react";

class Social extends React.Component{
    // #region - ENUMS
    CUSTOM = (id, url)=> Object.freeze({id, url})
    get INSTAGRAM(){return this.CUSTOM("ig", "https://instagram.com/")}
    get FACEBOOK(){return this.CUSTOM("fb", "https://facebook.com/")}
    get WHATSAPP(){return this.CUSTOM("wa", "https://wa.me/")}
    get TWITTER(){return this.CUSTOM("tw", "https://twitter.com/")}
    get YOUTUBE(){return this.CUSTOM("yt", "https://youtube.com/")}
    get GITHUB(){return this.CUSTOM("gh", "https://github.com/")}
    get LINKEDIN(){return this.CUSTOM("li", "https://linkedin.com/in/")}
    get SHOWWCASE(){return this.CUSTOM("sc", "https://showwcase.com/")}
    // #endregion

    render(){return <a href={this.props.plat.url+this.props.path} target="_blank" className={this.props.plat.id}></a>}
}

export default Social;