import classes from '../assets/css/blog.module.css'
import BlogCard from '../components/HomeComponents/BlogCard/BlogCard'
import appleMonitor from '../assets/images/HomePageImages/appleMonitor.png'
import woman from '../assets/images/HomePageImages/woman.png'
import bussinesman from '../assets/images/HomePageImages/businesman.png'
import blogHero from '../assets/images/BlogPageImages/blogHero.png'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async'

export default function Blog() {
    return (
        <>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <section className={classes.blog}>
                <div className="container">
                    <div className={classes.blogFirst}>
                        <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
                        <h6>Andrew Jonson Posted on 27th January 2021</h6>
                        <img src={blogHero} alt="img" className={classes.blogHero} />
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts
                            the horizon of the sea to the level of the spectator on a hillside.</p>
                        <Link to={`/blog/:id`} className={classes.readMore}>Read more</Link>
                    </div>
                    <div className={classes.blogCardBody}>
                        <h2>Our Blog</h2>
                        <div className={classes.blogCardGrid}>
                            <BlogCard
                                id={1}
                                cardImage={appleMonitor}
                                dateTitle={'19 Jan 2022'}
                                description={'How one Webflow user grew his single person consultancy from $0-100K in 14 months'}
                                text={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'}
                            />
                            <BlogCard
                                id={2}
                                cardImage={woman}
                                dateTitle={'19 Jan 2022'}
                                description={'How one Webflow user grew his single person consultancy from $0-100K in 14 months'}
                                text={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'}
                            />
                            <BlogCard
                                id={3}
                                cardImage={bussinesman}
                                dateTitle={'19 Jan 2022'}
                                description={'How one Webflow user grew his single person consultancy from $0-100K in 14 months'}
                                text={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'}
                            />
                            <BlogCard
                                id={4}
                                cardImage={appleMonitor}
                                dateTitle={'19 Jan 2022'}
                                description={'How one Webflow user grew his single person consultancy from $0-100K in 14 months'}
                                text={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'}
                            />
                            <BlogCard
                                id={5}
                                cardImage={woman}
                                dateTitle={'19 Jan 2022'}
                                description={'How one Webflow user grew his single person consultancy from $0-100K in 14 months'}
                                text={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'}
                            />
                            <BlogCard
                                id={6}
                                cardImage={bussinesman}
                                dateTitle={'19 Jan 2022'}
                                description={'How one Webflow user grew his single person consultancy from $0-100K in 14 months'}
                                text={'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'}
                            />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
