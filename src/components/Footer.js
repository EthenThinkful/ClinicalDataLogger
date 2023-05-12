import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
            <Link  to={'/addPatient'}>Portfolio</Link>
            <nav>Ethen.dev</nav>
            </div>
        </footer>
    )
}

export default Footer;