import React from "react";
import { Link } from "react-router-dom";
import footerlogo from '../assets/images/footerlogo.png'

const Footer = () => {
    return(
        <div id="footer" className="flex justify-between flex-wrap gap-16 items-center" >
            <div id="footer-left" className="flex gap-3 items-center flex-wrap">
                <Link to="https://www.zairza.co.in/">
                <img src={footerlogo} className="w-11" alt="navbarlogo" />
                </Link>
                <div id="footer-text" className="text-justify">A educational portal developed by Zairza for the welfare of the students of Odisha University Of Technology & Research.
                </div>
            </div>
            <div id="footer-right">
                <ul className="flex gap-6 pl-0">
                    <li>
                        <a href="https://www.youtube.com/@zairzarobosofdescluboutrb1825" target="_blank" rel="noopener noreferrer" className="text-white">Youtube</a>
                        </li>
                    <li>
                        <a href="https://www.instagram.com/zairza.outr/" target="_blank" rel="noopener noreferrer" className="text-white">Instagram</a>
                        </li>
                    <li>
                        <a href="https://in.linkedin.com/company/zairza" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer