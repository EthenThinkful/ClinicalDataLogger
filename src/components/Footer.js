import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
            <nav>Ethen.dev</nav>
            <Link  to={'https://ethenportfolio.vercel.app/'}>Back To Portfolio</Link>
            </div>
        </footer>
    )
}

export default Footer;