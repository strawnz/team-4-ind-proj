import { Link, useLocation } from 'react-router-dom';
import './MiniNav.scss';

function MiniNav() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    }

    return (
        <>
        <div className="mini-nav">
            <div className={`mini-nav__item ${isActive('/')}`}>
                <Link to="/" className='mini-nav__link'>NEW TO CRUISE</Link>
            </div>
            <div className={`mini-nav__item ${isActive('/destinations')}`}>
                <Link to="/destinations" className='mini-nav__link'>DESTINATIONS</Link>
            </div>
            <div className={`mini-nav__item ${isActive('/accommodations')}`}>
                <Link to="/accommodations">ACCOMMODATIONS</Link>
            </div>
            <div className={`mini-nav__item ${isActive('/activities')}`}>
                <Link to="/activities">ONBOARD ACTIVITIES</Link>
            </div>
            <div className={`mini-nav__item ${isActive('/excursions')}`}>
                <Link to="/excursions">EXCURSIONS</Link>
            </div>
            <div className={`mini-nav__item ${isActive('/financing')}`}>
                <Link to="/financing">FINANCING</Link>
            </div>
        </div>
        </>
    );
}

export default MiniNav;