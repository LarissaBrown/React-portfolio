import React from "react"
import {Link} from "react-router-dom"

function Footer() {
    return ( 
        <div className="footer">
            <ul>
                <li><Link className="link" to="/Pastimes">Pastimes</Link></li>
                <li><Link className="link" to="/Bio">Bio</Link></li>
                <li><Link className="link" to="/Inspiration">Inspiration</Link></li>
                <li><Link className="link" to="/Testimonies">Testimonies</Link></li>
            </ul>
            <hr/>
        </div>
    )
}
export default Footer
