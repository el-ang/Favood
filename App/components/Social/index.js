import React from "react";
import {Link} from "react-router-dom";

class Social extends React.Component{
    // #region - ENUMS
    get INSTAGRAM(){return "ig"}
    get FACEBOOK(){return "fb"}
    get WHATSAPP(){return "wa"}
    get TWITTER(){return "tw"}
    get YOUTUBE(){return "yt"}
    get GITHUB(){return "gh"}
    get LINKEDIN(){return "li"}
    get SHOWWCASE(){return "sc"}
    // #endregion

    link(path, name = ""){
        switch(name){
            case this.INSTAGRAM:
                return "https://instagram.com/"+path;
            case this.FACEBOOK:
                return "https://facebook.com/"+path;
            case this.WHATSAPP:
                return "https://wa.me/"+path;
            case this.TWITTER:
                return "https://twitter.com/"+path;
            case this.YOUTUBE:
                return "https://youtube.com/"+path;
            case this.GITHUB:
                return "https://github.com/"+path;
            case this.LINKEDIN:
                return "https://linkedin.com/in/"+path;
            case this.SHOWWCASE:
                return "https://showwcase.com/"+path;
            default:
                return path;
        }
    }

    render(){return <Link href={this.link(this.props.path, this.props.plat)} target="_blank" className={this.props.plat}/>}
}

export default Social;