import React from "react"
import {Link} from "react-router-dom"



function Header() {
    return (
        <div style={{position: "fixed"}} className="navbar">
            <ul className="navlist">
                <li><Link className="link"to="/">Home</Link></li>
                <li><Link className="link"to="/Work">Work</Link></li>
                <li><Link className="link"to="/Resume">Resume</Link></li>
                <li><Link className="link"to="/Contact">Contact</Link></li>
                <li><Link className="link"to="/Skillset">Skillset</Link></li>
            </ul>
            <hr/>
        </div>

    )
}

export default Header
