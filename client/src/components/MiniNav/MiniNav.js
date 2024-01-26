import { Link } from 'react-router-dom';
import './MiniNav.scss';

function MiniNav() {
    return (
        <>
        <div className="mini-nav">
            <div className="mini-nav__item">
                <Link to="/" className='mini-nav__link'>NEW TO CRUISE</Link>
            </div>
            <div className="mini-nav__item">
                <Link href="#">DESTINATIONS</Link>
            </div>
            <div className="mini-nav__item">
                <Link href="#">ACCOMMODATIONS</Link>
            </div>
            <div className="mini-nav__item">
                <Link href="#">ONBOARD ACTIVITIES</Link>
            </div>
            <div className="mini-nav__item">
                <Link href="#">EXCURSIONS</Link>
            </div>
            <div className="mini-nav__item">
                <Link href="#">FINANCING</Link>
            </div>
        </div>
        </>
    );
}

export default MiniNav;