import ProcessCard from './ProcessCard/ProcessCard'
import classes from '../../assets/css/about.module.css'


export default function ProcessSection() {
    return (
        <section className={`reveal ${classes.process}`}>
            <div className="container">
                <div className={classes.processBody}>
                    <div className={classes.processHeading}>
                        <h2>The process we follow</h2>
                    </div>
                    <div className={classes.processCards}>
                        <ProcessCard
                            title={'Planning'}
                            description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} />
                        <ProcessCard
                            title={'Conception'}
                            description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} />
                        <ProcessCard
                            title={'Design'}
                            description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} />
                        <ProcessCard
                            title={'Development'}
                            description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'} />
                    </div>
                </div>
            </div>
        </section>
    )
}
