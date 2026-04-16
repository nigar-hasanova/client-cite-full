import logo from '../assets/icon-svg/logo.svg'
import burgerMenu from '../assets/icon-svg/burgerMenu.png'
import { NavLink, useLocation } from "react-router";
import { useState } from "react";

export default function Header() {
    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <NavLink to="/">
                            <img src={logo} alt="" />
                        </NavLink>
                    </div>
                    <ul className={`menu ${menuOpen ? "menuOpen" : ""}`}>
                        <li>
                            <NavLink
                                to="/"
                                onClick={() => setMenuOpen(false)}
                                className={() =>
                                    `menu-link ${location.pathname === "/" && !location.hash
                                        ? "active-link"
                                        : ""
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/aboutus"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `menu-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                About us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/portfolio"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `menu-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/features"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `menu-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                Features
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/pricing"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `menu-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `menu-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        <NavLink
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `menu-link ${isActive ? "active-link" : ""}`
                            }>
                            <button className="btn btn-nav">Contact us</button>
                        </NavLink>
                    </ul>
                    <div className="burgerMenu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <img src={burgerMenu} alt="burger" />
                    </div>
                </nav>
            </div>
        </header>
    )
}
