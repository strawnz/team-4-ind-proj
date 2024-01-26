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
                <Link to="/destinations">DESTINATIONS</Link>
            </div>
            <div className="mini-nav__item">
                <Link to="">ACCOMMODATIONS</Link>
            </div>
            <div className="mini-nav__item">
                <Link to="">ONBOARD ACTIVITIES</Link>
            </div>
            <div className="mini-nav__item">
                <Link to="">EXCURSIONS</Link>
            </div>
            <div className="mini-nav__item">
                <Link to="">FINANCING</Link>
            </div>
        </div>
        </>
    );
}

export default MiniNav;