import './Header.scss';
import hamburg from "../../assets/images/icons/hamburg.svg";
import rclogo from "../../assets/images/logos/royalcarribeanlogo.png";
import USA from "../../assets/images/icons/USA.svg";
import heart from "../../assets/images/icons/heart.svg";
import bell from "../../assets/images/icons/bellmoney.svg";
import magglass from "../../assets/images/icons/magglass.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
        <header>
          <nav>
            <section className='header__secondary'>
                    <div className='country'>
                        <p className='header__text'>UNITED STATES</p>
                        <img src={USA} classname='icon__flag' alt='USA flag' />
                    </div>
                    <p>866-562-7625</p>
            </section>
            <section className='nav__container'>
              <article className='nav__left'>
                <img src={hamburg} alt="hamburger menu icon"/>
                <Link to="/">
                  <img src={rclogo} className='rclogo' alt="royalcaribbeanlogo"/>
                </Link>
              </article>
              <article className='nav__center'>
                <p className="nav__link-text">FIND A CRUISE</p>
                <p className="nav__link-text">DEALS</p>
                <p className="nav__link-text">SHIPS</p>
                <p className="nav__link-text">DESTINATIONS</p>
                <p className="nav__link-text">MANAGE MY CRUISE</p>
              </article>
              <article className='nav__right'>
                <img src={heart} alt="heart icon"/>
                <img src={bell} alt="bell icon"/>
                <p className="nav__link-text">SIGN IN</p>
                <img src={magglass} alt="magnifying glass icon"/>
              </article>
            </section>
          </nav>
        </header>
        </>
    )
};

export default Header;