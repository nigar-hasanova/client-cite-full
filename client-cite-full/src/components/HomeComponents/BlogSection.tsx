import BlogCard from './BlogCard/BlogCard'
import classes from '../../assets/css/home.module.css'
import appleMonitor from '../../assets/images/HomePageImages/appleMonitor.png'
import woman from '../../assets/images/HomePageImages/woman.png'
import bussinesman from '../../assets/images/HomePageImages/businesman.png'


export default function BlogSection() {
    return (
        <section className={`reveal ${classes.blogSection}`}>
            <div className="container">
                <div className={classes.blogBody}>
                    <div className={classes.blogHeading}>
                        <h2>Our blog</h2>
                    </div>
                    <div className={classes.blogCards}>
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

                    </div>
                </div>
            </div>
        </section>
    )
}
