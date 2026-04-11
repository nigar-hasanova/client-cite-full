import classes from '../../assets/css/home.module.css'
import { Link } from "react-router";
import Faq from './Faq/Faq';

export default function FaqSection() {
  return (
   <section className={`reveal ${classes.faqSection}`} id='faq'>
    <div className="container">
        <div className={classes.faqBody}>
            <div className={classes.faqBodyLeft}>
                <h3>Frequently asked questions</h3>
                <Link to={'/contact'} className={classes.link}>Contact us for more info</Link>
            </div>
            <div className={classes.faqBodyRight}>
                <Faq />
            </div>
        </div>
    </div>
   </section>
  )
}
