import BtnYellow from '../../BtnYellow/BtnYellow'
import BtnPrimary from '../../BtnPrimary/BtnPrimary'
import classes from './form.module.css';
import { useNavigate } from 'react-router';

export default function Form() {
    const navigate = useNavigate();
    return (
        <form action="" className={classes.form}>
            <input type="text" placeholder='Your Name' className={classes.input} />
            <input type="email" placeholder='Email' className={classes.input} />
            <input type="url" placeholder='Paste your Figma design URL' className={classes.input} />
            <BtnYellow title='Send an Inquiry' />
            <BtnPrimary
                onClick={() => navigate('/contact')}
                title='Get in touch with us'
                titleColor='#FFF'
                rightArrColor='#FFF'
                className={classes.formBtnPrimary} />
        </form>
    )
}
