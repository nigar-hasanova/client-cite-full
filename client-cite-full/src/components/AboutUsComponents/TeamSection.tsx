import classes from '../../assets/css/about.module.css'
import TeamCard from './TeamCard/TeamCard'
import team1 from "../../assets/images/AboutPageImages/team1.png";
import team2 from "../../assets/images/AboutPageImages/team2.png";
import team3 from "../../assets/images/AboutPageImages/team3.png";

export default function TeamSection() {
    return (
        <section className={`reveal ${classes.team}`}>
            <div className="container">
                <div className={classes.teamBody}>
                    <h2 className={classes.teamHeading}>Meet our team</h2>
                    <div className={classes.teamCards}>
                        <TeamCard
                            teamCardImg={team1}
                            name={'John Smith'}
                            position={'CEO'}
                        />
                        <TeamCard
                            teamCardImg={team2}
                            name={'Simon Adams'}
                            position={'CTO'}
                        />
                        <TeamCard
                            teamCardImg={team1}
                            name={'Paul Jones'}
                            position={'Design Lead'}
                        />
                        <TeamCard
                            teamCardImg={team3}
                            name={'Sara Hardin'}
                            position={'Project Manager'}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
