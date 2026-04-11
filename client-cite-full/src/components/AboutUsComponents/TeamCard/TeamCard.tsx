import classes from './team.module.css'
import facebookIcon from '../../../assets/icon-svg/aboutTeam/fb.svg'
import twitterIcon from '../../../assets/icon-svg/aboutTeam/twitter.svg'
import linkedinIcon from '../../../assets/icon-svg/aboutTeam/linkedin.svg'

type Props = {
    teamCardImg: string,
    name: string,
    position: string
}

export default function TeamCard({ teamCardImg, name, position }: Props) {
    return (
        <div className={classes.teamCard}>
            <div className={classes.imgContainer}>
                <img src={teamCardImg} alt="img" />
                <div className={classes.overlay}>
                    <div className={classes.socials}>
                        <a href="#"><img src={facebookIcon} alt="fb" /></a>
                        <a href="#"><img src={twitterIcon} alt="tw" /></a>
                        <a href="#"><img src={linkedinIcon} alt="in" /></a>
                    </div>
                </div>
            </div>
            <h6>{name}</h6>
            <p>{position}</p>
        </div>
    )
}
