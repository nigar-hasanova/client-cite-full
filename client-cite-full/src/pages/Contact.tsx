import { Helmet } from 'react-helmet-async'
import classes from '../assets/css/contact.module.css'
import Form from '../components/Form/Form'

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <section className={classes.contact}>
                <div className="container">
                    <div className={classes.contactBody}>
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <Form />
                    </div>
                </div>
            </section>
        </>
    )
}
