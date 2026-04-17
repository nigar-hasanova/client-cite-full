import classes from '../assets/css/blog.module.css'
import blogHero from '../assets/images/BlogPageImages/blogHero.png'
import blogDetail from '../assets/images/BlogPageImages/blogDetail.png'
import { Helmet } from "react-helmet-async";


export default function BlogDetails() {
    return (
        <>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <section className={classes.blogDetail}>
                <div className="container">
                    <div className={classes.blogFirst}>
                        <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
                        <h6>Andrew Jonson Posted on 27th January 2021</h6>
                        <img src={blogHero} alt="img" className={classes.blogHero} />
                    </div>
                    <div className={classes.blogDetailsText}>
                        <div className={classes.text}>
                            <h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                <span>Excepteur sint occaecat</span> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className={classes.text2}>
                            <h3>
                                Ut enim ad minim veniam, quis nostrud.
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                <span>cupidatat non</span> proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                <span>exercitation ullamco</span> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <img src={blogDetail} alt="img" />
                        </div>
                        <div className={classes.text}>
                            <h3>
                                Ut enim ad minim veniam, quis nostrud.
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                <span> exercitation ullamco</span> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
