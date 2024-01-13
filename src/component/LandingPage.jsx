import React from "react";
import LOGO from "../resources/netflix-app-icon_152.jpg";
const LandingPage=()=>
{
    return(
        <div>
            <nav>
                <div className="logoblock">
                    <img src={LOGO} alt=""/>
                </div>
                <div className="menublock">
                    <select name="Languages" id="">
                        <option value="">English</option>
                        <option value="">Hindi</option>
                    </select>
                    <br />
                   <button>Sign In</button>
                </div>
            </nav>
        </div>
    )
}
export default LandingPage;