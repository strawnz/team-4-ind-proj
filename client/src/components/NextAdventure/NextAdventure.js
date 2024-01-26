import "./NextAdventure.scss";
import { Link } from "react-router-dom";

function NextAdventure() {
    return (
        <>
            <section className="next-adventure">
                <h2>ready for your next <br/> adventure?</h2>
                <Link to="/destinations" className="button">Discover Now</Link>
            </section>
        </>
    );
}

export default NextAdventure;