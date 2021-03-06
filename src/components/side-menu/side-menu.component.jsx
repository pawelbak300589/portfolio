import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCogs, faEye, faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebookSquare, faGithub, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import './side-menu.styles.scss';

const SideMenu = () => {
    return (
        <div id="sideMenu">
            <Link to="/" className="logo">
                <span>P</span>
                <span>B</span>
                {' '}
                <small>Pawel Bak</small></Link>
            <nav>
                <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
                <Link to="/about"><FontAwesomeIcon icon={faUser} /></Link>
                <Link to="/skills"><FontAwesomeIcon icon={faCogs} /></Link>
                <Link to="/portfolio"><FontAwesomeIcon icon={faEye} /></Link>
                <Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /></Link>
            </nav>
            <ul className="social-media">
                <li><a href="https://www.linkedin.com/in/pawel-bak-0b4236b6/"
                       target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="https://github.com/pawelbak300589"
                       target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a></li>
            </ul>
        </div>
    );
};

export default SideMenu;
