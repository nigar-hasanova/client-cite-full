import classes from './footer.module.css';
import { NavLink } from "react-router";

export default function copyright() {
    return (

        <section className={classes.copyright}>
            <div className="container">
                <div className={classes.copyrightBody}>
                    <div className={classes.copyrightLeft}>
                        <p>Copyright 2022, Finsweet.com</p>
                    </div>
                    <div className={classes.copyrightRight}>
                        <ul className={classes.footerMenu}>
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/aboutus'}>About us</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/features'}>Features</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/pricing'}>Pricing</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/#faq'}>FAQ</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/blog'}>Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
