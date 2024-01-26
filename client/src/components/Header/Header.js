import './Header.scss';
import USA from "../../assets/images/icons/USA.svg";

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
            </nav>
            <div className='main-container'>
      <div className='div-image-fill'>
        <div className='div-image' />
      </div>
      <div className='div-link-figure-royal-caribbean-logo-border-svg'>
        <div className='div-royal-caribbean-logo-border-svg-fill'>
          <div className='royal-caribbean-logo-border' />
        </div>
      </div>
      <span className='nav-link-manage'></span>
      <span className='nav-link-find'>FIND A CRUISE</span>
      <span className='nav-link-destinations'>SHIPS</span>
      <span className='nav-link-sign-in'>DESTINATIONS</span>
      <span className='nav-link-deals'>MANAGE MY CRUISE</span>
      <span className='nav-link-ships'>SIGN IN</span>
      <div className='image-fill'>
        <div className='image' />
      </div>
      <div className='image-fill-1'>
        <div className='image-2' />
      </div>
      <div className='image-fill-3'>
        <div className='image-4' />
      </div>
      <div className='rectangle' />
    </div>

        </header>
        </>
    )
};

export default Header;