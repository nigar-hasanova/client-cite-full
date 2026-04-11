import { Link } from "react-router";
import classes from '../assets/css/error.module.css'

export default function Error() {
    return (
        <div className={classes.errorContainer}>
            <h1 className={classes.errorCode}>404</h1>

            <h2 className={classes.errorTitle}>
                Oops! Page not found
            </h2>

            <p className={classes.errorText}>
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>

            <Link to="/" className={classes.errorBtn}>
                Go Back Home
            </Link>
        </div>
    )
}
