import { useNavigate } from 'react-router';
import BtnPrimary from '../../BtnPrimary/BtnPrimary';
import classes from './work.module.css';
import WorkCard from './WorkCard';


export default function HowWeWork() {
    const navigate = useNavigate()
    return (
        <section className={`reveal ${classes.work}`}>
            <div className="container">
                <div className={classes.workBody}>
                    <div className={classes.workLeft}>
                        <h2>How we work</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <BtnPrimary
                        onClick={()=>navigate('/contact')}
                            title="Get in touch with us"
                            titleColor="#2405F2"
                            rightArrColor="#2405F2"
                        />
                    </div>
                    <div className={classes.workRight}>
                        <WorkCard title="Strategy" description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' />
                        <WorkCard title="Wireframing" description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' />
                        <WorkCard title="Design" description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' />
                        <WorkCard title="Development" description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' />
                    </div>
                </div>
            </div>
        </section>
    )
}
