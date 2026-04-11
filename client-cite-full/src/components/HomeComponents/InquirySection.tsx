import classes from '../../assets/css/home.module.css';
import Form from './Form/Form'


export default function InquirySection() {
    return (
        <section className={`reveal ${classes.inquiry}`}>
            <div className="container">
                <div className={classes.inquiryBody}>
                    <div className={classes.imgSide}>
                        <h2>Building stellar websites for early startups</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                    <div className={classes.inquriryBoxSide}>
                        <h5>Send inquiry</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    )
}
